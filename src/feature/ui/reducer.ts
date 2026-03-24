
export function uiReducer(state: UIState, action: Action): UIState {
    switch (action.type) {
        case "SEL_MODAL":
            return {
                ...state,
                modal: action.modal
            }

        case "SEL_THEME":
            return {
                ...state,
                theme: action.theme,
            }

        case "LOADING":
            return {
                ...state,
                loading: action.value
            }

        default:
            return state
    }

}