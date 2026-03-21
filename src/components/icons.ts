import { dispatch } from "../main"
import { h } from "../pkg"

export function createIcons(): Component {
    let root: HTMLElement
    let themeButton: HTMLElement

    return {
        mount(el) {
            root = el

            root.className = "items"

            themeButton = h("button", { class: "material-icons" })

            const loginModal = h("button", { class: "material-icons" }, "login")

            loginModal.addEventListener("click", () => {
                dispatch({
                    type: "SET_MODAL",
                    modal: "login"
                })
            })

            root.append(themeButton, loginModal)
        },

        update(state) {

            const theme = state.ui.theme
            const next = theme === "dark" ? "light" : "dark"

            themeButton.textContent = next + "_mode"
            document.body.dataset.theme = theme

            themeButton.addEventListener("click", () => {
                dispatch({
                    type: "TOGGLE_THEME",
                    theme: next
                })
            })
        },
    }
}