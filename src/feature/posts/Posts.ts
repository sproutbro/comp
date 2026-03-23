import { dispatch } from "../../main"

export class Posts {

    main!: HTMLElement
    pages = new Map<string, Component>()

    list: Post[] = []
    selectedId?: number

    constructor() { }

    /* 
    페이징 예상
    dispatch({
        type: "SELECT_POST",
        id: post.id
    })
    dispatch({
        type: "SELECT_POST",
        id: null
    })
    */
    notify(state: PageState) {

        if (state.page === "posts" && !state.pramas) {
            
        }

        console.log(state)
        // 현재 상태에 selectedId 값이 존재하면 디테일 아니면 리스트 
        // 현재 게시물 리스트 없는경우
        // if (!state.selectedId) {
        //     dispatch({ type: "SET_POSTS", posts: this.list })
        // }

        // 현재 리스트 없는 경우 고민중
        if (this.list.length === 0) return

        // 현재 리스트의 마지막 Id 와 상태 id 비교
        // console.log(
        //     this.list[0].id,
        //     state.selectedId)

        // // 존재하면 dispatch 
        // for (const post of this.list) {
        //     if (post.id === state.selectedId) {
        //         dispatch({ type: "SET_DETAIL", post })
        //     }
        // }

    }


}

