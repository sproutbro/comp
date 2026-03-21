import { dispatch } from "../main"

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

export function createIconButton(textContent: string) {
    const button = document.createElement("button")
    button.className = "icon-btn"

    const span = document.createElement("span")
    span.className = "material-icons"
    span.textContent = textContent

    button.append(span)
    return button
}
