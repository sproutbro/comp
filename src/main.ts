import { PostFeature } from "./features/post/PostFeature";
import { initialState } from "./shared/initialState";
import { rootReducer } from "./shared/rootReducer";
import { Store } from "./shared/store";

const store = new Store(initialState, rootReducer)

const root = document.getElementById("app")!

function render() {
    root.innerHTML = ""
    root.appendChild(PostFeature(store))
}

render()

store.subscribe(render)