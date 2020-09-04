// Imports
import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

// Return the edit expense page
export class EditExpensePage extends React.Component {
    handleSubmit = (expense) => {
        this.props.editExpense(this.props.expense.guid, expense);
        this.props.history.push("/");
    }

    handleRemove = () => {
        this.props.removeExpense(this.props.expense.guid);
        this.props.history.push("/");
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
    editExpense: (guid, expense) => dispatch(editExpense(guid, expense)),
    removeExpense: (guid) => dispatch(removeExpense({ guid }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);