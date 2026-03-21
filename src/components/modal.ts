
import { dispatch } from '../main'
import { createAnchor, h } from '../pkg'

export function createModal(): Component {
    let root: HTMLElement

    return {
        mount(el) {
            root = el
            root.className = "layer hidden"

            const modal = h("div", { class: "modal" })

            const header = h("div", { class: "modal-header" })

            const closeButton = h("button", { class: "material-icons" }, "close")
            closeButton.addEventListener("click", () => {
                dispatch({
                    type: "SET_MODAL",
                    modal: null,
                })
            })
            header.append(closeButton)

            const body = h("div", { class: "modal-body" })

            const kakaButton = createAnchor("/auth/kakao", "")
            kakaButton.append(
                h("span", { class: "icon" }, "K"),
                h("span", {}, "Continue with Kakao")
            )
            kakaButton.className = "btn kakao"

            const googleButton = createAnchor("/auth/google", "")
            googleButton.append(
                h("span", { class: "icon" }, "G"),
                h("span", {}, "Continue with Google")
            )
            googleButton.className = "btn google"

            const div = h("div", { class: "social-login" })
            div.append(kakaButton, googleButton)
            body.append(div)

            modal.append(header, body)
            root.append(modal)

        },

        update(state) {

            switch (state.ui.modal) {
                case "login":
                    root.className = "layer "
                    break;
                case null:
                    root.className = "layer hidden"
                    break;
            }

        },
    }

}