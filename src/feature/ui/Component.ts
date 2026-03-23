import { dispatch } from '../../main'
import rawModal from './template.html?raw'

export class ModalRoot {

    private el!: HTMLElement
    private currentOpen: ModalType = null

    private tpl!: HTMLTemplateElement

    mount() {

        // 1. 클래스 템플릿 생성
        this.tpl = document.createElement("template")
        this.tpl.id = "modal-template"

        // 2. import 한 HTML 문자타입 ELEMENT 만들고 템플릿에 추가
        const div = document.createElement("div")
        div.innerHTML = rawModal
        this.tpl.content.append(...div.childNodes)

        // 3. target HTML 생성
        this.el = document.createElement("div")
        document.body.appendChild(this.el)

        // 4. 스타일 head 추가
        this.injectStyle()

        // 5. 템플릿 이벤트 바인딩 한번과 unmount 신경써야함
        this.bind()
    }

    update(ui: UIState) {
        // 변화 없으면 스킵
        if (this.currentOpen === ui.modal) return
        this.currentOpen = ui.modal

        if (!ui.modal) {
            this.el.replaceChildren()
            return
        }

        const node = this.render()
        this.el.replaceChildren(node)
    }

    private render() {

        const node = this.tpl.content.firstElementChild?.cloneNode(true) as HTMLElement

        node.querySelector("[data-title]")!.textContent = "ddd"
        node.querySelector("[data-content]")!.textContent = "dsjfiosd"

        return node
    }

    private bind() {

        document.addEventListener("click", (e) => {
            const ds = (e.target as HTMLElement).dataset

            switch (ds.action) {
                case "MODAL_LOGIN":
                    return dispatch({ type: "OPEN_MODAL", modal: "login" })

                case "CLOSE_MODAL":
                    return dispatch({ type: "CLOSE_MODAL" })
            }
        })
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