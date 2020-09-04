// Imports
import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";

import { setTextFilter, setSortBy, setStartDate, setEndDate } from "../actions/filters";

// Return the expense list filters
export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortByChange = (e) => {
        this.props.setSortBy(e.target.value);
    }

    render() {
        return (
            <div>
                <input
                    id="textFilter"
                    type="text" value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    id="sortBy"
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    id="dates"
                    startDate={this.props.filters.startDate}
                    startDateId="my-start-date-id"
                    endDate={this.props.filters.endDate}
                    endDateId="my-end-date-id"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    displayFormat="DD/MM/YYYY"
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setSortBy: (value) => dispatch(setSortBy(value)),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);