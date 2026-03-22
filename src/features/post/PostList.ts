import { h } from "@/shared/h"
import type { Post } from "./types"
import { PostItem } from "./PostItem"

type Props = {
    posts: Post[]
    onClickPost: (id: number) => void
}

export function PostList({ posts, onClickPost }: Props) {
    return h("div", {},
        ...posts.map(post =>
            PostItem({ post, onClickPost })
        )
    )
}