// Imports
import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";

import { setTextFilter, setSortBy, setStartDate, setEndDate } from "../actions/filtersActions";

// Return the expense list filters
class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };

    render() {
        return (
            <div>
                <input
                    type="text" value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        this.props.dispatch(setSortBy(e.target.value));
                    }}
                >
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
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

export default connect(mapStateToProps)(ExpenseListFilters);