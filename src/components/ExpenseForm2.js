// Imports
import React from "react";
import moment from "moment";
import DatePicker from "react-date-picker";

// Return the expense form
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            notes: props.expense ? props.expense.notes : "",
            amount: props.expense ?  (props.expense.amount / 100).toString() : "",
            createdOn: props.expense ? moment(props.expense.createdOn) : moment(),
            error: ""
        };
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (value) => {
        if (value) {
            this.setState(() => ({ createdOn: moment(value) }));
        }
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
                    <DatePicker
                        calendarAriaLabel="Toggle calendar"
                        clearIcon={null}
                        dayAriaLabel="Day"
                        format="dd/MM/y"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date"
                        onChange={this.onDateChange}
                        required={true}
                        value={this.state.createdOn.toDate()}
                        yearAriaLabel="Year"
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