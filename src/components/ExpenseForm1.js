// Imports
import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// Return the expense form
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            notes: props.expense ? props.expense.notes : "",
            amount: props.expense ?  (props.expense.amount / 100).toString() : "",
            createdOn: props.expense ? moment(props.expense.createdOn) : moment(),
            calendarFocused: false,
            error: ""
        };
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdOn) => {
        if (createdOn) {
            this.setState(() => ({ createdOn }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide a description and an amount!"}));
        } else {
            this.setState(() => ({ error: ""}));
            this.props.handleSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdOn: this.state.createdOn.valueOf(),
                notes: this.state.notes
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdOn}
                        onDateChange={this.onDateChange}
                        focused={this.state.dateFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Enter an optional note for your expense"
                        value={this.state.notes}
                        onChange={this.onNotesChange}
                    >
                    </textarea>
                    <button>{this.props.expense ? "Edit expense" : "Add expense"}</button>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        )
    }
}