
export class Router {

    app: HTMLElement = document.getElementById("app")!
    private dispatch: Dispatch

    constructor(dispatch: Dispatch) {

        this.dispatch = dispatch

        window.addEventListener("popstate", () => {
            this.navigate(location.pathname, false)
        })
    }

    navigate(path: string, push = true) {

        if (push) history.pushState({}, "", path)

        this.dispatch({
            type: "NAVIGATE",
            path: path
        })
    }

}