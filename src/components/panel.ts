import { createIconButton } from "./common"

export function createPanel(): Component {
    let root: HTMLElement

    return {
        mount(el) {
            root = el
            root.className = "panel"
            root.hidden

            const button = createIconButton("light_mode")
            root.append(button)
        },

        update(state) {
            const path = state.page.path

            if (path === "/editor") {
                root.hidden = false
            } else {
                root.hidden
            }
        }
    }
}