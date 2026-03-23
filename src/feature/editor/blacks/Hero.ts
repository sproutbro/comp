
export function CreateHeroSection(el: HTMLElement): Component {
    let main: HTMLElement = el

    return {
        mount(target) {
            main = target

            main.replaceChildren("HERO BLOCK")
        },

        update(state) {
            console.log(state)
        },
        unmount() {
            main.replaceChildren()
        },
    }
}
