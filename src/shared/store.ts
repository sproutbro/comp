
type Reducer = (state: State, action: Action) => State
type Listener = () => void

export class Store {

    private state: State
    private reducer: Reducer
    private listeners = new Set<Listener>()

    constructor(initState: State, reducer: Reducer) {
        this.state = initState
        this.reducer = reducer
    }

    get() {
        return this.state
    }

    dispatch(action: Action) {

        const prev = this.get()

        const next = this.reducer(prev, action)

        console.log("2. STORE REDUCER")

        if (prev.ui !== next.ui) {
            console.log("UI 상태 변함",
                prev.ui, next.ui)
        }
        if (prev.data !== next.data) {
            console.log("DATA 상태 변함",
                prev.data, next.data)
        }

        if (prev.page !== next.page) {
            console.log("페이지 상태 변함",
                prev.page, next.page)
        }

        if (prev === next) return

        this.state = next

        this.listeners.forEach(l => l())
    }

    subscribe(l: Listener) {
        this.listeners.add(l)
        return () => this.listeners.delete(l)
    }
}