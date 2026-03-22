
export class Router {

    constructor() {

        window.addEventListener("popstate", () => {
            this.navigate(location.pathname, false)
        })
    }

    navigate(path: string, push = true) {

        if (push) history.pushState({}, "", path)

        return this.resolveRoute(path)
    }

    resolveRoute(path: string) {
        if (path === "/") {
            return { path: "/" }
        }

        if (path === "/posts") {
            return { path: "/posts" }
        }

        if (path.startsWith("/posts/")) {
            return {
                path: "/detail",
                params: { id: path.split("/")[2] }
            }
        }

        return { path: "/" }
    }

}

export const router = new Router()