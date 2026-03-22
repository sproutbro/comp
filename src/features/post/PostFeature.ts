
import { store } from "../../main"
import { router } from "../../shared/router"
import { loadMore } from "./post.actions"
import { PostLayout } from "./PostLayout"

export function PostFeature() {
    const state = store.get().post

    function handleClickPost(id: number) {
        router.navigate(`/posts/${id}`)
    }

    function handleAdd() {
        store.dispatch({ type: "ADD_POST" })
    }

    function handleLoadMore() {
        loadMore()
    }

    return PostLayout({
        posts: state.posts,
        loading: state.loading,
        hasMore: state.hasMore,
        onClickPost: handleClickPost,
        onLoadMore: handleLoadMore,
        onAdd: handleAdd
    })
}