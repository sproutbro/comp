export function pageReducer(state: PageState, action: Action): PageState {

    console.log(action)
    switch (action.type) {
        case "SET_PAGE":
            return {
                ...state,
                page: action.page,
                pramas: action.params
            }

        default:
            return state
    }

}