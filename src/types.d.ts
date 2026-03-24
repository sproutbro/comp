// ==========================================
//! [APP STATE] 

// ==========================================
type State = {
    ui: UIState
    page: PageState
    data: DataState
}

type Action =
    | EffectAction
    | UIAction
    | PostAction

// ==========================================
//! [PAGE STATE | ACTION | TYPE] 
// ==========================================
type PostAction =
    | { type: "SELECT_POST_PAGE"; page: number }
    | { type: "SELECT_POST_ID"; id: number }
    | { type: "CLICK_POSTS_PAGE"; page: number }

type Post = {
    id: number
    title: string
}

type PageState =
    | { type: "home" }
    | { type: "posts"; page: number }
    | { type: "detail"; id: number }
    | { type: "about" }
    | { type: "editor" }

type EffectAction =
    | { type: "SET_POST_LIST"; list: Post[] }
    | { type: "SET_POST_DETAIL"; post: Post }

// ==========================================
//! [EFFECT ACTION | STATE | TYPE]
// ==========================================
type DataState = {
    postList: Post[]
    postDetail: Record<number, Post>
}

// ==========================================
//! [UI STATE | ACTION | TYPE]
// ==========================================
type UIState = {
    modal: ModalType
    theme: ThemeType
    loading: boolean
}

type ModalType =
    "login" | "setting" | null

type ThemeType = "dark" | "light"

type UIAction =
    | { type: "SEL_MODAL"; modal: ModalType }
    | { type: "SEL_THEME"; theme: ThemeType }
    | { type: "LOADING"; value: boolean }