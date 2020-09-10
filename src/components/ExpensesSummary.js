// Imports
import React from "react";
import { connect } from "react-redux";
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
        <div>
            <h2>Viewing {expensesCount} {word} totalling {formattedTotal}</h2>
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