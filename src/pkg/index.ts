import { dispatch } from "../main"

type Props = Record<string, any>

export async function fetchPosts() {

    const res = await fetch(`http://localhost:8080/posts`).then(r => r.json())

    if (!res.success) {
        console.warn(res.error)
        return
    }

    const data: Post[] = res.data

    dispatch({ type: "SET_POSTS", posts: data })
}

export async function fetchPost(id?: string) {

    if (!id) return

    const res = await fetch(`http://localhost:8080/posts/${id}`).then(r => r.json())

    if (!res.success) {
        console.warn(res.error)
        return
    }

    const data: Post = res.data

    dispatch({ type: "SET_POST", selectedPost: data })
}

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
