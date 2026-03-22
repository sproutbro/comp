import { PostFeature } from "./features/post/PostFeature";
import { initialState } from "./shared/initialState";
import { rootReducer } from "./shared/rootReducer";
import { Store } from "./shared/store";

export const store = new Store(initialState, rootReducer)

export const root = document.getElementById("app")!

function render() {
    root.innerHTML = ""
    root.appendChild(PostFeature())
}

render()

store.subscribe(render)