export class Router {

    private currentPath: string

    constructor() {
        this.currentPath = location.pathname
        window.addEventListener("popstate", () => {
            this.navigate(location.pathname)
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
        if (this.currentPath === path) return

        this.currentPath = path

        history.pushState(null, "", path)
        return true
    }
}