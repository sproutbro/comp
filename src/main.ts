import "./assets/css/base.css"
import "./assets/css/layout.css"
import "./assets/css/modal.css"

import { Store, Router } from "./app"
import { reducer } from "./reducer"
import { Components } from "./components"

const initState: AppState = {
  page: { path: "init" },
  data: {},
  ui: { modal: null, theme: "dark" },
}

const app = document.getElementById("app")!

export const comp = new Components()

const store = new Store(initState, reducer)

let prev = store.get()

store.subscribe(() => {
  const state = store.get()

  if (state.page.path !== prev.page.path) {
    comp.mount(app)
  }
  comp.update(app, state)

  prev = state
})

export function dispatch(action: Action) {
  store.dispatch(action)
}

const router = new Router(dispatch)

export function navigate(path: string) {
  router.navigate(path)
}

navigate(location.pathname)