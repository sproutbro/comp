import "./assets/css/base.css"
import "./assets/css/layout.css"
import "./assets/css/modal.css"
import "./assets/css/component.css"

import { Store, Router } from "./app"
import { reducer } from "./reducer"
import { Components } from "./components"
import { fetchPost, fetchPosts } from "./pkg"

const initState: AppState = {
  page: { path: "init" },
  data: { posts: [] },
  ui: { modal: null, theme: "dark", loading: false },
}

const app = document.getElementById("app")!

const store = new Store(initState, reducer)

let prev = store.get()

store.subscribe(() => {

  const state = store.get()

  if (state.page.path !== prev.page.path) {

    if (state.page.path === "/posts") {
      fetchPosts()
    }

    if (state.page.path === "/detail") {
      fetchPost(state.page.params?.id)
    }

    comp.mount(app)
  }

  if (state.data.posts !== prev.data.posts) {
    comp.update(app, state)
  }

  if (state.data.selectedPost !== prev.data.selectedPost) {
    comp.update(app, state)
  }

  comp.update(app, state)

  prev = state
})

export const comp = new Components()

export function dispatch(action: Action) {
  store.dispatch(action)
}

const router = new Router(dispatch)

export function navigate(path: string) {
  router.navigate(path)
}

navigate(location.pathname)