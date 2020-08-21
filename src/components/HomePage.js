// Imports
import React from "react";

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

// Return the home page
export default () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);