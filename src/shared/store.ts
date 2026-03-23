
type Reducer<S, A> = (state: S, action: A) => S
type Listner = () => void

export class Store<S, A> {

    private state: S
    private reducer: Reducer<S, A>
    private listners = new Set<Listner>()

    constructor(initState: S, reducer: Reducer<S, A>) {
        this.state = initState
        this.reducer = reducer
    }

    get() {
        return this.state
    }

    dispatch(action: A) {
        this.state = this.reducer(this.state, action)
        this.listners.forEach(l => l())
    }

    subscribe(l: Listner) {
        this.listners.add(l)
    }
}