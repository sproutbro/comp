import { dispatch } from "../main"
import { createIconButton } from "./common"

export function createIcons(): Component {
    let root: HTMLElement
    let themeSpan: HTMLElement

    return {
        mount(el) {
            root = el

            root.className = "icons"

            const themeButton = createIconButton("")
            themeSpan = themeButton.querySelector("span") as HTMLElement

            themeButton.addEventListener("click", () => {

                const current = document.body.dataset.theme as "dark" | "light"
                const next = current === "dark" ? "light" : "dark"

                dispatch({
                    type: "TOGGLE_THEME",
                    theme: next
                })
            })

            const modalButton = createIconButton("login")
            modalButton.addEventListener("click", () => {
                dispatch({
                    type: "SET_MODAL",
                    modal: "login"
                })
            })

            root.append(themeButton, modalButton)
        },

        update(state) {
            const theme = state.ui.theme
            const next = theme === "dark" ? "light" : "dark"

            themeSpan.textContent = next + "_mode"

            document.body.dataset.theme = theme
        }
    }
}