import { DetailPage } from "./pages/DetailPage"
import { HomePage } from "./pages/HomePage"
import { PostListPage } from "./pages/PostsPage"


export function render(page: PageState, state: State) {
    console.log(
        "랜더시작",
        page.type
    )

    switch (page.type) {

        case "home":
            return HomePage()

        case "posts":
            return PostListPage({
                posts: state.data.postList,
                page: page.page
            })

        case "detail":
            return DetailPage({
                post: state.data.postList[page.id]
            })

        default:
            return

    }
}