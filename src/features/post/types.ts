export type Post = {
    id: number
    title: string
    content: string
}

export type PostState = {
    posts: Post[]
    page: number
    hasMore: boolean
    loading: boolean
    error: string | null
}

export type PostAction =
    | { type: "LOAD_MORE" }
    | { type: "LOAD_MORE_SUCCESS"; payload: Post[] }
    | { type: "LOAD_MORE_ERROR"; error: string }

export type PostLayoutProps = {
    posts: Post[]
    loading: boolean
    hasMore: boolean
    onClickPost: (id: number) => void
    onLoadMore: () => void
}