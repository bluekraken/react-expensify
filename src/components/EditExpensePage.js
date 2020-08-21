// Imports
import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expensesActions";
import { removeExpense } from "../actions/expensesActions";

// Return the edit expense page
const EditExpensePage = (props) => {
    return (
        <div>
        <ExpenseForm
            expense={props.expense}
            handleSubmit={(expense) => {
                props.dispatch(editExpense(props.match.params.guid, expense));
                props.history.push("/");
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense({ guid: props.match.params.guid }));
            props.history.push("/");
        }}>
            Remove expense
        </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.guid === props.match.params.guid)
    }
};

export default connect(mapStateToProps)(EditExpensePage);