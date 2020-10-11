// Imports
import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

// Return the add expense page
export class AddExpensePage extends React.Component {
    handleSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="content-container">
                <div className="page-header">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
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