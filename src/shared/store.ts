type Reducer<S, A> = (state: S, action: A) => S

type Listener = () => void

export class Store<S, A> {

    private reducer: Reducer<S, A>
    private state: S
    private listeners = new Set<Listener>()

    constructor(init: S, reducer: Reducer<S, A>) {
        this.state = init
        this.reducer = reducer
    }

    get(): S {
        return this.state
    }

    dispatch(action: A) {

        const prev = this.state
        const next = this.reducer(this.state, action)

        if (prev === next) return

        this.state = next
        this.listeners.forEach(l => l())
    }

    subscribe(fn: Listener) {
        this.listeners.add(fn)
        return () => this.listeners.delete(fn)
    }
}