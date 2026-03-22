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
    loading: boolean
    theme: "dark" | "light"
    modal: "login" | null
}

type DataState = {
    posts: Post[]
    selectedPost?: Post
}

type Post = {
    id: number
    title: string
    content: string
    author: string
    created_at: string
}

type Action =
    // PAGE
    | { type: "NAVIGATE"; path: string, params?: Record<string, any> }

    // UI
    | { type: "SET_LOADING"; value: boolean }
    | { type: "TOGGLE_THEME"; theme: "dark" | "light" }
    | { type: "SET_MODAL"; modal: "login" | null }

    // DATA
    | { type: "SET_POSTS"; posts: Post[] }
    | { type: "SET_POST"; selectedPost: Post }


type Dispatch = (action: Action) => void
