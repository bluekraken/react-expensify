import moment from "moment";

export const defaultFilters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

export const filters = {
    text: "coffee",
    sortBy: "amount",
    startDate: moment("2020-07-01"),
    endDate: moment("2020-09-30")
};