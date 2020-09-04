import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { defaultFilters, filters } from "../fixtures/filters";

let setTextFilter, setSortBy, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setSortBy = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setSortBy={setSortBy}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test("should render ExpenseListFilters correctly with filters provided", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters correctly with default filters", () => {
    wrapper.setProps({ filters: defaultFilters });
    expect(wrapper).toMatchSnapshot();
});

test("should handle setTextFilter", () => {
    const event = { target: { value: "parking" } };
    wrapper.find("#textFilter").simulate("change", event);
    expect(setTextFilter).toHaveBeenLastCalledWith(event.target.value);
});

test("should handle setSortBy", () => {
    const event = { target: { value: "date" } };
    wrapper.find("#sortBy").simulate("change", event);
    expect(setSortBy).toHaveBeenLastCalledWith(event.target.value);
});

test("should handle setStartDate and setEndDate", () => {
    const dates = {
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    };
    wrapper.find("#dates").prop("onDatesChange")(dates);
    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test("should update the calendar focus on change", () => {
    const calendarFocused = "endDate";
    wrapper.find("#dates").prop("onFocusChange")(calendarFocused);
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});