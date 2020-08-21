// Imports
import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import getFilteredExpenses from "../selectors/getFilteredExpenses";

// Return the expense list
const ExpenseList = (props) => (
    <div>
        <h2>Expense list</h2>
        {props.expenses.map((expense) => <ExpenseListItem key={expense.guid} {...expense} />)}
    </div>
);

const mapStateToProps = (state) => ({ expenses: getFilteredExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpenseList);