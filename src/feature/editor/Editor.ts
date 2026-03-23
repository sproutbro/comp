import { dispatch } from "../../main"
import { CreateHeroSection } from "./blacks/Hero"
import { CreateTextSection } from "./blacks/Text"

export class Editor {

    main!: HTMLElement
    blocks = new Map<string, Component>()

    undo: EditorState[] = []
    redo: EditorState[] = []

    currentState?: EditorState

    selectedBlock?: Component

    constructor() {

        // 미리보기 결정되면 안으로 넣게나 교체
        this.main = document.querySelector("main")!

        this.blocks.set("Hero", CreateHeroSection(this.main))
        this.blocks.set("Text", CreateTextSection(this.main))
    }

    // 페이지의 경우mount, unmoun 위주 였지만 
    // editor 의 경우 update,mount , undo 다같이 신경써야함
    // Action 에따라 상태변화 예상힘들어 나중진행
    notify(state: EditorState) {

        // 현재지정된 블록에 상태를 update 진행
        this.selectedBlock?.update(state)
    }

    // 함수명 맞는지 모르겠으나 마지막 상태가져오기 예상
    getUndo() {
        // 현재 상태값이없거나 저장된 값없는경우 리턴
        if (!this.currentState || this.undo.length === 0) return

        // 현재 상태를 redo배열에 저장
        this.redo.push(this.currentState)

        // 마지막 undo 배열에서 상태 지우면서 현재값으로
        this.currentState = this.undo.pop()

        // 변경된 상태값 관리에 대한 문제로 임시 
        // dispatch()
    }

}

