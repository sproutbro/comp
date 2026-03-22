
type Reducer<S, A> = (state: S, action: A) => S
type Listener = () => void
type Dispatch = (action: A) => void
type Navgate = (path: string) => void

type AppState = {
    post: PostState
}

type Action =
    | PostAction

type PostState = {
    posts: Post[]
    page: number
    hasMore: boolean
    loading: boolean
    error: string | null
}