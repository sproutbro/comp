
type PostsState = {
    // 선택된 id값이 없는경우 리스트페이지 존재하는경우 디테일페이지
    selectedId?: number

    // 현재 페이지 번호
    page?: number

    // 가져온 게시물
    list: Post[]
}

type Post = {
    id: number
    title: string
}

type PostAction =
    | { type: "SET_POSTS", posts: Post[] }
    | { type: "SET_DETAIL", post: Post }
    | { type: "SELECT_POST", id: number | null }
