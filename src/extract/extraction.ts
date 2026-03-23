import { dispatch } from "../main"

export function extractActionFromPath() {

    const r = location.pathname.split("/").slice(1).filter(Boolean)
    const pages = [
        {
            match: (r: string[]): Action | null => {
                if (r.length === 0) return { type: "SET_PAGE", page: "home" }
                return null
            }
        },
        {
            match: (r: string[]): Action | null => {
                if (r[0] === "posts" && r.length === 1) {
                    return {
                        type: "SET_PAGE",
                        page: "posts",
                        params: { "list": [] },
                    }
                }
                return null
            }
        }

    ]

    for (const page of pages) {
        const action = page.match(r)
        if (action) return dispatch(action)
    }
}