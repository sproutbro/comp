import { navigate } from "../main"
import { h } from "../pkg"

export function createPage(): Component {
    let root: HTMLElement

    function createHeader(): HTMLElement {

        const header = h("div", { class: "header" },
            h("button", { class: "material-icons" }, "arrow_back"),
            h("button", { class: "material-icons" }, "draw"),
            h("button", { class: "material-icons" }, "arrow_forward"),
        )

        return header
    }

    return {
        mount(el) {
            root = el
        },

        update(state) {

            switch (state.page.path) {

                case "/":
                    root.innerHTML = "home"
                    break;

                case "/posts":

                    const posts = h("div", { class: "page" })

                    const header = createHeader()
                    const pageBody = h("div", { class: "page-body grid grid-3" })

                    for (const p of state.data.posts) {
                        const a =
                            h("a", { class: "card" },
                                h("p", {}, p.title),
                                h("span", {}, p.author),
                                h("span", {}, p.created_at),
                            ) as HTMLAnchorElement

                        a.href = `/posts/${p.id}`

                        a.addEventListener("click", (e) => {
                            e.preventDefault()
                            navigate(a.pathname)
                        })

                        pageBody.append(a)
                    }

                    posts.append(header, pageBody)

                    root.replaceChildren(posts)

                    break;

                case "/detail":

                    const post = state.data.selectedPost
                    if (!post) return

                    const detail = h("div", { class: "page" })

                    const body = h("div", { class: "page-body" },
                        h("h2", {}, post.title),
                        h("p", {}, post.content),
                    )

                    const meta = h("div", { class: "meta" },
                        h("span", {}, post.id.toString()),
                        h("span", {}, post.author),
                        h("span", {}, post.created_at),
                    )

                    detail.append(createHeader(), body, meta)
                    root.replaceChildren(detail)
                    break;

                default:
                    break;
            }

        },
    }

}