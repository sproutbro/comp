import { createModal } from "./login"

export class Modals {

    private modals = new Map<string, () => Component>()

    constructor() {

        this.modals.set("/", createModal)

    }

    mount(root: HTMLElement) {

        if ((root as any).__component__) return

        const name = root.getAttribute("data-component")!
        const factory = this.modals.get(name)

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


