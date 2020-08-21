// Imports
import moment from "moment";

// Default object
const filtersDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("quarter"),
    endDate: moment()
};

// Return filters reducer
export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case "SET_END_DATE":
            return { ...state, endDate: action.endDate };
        case "SET_START_DATE":
            return { ...state, startDate: action.startDate };
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text };
        case "SORT_BY":
            return { ...state, sortBy: action.sortBy};
        default:
            return state;
    }
};