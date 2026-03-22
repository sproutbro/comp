import { initialState } from "./initialState"
import { Store } from "./store"

export const store = new Store(initialState, rootReducer)