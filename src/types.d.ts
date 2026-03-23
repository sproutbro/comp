type Component = {
    mount: (target: HTMLElement) => void
    update: (state: any) => void
    unmount?: () => void
}

type AppState = {
    page: PageState
    ui: UIState
}

type Action =
    | PageAction
    | UIAction
    | PostAction



