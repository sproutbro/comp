import rawModal from "../template/modal.html?raw";

type Action =
    | { type: "OPEN_MODAL", modal: "setting" }
    | { type: "OPEN_MODAL", modal: "login" }
    | { type: "CLOSE_MODAL" }

// import styles from '../assets/modal.css?raw'


class ModalRoot {

    private root: HTMLElement = document.getElementById("app")!
    private modalEl!: HTMLElement
    private styleEl = document.createElement("style")

    constructor() {

        this.styleEl.innerHTML = styles
        document.head.appendChild(this.styleEl)



        const div = document.createElement("div")
        div.innerHTML = rawModal
        this.modalEl = document.createElement("div")

        const m = div.querySelector(".m-modal")!
     
        
        // this.root.append(this.modalEl)

    }

    open() {
        this.modalEl.classList.add("is-open")
    }

    close() {
        this.modalEl.classList.remove("is-open")
    }

    bind() {
        document.addEventListener("click", (e) => {
            const action = (e.target as HTMLElement).dataset.action

            if (action === "OPEN_LOGIN") {
                dispatch({ type: "OPEN_MODAL", modal: "login" })
            }

            if (action === "OPEN_SETTING") {
                dispatch({ type: "OPEN_MODAL", modal: "setting" })
            }

            if (action === "CLOSE_MODAL") {
                dispatch({ type: "CLOSE_MODAL" })
            }
        })
    }
}

export const modal = new ModalRoot()