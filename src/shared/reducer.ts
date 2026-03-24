import { PostDetailPage } from "../feature/pages/components/postDetail"

export function reducer(
    state: State,
    action: Action
): State {
    switch (action.type) {
        case "CLICK_POSTS_PAGE":

            return {
                ...state,
                page: pageReducer(state.page, action),
            }

        case "SET_POST_LIST":
            return {
                ...state,

            }
        default:
            return state
    }

}

function uiReducer(state: UIState, action: UIAction) {
    return state
}


function pageReducer(state: PageState, action: PostAction): PageState {
    switch (action.type) {
        case "CLICK_POSTS_PAGE":
            return {
                ...state,
                type: "posts",
                page: action.page
            }

        default:
            break;
    }
    return state
}