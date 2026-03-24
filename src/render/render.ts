export type PageState =
    | { type: "home" }
    | { type: "posts"; page: number }
    | { type: "detail"; id: number }
    | { type: "about" }
    | { type: "editor" }

export function render(page: PageState, state: State) {

    switch (page.type) {

        case "home":
            return

        case "posts":

            return

        case "detail":
            return

    }
}