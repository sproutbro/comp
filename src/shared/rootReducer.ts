import { postReducer } from "@/features/post/post.reducer";
import type { Action, State } from "@/types";

export function rootReducer(state: State, action: Action) {
    return {
        post: postReducer(state.post, action),
        // user: userReducer(state.user, action)
    }
}