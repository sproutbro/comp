export function uiReducer(state: UIState, action: Action): UIState {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                modal: action.modal
            }

        case "CLOSE_MODAL":
            return {
                ...state,
                modal: null,
            }

        default:
            return state
    }

}