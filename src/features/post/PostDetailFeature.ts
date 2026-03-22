import { store } from "../../main"
import { PostDetailLayout } from "./PostDetailLayout"

export function PostDetailFeature(params: { id: string }) {
    const state = store.get().post

    const post = state.posts.find(p => p.id === Number(params.id))

    return PostDetailLayout({ post })
}