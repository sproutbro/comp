import { dispatch } from "../../main"

type PostsPageProps = {
    posts: Post[]
    page: number
}

function PostsPage(props: PostsPageProps) {
    return props.posts.map(post =>
        PostItem({ post })
    )
}

function PostItem({ post }: { post: Post }) {
    return {
        type: "PostItem",
        title: post.title,
        onClick: () => {
            dispatch({
                type: "CLICK_POST_ID",
                id: post.id
            })
        }
    }
}