



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
/*
오늘은 그냥 다안되려나 머리가 안돌아간다 
그냥 템플릿 묶음 준비한다 생각하고 html 이랑 css 몇개 만들어보자 

이것도 가장 간결하게 최서 코드로 레이아웃 부터 가보자

*/

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
