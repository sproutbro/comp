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

        default:
            return state
    }
}