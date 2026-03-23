type Component = {
    mount: (target: HTMLElement) => void
    update: (state: any) => void
    unmount?: () => void
}

type PageType = "home" | "posts" | "editor"

type Action =
    | { type: "ROUTE_CHANGED", route: RouteState }

type AppState = {
    page: PageState
}

type Route = {

}

type PageState = {
    page: PageType
    params?: Record<string, string>
}