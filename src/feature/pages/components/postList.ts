export function PostListPage(el: HTMLElement): Component {
    let main: HTMLElement = el

    return {
        mount(target) {
            main = target

            main.replaceChildren("POST LIST")
        },

        update(state) {
            console.log(state)
        },
        unmount() {
            main.replaceChildren()
        },
    }
}