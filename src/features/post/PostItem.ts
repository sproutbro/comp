import { h } from "@/shared/h"
import type { Post } from "./types"

type Props = {
    post: Post
    onClickPost: (id: number) => void
}

export function PostItem({ post, onClickPost }: Props) {
    return h("div", {
        onclick: () => onClickPost(post.id)
    },
        h("h2", {}, post.title),
        h("p", {}, post.content)
    )
}