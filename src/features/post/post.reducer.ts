import type { PostAction } from "./types"
import type { PostState } from "./types"

export function postReducer(
    state: PostState,
    action: PostAction
): PostState {

    switch (action.type) {
        case "LOAD_MORE":
            return { ...state, loading: true }

        case "LOAD_MORE_SUCCESS":
            return {
                ...state,
                loading: false,
                page: state.page + 1,
                posts: [...state.posts, ...action.payload],
                hasMore: action.payload.length > 0
            }

        case "LOAD_MORE_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}