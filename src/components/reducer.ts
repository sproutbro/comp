
export function uiReducer(state: UIState, action: Action): UIState {
    switch (action.type) {

        case "LOADING": return {
            ...state,
            loading: action.value
        }

        case "SEL_MODAL": return {
            ...state,
            modal: action.modal,
        }

        case "SEL_THEME": return {
            ...state,
            theme: action.theme,
        }

        default:
            return state;
    }
}
