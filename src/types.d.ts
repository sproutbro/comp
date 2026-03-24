// ==========================================
//! [APP STATE] 

// ==========================================

type Action =
    // UI
    | { type: "SEL_MODAL"; modal: ModalType }
    | { type: "SEL_THEME"; theme: ThemeType }
    | { type: "LOADING"; value: boolean }

    // DATA
    | { type: "FETCH_POST_LIST"; list: Post[] }
    | { type: "FETCH_POST_DETAIL"; post: Post }

    // PAGE
    | { type: "CLICK_POST_PAGE"; page: number }
    | { type: "CLICK_POST_ID"; id: number }


// ==========================================
//! [PAGE STATE | ACTION | TYPE] 
// ==========================================

type State = {
    ui: UIState
    page: PageState
    data: DataState
}

type PageState =
    | { type: "home" }
    | { type: "posts"; page: number }
    | { type: "detail"; id: number }
    | { type: "about" }
    | { type: "editor" }


type UIState = {
    modal: ModalType
    theme: ThemeType
    loading: boolean
}

// ==========================================
//! [EFFECT ACTION | STATE | TYPE]
// ==========================================

type DataState = {
    postList: Post[]
    selectPost: Post | null
}

type Post = {
    id: number
    title: string
}

type ModalType =
    "login" | "setting" | null

type ThemeType = "dark" | "light"

