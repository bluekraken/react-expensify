// Imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import createAppStore from "./store/createAppStore";
import { addExpense } from "./actions/expensesActions";
import { setTextFilter } from "./actions/filtersActions";
import getFilteredExpenses from "./selectors/getFilteredExpenses"
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// Create the app store
const appStore = createAppStore();

// Subscribe to the app store
appStore.subscribe(() => {
    const state = appStore.getState();
    const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);

    console.log(filteredExpenses);
});

// Set-up some test data
// appStore.dispatch(addExpense({ description: "Water bill", amount: 25_000, createdOn: 125_000 }));
// appStore.dispatch(addExpense({ description: "Coffee", amount: 275, createdOn: 1_615_000 }));
// appStore.dispatch(addExpense({ description: "Telphone bill", amount: 4_500, createdOn: 535_000 }));

// Render the DOM
const jsx = (
    <Provider store={appStore}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));