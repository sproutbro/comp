
type Route = {
    path: string
    component: (params?: any) => HTMLElement
}

export class Router {

    routes: Route[] = []

    constructor() {

        window.addEventListener("popstate", this.render)
    }

    match(path: string) {
        for (const route of this.routes) {

            const paramMatch = route.path.match(/:([^/]+)/)

            if (paramMatch) {
                const base = route.path.split("/:")[0]

                if (path.startsWith(base)) {
                    const value = path.slice(base.length + 1)
                    return {
                        component: route.component,
                        params: { [paramMatch[1]]: value }
                    }
                }
            }

            if (route.path === path) {
                return { component: route.component, params: {} }
            }
        }
    }

    navigate(path: string, push = true) {

        if (push) history.pushState({}, "", path)

        this.render()
    }

    render() {
        const matchResult = this.match(location.pathname)
        if (!matchResult) return

        const app = document.getElementById("app")!
        app.innerHTML = ""
        app.appendChild(matchResult.component(matchResult.params))
    }
}

export const router = new Router()