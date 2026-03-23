import { HomePage } from "./components/home"
import { PostDetailPage } from "./components/postDetail"
import { PostListPage } from "./components/postList"
import { store } from "../../main";

export class Pages {

    main!: HTMLElement
    pages = new Map<string, Component>()
    state: PageState

    currenPage?: Component

    constructor() {
        this.state = store.get().page

        store.subscribe(() => {
            if (this.state === store.get().page) return
        })

        // root 로 사용될 main dom 컴포넌트 전달
        this.main = document.querySelector("main")!

        // home, Postdetail, Postlist 페이지 컴포넌트 생성
        this.pages.set("home", HomePage(this.main))
        this.pages.set("detail", PostDetailPage(this.main))
        this.pages.set("posts", PostListPage(this.main))
    }


    // 인풋 페이지 상태
    notify(state: PageState) {

        // 요청페이지 페이지 맵에서 찾고 없는경우 리턴
        const page = this.pages.get(state.page)
        if (!page) return

        console.log(state.pramas)

        // 요청페이지 타입 저장
        if (this.currenPage !== page) {
            if (this.currenPage?.unmount) this.currenPage.unmount()
            page.mount(this.main)
            this.currenPage = page
        }


    }


}

