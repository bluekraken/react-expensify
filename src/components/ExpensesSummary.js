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
    const total = totalExpenses(props.expenses);
    const word = props.expenses.length === 1 ? "expense" : "expenses";
    return (
        <div>
            <p>Viewing {props.expenses.length} {word} totalling {numeral(total / 100).format("$0,0.00")}</p>
        </div>
    );
}

const mapStateToProps = (state) => ({ expenses: selectExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpensesSummary);