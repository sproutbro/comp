export function dataReducer(state: DataState, action: Action): DataState {

    switch (action.type) {
        case "FETCH_POST_DETAIL": return {
            ...state,
            selectPost: action.post
        }

        case "FETCH_POST_LIST": return {
            ...state,
            postList: action.list
        }

        default:
            return state
    }

}