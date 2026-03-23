import type { UIState } from "./feature/ui/types"

type Component = {
    mount: (target: HTMLElement) => void
    update: (state: any) => void
    unmount?: () => void
}


type AppState = {
    ui: UIState
}
