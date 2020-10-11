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
            <div className="content-container">
                <div className="page-header">
                    <h1 className="page-header__title">Save expense</h1>
                </div>
                <ExpenseForm
                        expense={this.props.expense}
                        handleSubmit={this.handleSubmit}
                    />
                <div className="form__remove">
                    <button className="button button--remove" onClick={this.handleRemove}>
                        Remove expense
                    </button>
                </div>
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