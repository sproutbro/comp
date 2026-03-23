export class Router {

    constructor() {
        window.addEventListener("popstate", () => {
            this.navigate(location.pathname, false)
        })
    }

    navigate(path: string, push = true) {

        if (push) history.pushState({}, "", path)

        history.pushState({}, "", path)

    }

}