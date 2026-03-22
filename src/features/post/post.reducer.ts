import type { PostState, PostAction } from "./types"

export const initialPostState: PostState = {
    posts: [
        { id: 1, title: "첫 글", content: "" },
        { id: 2, title: "두번째글 글", content: "ㅇㄹ너ㅑㅐㄴㅇ" },

    ],
    page: 1,
    hasMore: true,
    loading: false,
    error: null
}

export function postReducer(
    state: PostState = initialPostState,
    action: PostAction
): PostState {

    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id: Date.now(), title: "새 글", content: "ㅇㅇ" }
                ]
            }

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