type UIState = {
    modal: {
        open: boolean
        title?: string
        content?: string
    }
}

export class ModalRoot {
    private app: HTMLElement

    private modal: HTMLElement
    private currentOpen = false

    constructor(app: HTMLElement) {

        this.app = app

        const button = document.createElement("button")
        button.textContent = "모달"
        app.append(button)

        this.modal = document.createElement("div")

        this.mount()
    }

    mount() {

        console.log(this.app)

        // this.el = document.createElement("div")
        // target.appendChild(this.el)

        this.injectStyle()
    }

    update(ui: UIState) {
        const modal = ui.modal

        console.log(modal)
        // 변화 없으면 스킵
        if (this.currentOpen === modal.open) return
        this.currentOpen = modal.open

        if (!modal.open) {
            this.el.innerHTML = ""
            return
        }

        const node = this.render(modal)
        // this.el.innerHTML = ""
        // this.el.appendChild(node)

        this.bind(node)
    }

    private render(modal: UIState["modal"]) {
        const tpl = document.getElementById("modal-template") as HTMLTemplateElement
        const node = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement


        node.querySelector("[data-title]")!.textContent = modal.title ?? ""
        node.querySelector("[data-content]")!.textContent = modal.content ?? ""

        return node
    }

    private bind(node: HTMLElement) {
        node.querySelector("[data-close]")!
            .addEventListener("click", () => {
                this.close()
            })

        node.querySelector(".m-backdrop")!
            .addEventListener("click", () => {
                this.close()
            })
    }


    open(data: { title?: string; content?: string }) {
        this.update({
            modal: {
                open: true,
                title: data.title,
                content: data.content
            }
        })
    }

    close() {
        this.update({ modal: { open: false } })
    }

    private injectStyle() {
        const style = document.createElement("style")
        style.textContent = `
      .m-root {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .m-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.4);
      }

      .m-box {
        position: relative;
        background: #fff;
        padding: 20px;
        border-radius: 12px;
        min-width: 260px;
        max-width: 90%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      }
    `
        document.head.appendChild(style)
    }
}