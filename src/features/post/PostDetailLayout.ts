
import { h } from "../../shared/h"
import type { Post } from "./types"

export function PostDetailLayout({ post }: { post?: Post }) {

    if (!post) {
        return h("div", {}, "글 없음")
    }

    return h("div", {},
        h("h1", {}, post.title),
        h("p", {}, `ID: ${post.id}`),

        h("button", {
            onclick: () => history.back()
        }, "뒤로가기")
    )
}