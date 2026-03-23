type UIState = {
    modal: ModalType
}

type ModalType = null | "login"

type UIAction =
    | { type: "OPEN_MODAL"; modal: "login" }
    | { type: "CLOSE_MODAL" }