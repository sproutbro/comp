import { store } from "../../main"


export async function loadMore() {
    const state = store.get().post

    if (state.loading || !state.hasMore) return

    store.dispatch({ type: "LOAD_MORE" })

    // 👉 fake API
    await new Promise(res => setTimeout(res, 500))

    const next = state.page + 1

    const newPosts = [
        { id: Date.now(), title: `페이지 ${next} 글1` },
        { id: Date.now() + 1, title: `페이지 ${next} 글2` }
    ]

    store.dispatch({
        type: "LOAD_MORE_SUCCESS",
        payload: newPosts
    })
}