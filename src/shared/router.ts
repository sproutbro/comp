export class Router {

    constructor() {

        document.addEventListener("click", (e) => {
            const el = (e.target as HTMLElement).closest("a")
            if (!el) return

            this.handleLinkClick(e, el)
        })

        window.addEventListener("popstate", () => {
            this.resolve()
        })
    }

    handleLinkClick(e: Event, a: HTMLAnchorElement) {
        const href = a.getAttribute("href")
        if (!href) return

        // 외부 링크
        if (!href.startsWith("/")) return

        // 새창
        if (a.target === "_blank") return

        // 다운로드
        if (a.hasAttribute("download")) return

        e.preventDefault()

        return this.navigate(href)
    }

    navigate(path: string) {
        window.history.pushState({}, "", path);
        this.resolve()
    }

    resolve() {
        // dispatch({ type: "SELECT_NAV", nav: "home" })
    }

}