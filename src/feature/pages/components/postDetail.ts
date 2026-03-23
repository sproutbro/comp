export function PostDetailPage(el: HTMLElement): Component {
    let main: HTMLElement = el

    return {
        mount(target) {
            main = target

            main.replaceChildren("POST DETAIL")
        },

        update(state) {
            console.log(state)
        },
        unmount() {
            main.replaceChildren()
        },
    }
}