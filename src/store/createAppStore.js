// Imports
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create app store
export default () => {
    const appStore = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return appStore;
};