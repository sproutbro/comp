
import { store } from "@/shared/createStore"

import { PostLayout } from "./PostLayout"
import { router } from "@/shared/router"

export function PostFeature() {
    const state = store.get().post

    function handleClickPost(id: number) {
        router.navigate(`/posts/${id}`)
    }

    function handleLoadMore() {
        store.dispatch({ type: "LOAD_MORE" })
    }

    return PostLayout({
        posts: state.posts,
        loading: state.loading,
        hasMore: state.hasMore,
        onClickPost: handleClickPost,
        onLoadMore: handleLoadMore
    })
}