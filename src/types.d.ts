import type { PostState } from "./features/post/types"

type Reducer<S, A> = (state: S, action: A) => S
type Listener = () => void

type State = {
    post: PostState
}

type Action =
    | PostAction