// Imports
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import locales from "numeral/locales";

import selectExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/totalExpenses";

// Return the expenses summary
export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    numeral.locale("en-gb");
    const word = expensesCount === 1 ? "expense" : "expenses";
    const formattedTotal = numeral(expensesTotal / 100).format("$0,0.00");
    return (
        <div className="content-container page-header">
            <h1 className="page-header__title">
                Viewing <span>{expensesCount}</span> {word} totalling <span>{formattedTotal}</span>
            </h1>
            <div className="page_header__actions">
                <Link className="button" to="/create">Add expense</Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expensesCount = visibleExpenses.length;
    const expensesTotal = totalExpenses(visibleExpenses);
    return { expensesCount, expensesTotal };
};

export default connect(mapStateToProps)(ExpensesSummary);