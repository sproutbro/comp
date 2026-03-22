import { postReducer } from "../features/post/post.reducer";



export function rootReducer(state: AppState, action: Action) {
    return {
        post: postReducer(state.post, action),
        // user: userReducer(state.user, action)
    }
}

/**


 */
