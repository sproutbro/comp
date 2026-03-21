export function createMain(): Component {
    let root: HTMLElement

    return {
        mount(el) {
            root = el

        },

        update(state) {

            const path = state.page.path

            switch (path) {

                case "/":
                    root.innerHTML = "home"
                    break;
                case "/posts":
                    root.innerHTML = "posts"
                    break;

                default:
                    break;
            }

        },
    }

}