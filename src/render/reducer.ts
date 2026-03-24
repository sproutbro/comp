
export function pageReducer(state: PageState, action: Action): PageState {
    switch (action.type) {
        case "CLICK_POST_PAGE":

            return {
                type: "posts",
                page: action.page
            }

        case "CLICK_POST_ID":
            return {
                type: "detail",
                id: action.id
            }

        default:
            return state
    }
}