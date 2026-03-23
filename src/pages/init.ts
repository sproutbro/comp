import { Store } from "../shared/store";
import { reducer } from "./reducer";

export const initPageState: PageState = {
    page: "home"
}

export const store = new Store(initPageState, reducer)

store.subscribe(() => {
    const state = store.get()
    console.log(state)
})