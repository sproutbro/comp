import { createIcons } from "./icons"
import { createLinks } from "./links"
import { createModal } from "./modal"
import { createPanel } from "./panel"

export class Creater {

    private components = new Map<string, () => Component>()

    constructor() {

        this.components.set("Links", createLinks)
        this.components.set("Icons", createIcons)
        this.components.set("Modal", createModal)
        this.components.set("Panel", createPanel)

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


