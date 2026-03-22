
import type { Post } from "./types"
import { PostItem } from "./PostItem"
import { h } from "../../shared/h"

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