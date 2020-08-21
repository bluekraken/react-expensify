// Imports
import React from "react";
import { NavLink } from "react-router-dom";

// Return the header
export default () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink></p>
        <p><NavLink to="/create" activeClassName="is-active">Add an expense</NavLink></p>
        <p><NavLink to="/help" activeClassName="is-active">Help, I need somebody</NavLink></p>
    </header>
);