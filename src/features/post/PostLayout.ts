
import type { Post, PostLayoutProps } from "./types"
import { PostList } from "./PostList"
import { h } from "../../shared/h"


export function PostLayout({
    posts,
    loading,
    hasMore,
    onClickPost,
    onLoadMore,
}: PostLayoutProps) {

    return h("div", {},

        h("h1", {}, "Posts"),

        PostList({
            posts,
            onClickPost
        }),

        loading
            ? h("p", {}, "로딩중...")
            : null,

        hasMore
            ? h("button", { onclick: onLoadMore }, "더보기")
            : null
    )
}