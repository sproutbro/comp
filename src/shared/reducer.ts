import { uiReducer } from "../components/reducer"
import { dataReducer } from "../effact/reducer"
import { pageReducer } from "../render/reducer"

export function reducer(
    state: State,
    action: Action
): State {

    return {
        page: pageReducer(state.page, action),
        ui: uiReducer(state.ui, action),
        data: dataReducer(state.data, action)
    }

}


