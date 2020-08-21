// Imports
import { createStore, combineReducers } from "redux";

import expensesReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";

// Create app store
export default () => {
    const appStore = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return appStore;
};