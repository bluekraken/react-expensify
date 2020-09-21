// Imports
import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { saveAddExpense } from "../actions/expenses";

// Return the add expense page
export class AddExpensePage extends React.Component {
    handleSubmit = (expense) => {
        this.props.saveAddExpense(expense);
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
    saveAddExpense: (expense) => dispatch(saveAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);