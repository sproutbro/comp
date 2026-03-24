## 아무나 만들수있는 페이지

```text
[Store]
  ↓
[subscribe]
  ├─ render
  └─ effect

[render]
  page → component tree 생성

[component]
  props only
  dispatch only
```

```ts
// ==========================================
//! 컴포넌트 규칙
//! props만 받는다
//! 상태 직접 접근 ❌
//! dispatch만 가능 ⭕
// ==========================================
type PostsPageProps = {
    posts: Post[]
    page: number
}

💣 지금 시도하면 망하는 것
컴포넌트 lifecycle 직접 구현 ❌
DOM diff 직접 구현 ❌
mount/unmount 강제 ❌

👉 이건 “virtual DOM 단계”임 (지금 아님)
```
