import { createHeader } from "./header"

export class HeaderComponents {

    private headers = new Map<string, () => Component>()

    constructor() {
        this.headers.set("Header", createHeader)
    }

    mount(root: HTMLElement) {

        root.querySelectorAll("[data-component]").forEach(el => {

            if ((el as any).__component__) return

            const name = el.getAttribute("data-component")!
            const factory = this.headers.get(name)

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


