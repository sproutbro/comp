type PageState = {
    page: PageType
    pramas?: Record<string, any>
}

type PageType =
    "home" | "editor" | "posts"

type PageAction =
    | { type: "SET_PAGE", page: PageType, params?: Record<string, any> }