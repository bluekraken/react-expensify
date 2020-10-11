// Imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-dates/lib/css/_datepicker.css";

import AppRouter, { history } from "./routers/AppRouter";
import createAppStore from "./store/createAppStore";
import { startSetupExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

// Create the app store
const appStore = createAppStore();

// Render the DOM
const jsx = (
    <Provider store={appStore}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('js-app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('js-app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        appStore.dispatch(login(user.uid));
        appStore.dispatch(startSetupExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === "/") {
                history.push('/dashboard');
            }
        });
    } else {
        appStore.dispatch(logout());
        renderApp();
        history.push("/");
    }
});