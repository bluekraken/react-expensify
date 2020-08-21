// Imports
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";

// Return app router
export default () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:guid" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);