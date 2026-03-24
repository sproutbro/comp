import { dispatch } from "../../main"

type PostsPageProps = {
    posts: Post[]
    page: number
}

export function PostListPage(props: PostsPageProps) {
    console.log("LIST 페이지 랜더")

    if (props.posts.length === 0) {
        console.log("POST 게시믈 0 STATUS loading")

        return {
            type: "PostsPage",
            status: "loading"
        }
    }

    return {
        type: "PostsPage",
        page: props.page,
        children: props.posts.map(post => {
            PostItem({ post })
        })
    }
}

function PostItem({ post }: { post: Post }) {
    console.log(
        "3. POST Item (하위 컴포넌트)"
    )

    return {
        type: "PostItem",
        id: post.id,
        title: post.title,

        onClick: () => {
            dispatch({
                type: "CLICK_POST_ID",
                id: post.id
            })
        }
    }
}