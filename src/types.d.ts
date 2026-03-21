type Component = {
    mount(el: HTMLElement): void
    update(state: AppState): void
    unmount?(): void
}

type AppState = {
    page: PageState
    data: DataState
    ui: UIState
}

type PageState = {
    path: string
    params?: Record<string, any>
}

type UIState = {
    theme: "dark" | "light"
    modal: "login" | null
}

type DataState = {

}

type Action =
    | { type: "NAVIGATE"; path: string }
    | { type: "TOGGLE_THEME"; theme: "dark" | "light" }
    | { type: "SET_MODAL"; modal: "login" | null }


type Dispatch = (action: Action) => void
