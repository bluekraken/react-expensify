// Imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-dates/lib/css/_datepicker.css";

import AppRouter from "./routers/AppRouter";
import createAppStore from "./store/createAppStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// Create the app store
const appStore = createAppStore();

// Render the DOM
const jsx = (
    <Provider store={appStore}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));