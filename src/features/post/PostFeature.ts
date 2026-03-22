
import { router } from "../../shared/router"
import { PostLayout } from "./PostLayout"


export function PostFeature(store: Store) {
    const state = store.get().post

    function handleClickPost(id: number) {
        router.navigate(`/posts/${id}`)
        // router.navigate(`/posts/${id}`)
    }

    function handleLoadMore() {
        store.dispatch({ type: "LOAD_MORE" })
        // store.dispatch({ type: "LOAD_MORE" })
    }

    return PostLayout({
        posts: state.posts,
        loading: state.loading,
        hasMore: state.hasMore,
        onClickPost: handleClickPost,
        onLoadMore: handleLoadMore
    })
}