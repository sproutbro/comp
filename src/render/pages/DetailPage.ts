export function DetailPage({ post }: { post?: Post }) {

    console.log(
        "DETAIL 페이지 랜더"
    )

    if (!post) {
        console.log("DETAIL 게시믈 0 STATUS loading")
        return {
            type: "DetailPage",
            status: "loading"
        }
    }

    return {
        type: "DetailPage",
        title: post.title
    }
}