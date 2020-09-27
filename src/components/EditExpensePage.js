// Imports
import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

// Return the edit expense page
export class EditExpensePage extends React.Component {
    handleSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.guid, expense);
        this.props.history.push("/dashboard");
    }

    handleRemove = () => {
        this.props.startRemoveExpense(this.props.expense.guid);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    handleSubmit={this.handleSubmit}
                />
                <button onClick={this.handleRemove}>
                    Remove expense
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.guid === props.match.params.guid)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (guid, expense) => dispatch(startEditExpense(guid, expense)),
    startRemoveExpense: (guid) => dispatch(startRemoveExpense(guid))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);