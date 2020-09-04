import moment from "moment";
import filtersReducer from "../../reducers/filters";
import { filters } from "../fixtures/filters";

test("should create default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toStrictEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("quarter"),
        endDate: moment().endOf("day")
    });
})

test("should set the text filter to the value provided", () => {
    const text = "parking";
    const action = {
        type: "SET_TEXT_FILTER",
        text
    };
    const state = filtersReducer(filters, action);
    expect(state).toStrictEqual({
        ...filters,
        text
    });
});

test("should set the sort by to the value provided", () => {
    const sortBy = "date";
    const action = {
        type: "SET_SORT_BY",
        sortBy
    };
    const state = filtersReducer(filters, action);
    expect(state).toStrictEqual({
        ...filters,
        sortBy
    });
});

test("should set the start date to the value provided", () => {
    const startDate = moment("2020-08-01");
    const action = {
        type: "SET_START_DATE",
        startDate
    };
    const state = filtersReducer(filters, action);
    expect(state).toStrictEqual({
        ...filters,
        startDate
    });
});

test("should set the end date to the value provided", () => {
    const endDate = moment("2020-08-31");
    const action = {
        type: "SET_END_DATE",
        endDate
    };
    const state = filtersReducer(filters, action);
    expect(state).toStrictEqual({
        ...filters,
        endDate
    });
});

test("should not update the current state", () => {
    const action = {
        type: "SET_INVALID_FILTER",
        invalid: "parking"
    };
    const filter = filtersReducer(filters, action);
    expect(filter).toStrictEqual({
        ...filters
    });
});