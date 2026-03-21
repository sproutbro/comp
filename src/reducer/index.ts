import { data } from "./data";
import { page } from "./page";
import { ui } from "./ui";

export function reducer(state: AppState, action: Action): AppState {

    return {
        page: page(state.page, action),
        data: data(state.data, action),
        ui: ui(state.ui, action)
    }

}