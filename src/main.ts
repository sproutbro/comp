import { handleEffect } from "./effact/effact";
import { render } from "./render/render";
import { reducer } from "./shared/reducer";
import { Router } from "./shared/router";
import { Store } from "./shared/store";

// ==========================================
//! [렌더 사이드이펙트 subscribe 분리] 
//! 페이지는 상태만   ||    fetch는 effect에서
// ==========================================
const initState: State = {
    ui: { loading: false, modal: null, theme: "dark" },
    data: { postList: [], selectPost: null },
    page: { type: "home" }
}

const store = new Store(initState, reducer)
let prevPage: PageState | null = null

store.subscribe(() => {
    const state = store.get()

    console.log("3. SUBSCRIBE RENDER")

    render(state.page, state)
})

store.subscribe(() => {
    const state = store.get()

    if (state.page !== prevPage) {
        handleEffect(state.page, state)
        prevPage = state.page
    }

    console.log("3. SUBSCRIBE EFFECT")
})

export function dispatch(action: Action) {

    console.log("1.DISPATCH")
    console.log(action)

    store.dispatch(action)
}

// ==========================================
//! [라우터 생성 페이지 등록예정] 
// ==========================================
const router = new Router()

router.resolve()

dispatch({ type: "CLICK_POST_PAGE", page: 0 })