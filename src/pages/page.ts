export function createPage(): Component {
    let root: HTMLElement

    return {
        mount(el) {
            root = el
        },

        update(state) {

            const path = state.page.path
            root.textContent = path
            
        }
    }

}