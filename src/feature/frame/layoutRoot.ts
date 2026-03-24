type LayoutType = "default" | "center" | "empty"

export class LayoutRoot {
    private el!: HTMLElement
    private currentType: LayoutType | null = null
    private slots: Record<string, HTMLElement> = {}

    mount(target: HTMLElement) {
        this.el = document.createElement("div")
        target.appendChild(this.el)

        this.injectStyle()
    }

    setLayout(type: LayoutType) {
        // 👉 같은 레이아웃이면 무시
        if (this.currentType === type) return
        this.currentType = type

        const tpl = document.getElementById(`layout-${type}`) as HTMLTemplateElement

        if (!tpl) {
            throw new Error(`layout-${type} 없음`)
        }

        const node = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement

        this.el.innerHTML = ""
        this.el.appendChild(node)

        this.mapSlots()
    }

    private mapSlots() {
        this.slots = {}

        this.el.querySelectorAll("[data-slot]").forEach(el => {
            const name = el.getAttribute("data-slot")!
            this.slots[name] = el as HTMLElement
        })
    }

    setSlot(name: string, node?: HTMLElement) {
        const slot = this.slots[name]
        if (!slot) return

        slot.innerHTML = ""

        if (!node) return

        slot.appendChild(node)
    }

    private injectStyle() {
        const style = document.createElement("style")
        style.textContent = `
      .l-root {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }

      .l-body {
        display: flex;
        flex: 1;
      }

      .l-main {
        flex: 1;
        padding: 16px;
      }

      .l-center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
    `
        document.head.appendChild(style)
    }
}