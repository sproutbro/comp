import { navigate } from "../main"
import { createAnchor } from "../pkg"

export function createLinks(): Component {
    let root: HTMLElement

    return {
        mount(el) {
            root = el

            root.className = "items"

            root.append(
                createAnchor("/", "HOME"),
                createAnchor("/posts", "POSTS"),
                createAnchor("/editor", "EDITOR"),
            )

            root.addEventListener("click", (e) => {
                if (e.target instanceof HTMLAnchorElement) {
                    e.preventDefault()
                    navigate(e.target.pathname)
                }
            })
        },

        update(state) {

        },
    }
}

