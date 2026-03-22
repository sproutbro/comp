export function ui(state: UIState, action: Action): UIState {

    switch (action.type) {
        case "SET_MODAL":
            return {
                ...state,
                modal: action.modal
            }

        case "TOGGLE_THEME":
            return {
                ...state,
                theme: action.theme
            }

        case "SET_LOADING":
            return {
                ...state,
                loading: action.value
            }

        default:
            return state
    }
}