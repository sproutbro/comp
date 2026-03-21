export function page(state: PageState, action: Action): PageState {

    switch (action.type) {
        case "NAVIGATE":

            return {
                ...state,
                path: action.path
            }

        default:
            return state
    }
}