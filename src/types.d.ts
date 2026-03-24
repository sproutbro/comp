type State = {
    ui: UIState
}

type UIState = {
    modal: ModalType
    theme: "dark" | "light"
}

type ModalType = "login" | "setting" | null
type ThemeType = "dark" | "light"

type Action =
    | { type: "OPEN_MODAL"; modal: ModalType }
    | { type: "CLOSE_MODAL"; }

type Store = {
    dispatch: (action: Action) => void
    subscribe: (l: Listener) => void
}