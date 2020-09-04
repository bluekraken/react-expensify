import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, setSortBy } from "../../actions/filters";

test("should create a set start date filter action object", () => {
    const date = moment();
    const action = setStartDate(date);
    expect(action).toStrictEqual({
        type: "SET_START_DATE",
        startDate: date
    });
});

test("should create a set end date filter action object", () => {
    const date = moment();
    const action = setEndDate(date);
    expect(action).toStrictEqual({
        type: "SET_END_DATE",
        endDate: date
    });
});

test("should create a set text filter action object with value provided", () => {
    const text = "coffee";
    const action = setTextFilter(text);
    expect(action).toStrictEqual({
        type: "SET_TEXT_FILTER",
        text
    });
});

test("should create a set text filter action object with default value", () => {
    const action = setTextFilter();
    expect(action).toStrictEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test("should create a set sort by action object with value provided", () => {
    const action = setSortBy("amount");
    expect(action).toStrictEqual({
        type: "SET_SORT_BY",
        sortBy: "amount"
    });
});

test("should create a set sort by action object with default value", () => {
    const action = setSortBy();
    expect(action).toStrictEqual({
        type: "SET_SORT_BY",
        sortBy: "date"
    });
});