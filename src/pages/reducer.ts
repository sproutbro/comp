export function reducer(state: PageState, action: Action): PageState {
    
    switch (action.type) {
        case "ROUTE_CHANGED":
            return {
                page: action.route.name,
                params: action.route.params,
            }

        default:
            return state
    }

}