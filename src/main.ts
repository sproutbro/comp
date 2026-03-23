import { store } from "./pages/init"
import { Router } from "./shared/router"


const pageStore = store

function dispatch(action: Action) {
    pageStore.dispatch(action)
}

const router = new Router()

document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const a = target.closest("a")

    if (a instanceof HTMLAnchorElement) {
        const route = router.handleLinkClick(e, a)
        if (!route) return

        for (const page of pages) {
            if (page.match(route)) {
                console.log(page.render(route))
            }
        }
        // dispatch({ type: "ROUTE_CHANGED", route })
    }
})

const pages = [
    {
        match: (r: string[]) => r.length === 0,
        render: () => console.log(111)
        // HomePage()
    },
    {
        match: (r: string[]) => r[0] === "posts" && r.length === 1,
        render: () => console.log(111)
        // ,PostsPage()
    },
    {
        match: (r: string[]) => r[0] === "posts" && r.length === 2,
        render: (r: string[]) => console.log(r[1])
        // PostDetailPage(r[1])
    }
]

function App(state: string[]) {
    const route = state

    if (route.length === 0) {
        return "HomePage()"
    }

    if (route[0] === "posts" && route.length === 1) {
        return "PostsPage()"
    }

    if (route[0] === "posts" && route.length === 2) {
        return "PostDetailPage(route[1])"
    }

    return "NotFoundPage()"
}