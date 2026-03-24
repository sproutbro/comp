import { dispatch } from "../main"

export function handleEffect(page: PageState, state: State | null) {
    if (page.type === "posts") {
        if (state?.data.postList.length === 0) {
            fetchPosts()
        }
    }

    if (page.type === "detail") {
        if (!state?.data.postDetail[page.id]) {
            fetchPostDetail(page.id)
        }
    }
}

async function fetchPosts() {

    const res = await fetch("http://localhost:8080/posts")
    const data = await res.json()

    dispatch({ type: "SET_POST_LIST", list: data })
}

async function fetchPostDetail(id: number) {

    const res = await fetch(`http://localhost:8080/posts/${id}`)
    const data = await res.json()

    dispatch({ type: "SET_POST_DETAIL", post: data })

}