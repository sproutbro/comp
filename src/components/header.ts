import { comp } from "../main"
import { h } from "../pkg"

export function createHeader(): Component {
    let root: HTMLElement

    return {
        mount(el) {
            root = el

            const nav = h("nav", {})

            nav.append(
                h("div", { "data-component": "Links" }),
                h("div", { "data-component": "Icons" })
            )

            root.append(nav)

            comp.mount(root)
        },

        update(state) {

        }
    }

}
