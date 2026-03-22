import { postReducer, initialPostState } from "../features/post/post.reducer";

export const initialState = {
    post: initialPostState
}

export function rootReducer(state = initialState, action: any) {
    return {
        post: postReducer(state.post, action),
        // user: userReducer(state.user, action)
    }
}

/**


 */
