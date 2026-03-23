내 UI 화면

주요 방향만은 잊지말자 아무나 만들수있는 페이지
좋은 질문이다 👍
지금 고민하는 포인트는 사실 **“SPA 구조에서 제일 중요한 경계”**다

```text
URL = 상태다 (하지만 store가 직접 들고 있으면 안된다)
```

👉 URL은 **브라우저가 관리하는 상태**
👉 store는 **앱이 해석한 상태만 가진다**

---

# 🔥 역할 분리 (핵심 설계)

## 1️⃣ Browser (진짜 상태)

```text
location.pathname
history.pushState
popstate 이벤트
```

👉 “진짜 URL 상태”

---

## 2️⃣ Router (해석기 + 중재자)

```text
URL → route 해석
클릭 intercept
history 제어
```

👉 역할:

```text
“브라우저 상태를 → 앱 상태로 변환”
```

---

## 3️⃣ Store (앱 상태)

```ts
{
  page: {
    name: "postDetail",
    params: { id: 1 }
  }
}
```

👉 URL 그대로 ❌
👉 “의미 있는 상태만” ✅

---

## 4️⃣ Page / Component

```text
state 기반 렌더
필요하면 fetch
```

---

# 💥 흐름 (정답 구조)

---

## 👉 1. 사용자 클릭

```html
<a href="/posts/1">
```

---

## 👉 2. Router가 가로챔

```ts
document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest("a")
  if (!a) return

  const href = a.getAttribute("href")
  if (!href.startsWith("/")) return

  e.preventDefault()

  router.navigate(href)
})
```

---

## 👉 3. Router.navigate

```ts
navigate(path: string) {
  history.pushState(null, "", path)
  this.resolve(path)
}
```

---

## 👉 4. Router.resolve (핵심)

```ts
resolve(path: string) {
  const route = match(path)

  dispatch({
    type: "SET_PAGE",
    page: route.name,
    params: route.params
  })
}
```

---

## 👉 5. Store 변경

```ts
{
  page: {
    name: "postDetail",
    params: { id: 1 }
  }
}
```

---

## 👉 6. Component 반응

```ts
if (state.page.name === "postDetail") {
  fetch(`/posts/${state.page.params.id}`)
}
```

---

# 💥 핵심 포인트

## ❌ 하지 말아야 할 것

```ts
store = {
  url: "/posts/1"
}
```

👉 ❌ 의미 없음
👉 ❌ 중복 상태

---

## ✅ 해야 할 것

```ts
store = {
  page: {
    name: "postDetail",
    params: { id: 1 }
  }
}
```

---

# 🔥 역할 경계 정리

---

## 🔵 Router

👉 책임:

* URL 읽기 (`location.pathname`)
* URL 변경 (`pushState`)
* 클릭 intercept
* route match
* store dispatch

👉 ❌ 하지 말 것:

* DOM 렌더링
* fetch

---

## 🟢 Store

👉 책임:

* 상태 저장
* 상태 변경

👉 ❌ 하지 말 것:

* URL 처리
* history

---

## 🟡 Page / Component

👉 책임:

* 상태 기반 렌더
* fetch

👉 ❌ 하지 말 것:

* history 조작

---

# 💥 popstate (뒤로가기 대응)

```ts
window.addEventListener("popstate", () => {
  router.resolve(location.pathname)
})
```

👉 브라우저 상태 → 다시 store로 반영

---

# 🔥 질문 핵심 답

> “URL이 너무 크니까 store에 넣기 애매하다”

👉 맞다 그래서:

```text
URL → Router가 해석 → 의미 있는 상태만 store에 넣는다
```

---

# 🔥 구조 한 장 요약

```text
[Browser]
   ↓
[Router]  ← 클릭, popstate
   ↓
[Store]
   ↓
[Page / Component]
   ↓
[Fetch]
```

---

# 💥 추가 팁 (중요)

👉 fetch는 어디서?

### 선택 1 (추천)

```ts
Component에서
```

👉 이유:

* UI와 데이터 같이 움직임

---

### 선택 2

```ts
Router에서 preload
```

👉 나중에 최적화 단계

---

# 🚀 다음 단계 추천

지금 너 상태면 여기 가야됨:

👉 Router 클래스 직접 구현
👉 route match 함수
👉 params 파싱 (`/posts/:id`)

---

원하면 다음 바로 해준다:

👉 **“Router + match 함수 최소 구현 (실전 코드)”**
👉 지금 구조에 딱 맞게 만들어준다 😎
