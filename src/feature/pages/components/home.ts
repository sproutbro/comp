
export function HomePage(el: HTMLElement): Component {
    let main: HTMLElement = el

    return {
        mount(target) {
            main = target

            main.replaceChildren("HOME")
        },

        update(state) {
            console.log(state)
        },
        unmount() {
            main.replaceChildren()
        },
    }
}
