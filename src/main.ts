import { extractActionFromPath } from "./extract/extraction"
import { Pages } from "./feature/pages/pages"
import { pageReducer } from "./feature/pages/reducer"
import { Posts } from "./feature/posts/Posts"
import { ModalRoot } from "./feature/ui/Component"
import { uiReducer } from "./feature/ui/reducer"
import { Router } from "./shared/router"
import { Store } from "./shared/store"

const modalRoot = new ModalRoot()
modalRoot.mount()

function reducer(state: AppState, action: Action): AppState {
    return {
        ui: uiReducer(state.ui, action),
        page: pageReducer(state.page, action)
    }
}

const initState: AppState = {
    page: { page: "home" },
    ui: { modal: null }
}

const router = new Router()
export const store = new Store(initState, reducer)

const pages = new Pages()
const posts = new Posts()



//3. 이벤트 연결 내부에서 reducer 처리 알림
export function dispatch(action: Action) {
    store.dispatch(action)
}

//1. 이벤트 발생
document.addEventListener("click", (e) => {

    const target = e.target as HTMLElement
    const a = target.closest("a")

    if (a) {
        // *라우터 URL 변경 이벤트 발생
        const route = router.handleLinkClick(e, a)
        if (!route) return
        //2. 이벤트 추출 연결
        extractActionFromPath()
    }

})