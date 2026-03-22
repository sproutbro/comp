
export class Store<S, A> {

    private state: S
    private reducer: Reducer<S, A>
    private listeners = new Set<Listener>()

    constructor(initialState: S, reducer: Reducer<S, A>) {
        this.state = initialState
        this.reducer = reducer
    }

    get(): S {
        return this.state
    }

    dispatch(action: A) {
        const prev = this.state
        const next = this.reducer(prev, action)

        if (prev === next) return

        this.state = next

        this.listeners.forEach(l => l())
    }

    subscribe(listener: Listener) {
        this.listeners.add(listener)
        return () => this.listeners.delete(listener)
    }

}