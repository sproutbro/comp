
export function h(
    tag: string,
    props: Record<string, any> = {},
    ...children: any[]
): HTMLElement {

    const el = document.createElement(tag)

    // props
    Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith("on")) {
            el.addEventListener(key.slice(2).toLowerCase(), value)
        } else {
            el.setAttribute(key, value)
        }
    })

    // children
    children.flat().forEach(child => {
        if (typeof child === "string") {
            el.appendChild(document.createTextNode(child))
        } else if (child) {
            el.appendChild(child)
        }
    })

    return el
}