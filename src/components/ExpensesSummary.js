// Imports
import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import locales from "numeral/locales";

import selectExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/totalExpenses";

// Return the expenses summary
export const ExpensesSummary = (props) => {
    numeral.locale("en-gb");
    const word = props.expenses.length === 1 ? "expense" : "expenses";
    const formattedTotal = numeral(totalExpenses(props.expenses) / 100).format("$0,0.00");
    return (
        <div>
            <h2>Viewing {props.expenses.length} {word} totalling {formattedTotal}</h2>
        </div>
    );
}

const mapStateToProps = (state) => ({ expenses: selectExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpensesSummary);