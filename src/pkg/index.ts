
type Props = Record<string, any>

export function h(
    tag: string,
    props: Props = {},
    ...children: (Node | string)[]
): HTMLElement {

    const el = document.createElement(tag)

    for (const [k, v] of Object.entries(props)) {
        if (k === "class") {
            el.className = v
        } else {
            el.setAttribute(k, v)
        }
    }

    children.flat().forEach(child => {
        el.append(
            typeof child === "string"
                ? document.createTextNode(child)
                : child
        )
    })

    return el
}

export function createAnchor(herf: string, textContent: string): HTMLAnchorElement {

    const a = document.createElement("a")
    a.href = herf
    a.textContent = textContent

    return a
}
