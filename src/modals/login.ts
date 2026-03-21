import { dispatch } from "../main"

export function createModal(): Component {
    let root: HTMLElement
    let container: HTMLElement
    let body: HTMLElement

    return {
        mount(el) {
            root = el

            root.className = "layer hidden"

            container = document.createElement("div")
            container.className = "modal"

            const header = document.createElement("div")
            header.className = "modal-header"

            const button = createIconButton("close")

            button.addEventListener("click", () => {
                dispatch({
                    type: "SET_MODAL",
                    modal: null
                })
            })
            header.append(button)

            body = document.createElement("div")
            body.className = "modal-body"

            container.append(header, body)
            root.append(container)
        },

        update(state) {

            const modal = state.ui.modal

            switch (modal) {
                case "login":
                    root.className = "layer"
                    body.innerHTML = loginContent
                    break;

                default:
                    root.className = "layer hidden"
                    break;
            }
        }
    }
}

const loginContent = `
    <div class="social-login">
        <a href="/auth/kakao" class="btn kakao">
            <span class="icon">K</span>
            <span>Continue with Kakao</span>
        </a>

        <a href="/auth/google" class="btn google">
            <span class="icon">G</span>
            <span>Continue with Google</span>
        </a>
    </div>`

export function createIconButton(textContent: string) {
    const button = document.createElement("button")
    button.className = "icon-btn"

    const span = document.createElement("span")
    span.className = "material-icons"
    span.textContent = textContent

    button.append(span)
    return button
}
