import { navigate } from "../main"

type Anchor = { herf: string, textContent: string }

export function createLinks(): Component {
    let root: HTMLElement

    const links: Anchor[] = [
        { herf: "/", textContent: "HOME" },
        { herf: "/posts", textContent: "POSTS" },
        { herf: "/editor", textContent: "EDITOR" },
    ]

    return {
        mount(el) {
            root = el
            root.className = "links"

            for (const l of links) {
                const a = createAnchor(l.herf, l.textContent)
                a.addEventListener("click", (e) => {
                    e.preventDefault()
                    navigate(a.pathname)
                })
                root.append(a)
            }
        },

        update(state) {
            const path = state.page.path

            const a = root.querySelector<HTMLElement>(`a[href="${path}"]`)
            if (!a) return

            a.className = "active"

            const app = document.getElementById("app")!

            app.className = path.slice(1) || "home"
        }
    }

}

function createAnchor(herf: string, textContent: string): HTMLAnchorElement {

    const a = document.createElement("a")
    a.href = herf
    a.textContent = textContent

    return a
}