// Imports
import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

// Return the add expense page
export class AddExpensePage extends React.Component {
    handleSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);