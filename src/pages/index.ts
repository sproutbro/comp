
import { createPage } from "./page"

export class Pages {

    private pages = new Map<string, () => Component>()

    constructor() {

        this.pages.set("Main", createPage)

    }

    mount(root: HTMLElement) {

        if ((root as any).__component__) return

        const name = root.getAttribute("data-component")!
        const factory = this.pages.get(name)

        if (!factory) return

        const instance = factory()

        instance.mount(root as HTMLElement)

            ; (root as any).__component__ = instance

    }

    update(root: HTMLElement, state: AppState) {

        const instance = (root as any).__component__
        if (!instance) return

        instance.update(state)

    }

    unmount(root: HTMLElement) {

        const instance = (root as any).__component__
        if (!instance?.unmount) return

        instance.unmount()

    }
}


