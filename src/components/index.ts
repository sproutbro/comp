import { createAside } from "./aside"
import { createHeader } from "./header"
import { createIcons } from "./icons"
import { createLinks } from "./links"
import { createPage } from "./page"
import { createModal } from "./modal"

export class Components {

    components = new Map<string, () => Component>()

    constructor() {

        this.components.set("Header", createHeader)
        this.components.set("Aside", createAside)
        this.components.set("Page", createPage)
        this.components.set("Modal", createModal)

        this.components.set("Links", createLinks)
        this.components.set("Icons", createIcons)

    }

    mount(root: HTMLElement) {

        root.querySelectorAll("[data-component]").forEach(el => {

            if ((el as any).__component__) return

            const name = el.getAttribute("data-component")!
            const factory = this.components.get(name)

            if (!factory) return

            const instance = factory()

            instance.mount(el as HTMLElement)

                ; (el as any).__component__ = instance
        })
    }

    update(root: HTMLElement, state: AppState) {
        root.querySelectorAll("[data-component]").forEach(el => {
            const instance = (el as any).__component__
            if (!instance) return

            instance.update(state)
        })
    }

    unmount(root: HTMLElement) {
        root.querySelectorAll("[data-component]").forEach(el => {
            const instance = (el as any).__component__
            if (!instance?.unmount) return

            instance.unmount()
        })
    }
}


