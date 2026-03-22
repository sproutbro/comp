export function data(state: DataState, action: Action): DataState {

    switch (action.type) {
        case "SET_POSTS":
            return {
                ...state,
                posts: action.posts
            }

        case "SET_POST":
            return {
                ...state,
                selectedPost: action.selectedPost
            }

        default:
            return state
    }
}