import "./assets/css/base.css"
import "./assets/css/modal.css"
import "./assets/css/layout.css"

import { Store, Router } from "./app"
import { Creater } from "./components"
import { reducer } from "./reducer"

import home from './assets/home.html?raw'
import posts from './assets/posts.html?raw'
import editor from './assets/editor.html?raw'

function name(): Record<string, string> {

  const pages: Record<string, string> = {}
  pages["/"] = home
  pages["/posts"] = posts
  pages["/editor"] = editor

  return pages
}

const pages = name()

const initState: AppState = {
  page: { path: "init" },
  data: {},
  ui: { modal: null, theme: "dark" },
}

const store = new Store(initState, reducer)

let prev = store.get()

store.subscribe(() => {

  const state = store.get()

  if (state.page.path !== prev.page.path) {
    comp.unmount(router.app)
    router.app.innerHTML = pages[state.page.path]
    comp.mount(router.app)
  }

  comp.update(router.app, state)
  prev = state
})

const comp = new Creater()

export function dispatch(action: Action) {
  store.dispatch(action)
}

const router = new Router(dispatch)

export function navigate(path: string) {
  router.navigate(path)
}



navigate(location.pathname)