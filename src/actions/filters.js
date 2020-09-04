// Set start date
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

// Set end date
export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

// Set text filter
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// Set sort by
export const setSortBy = (sortBy = "date") => ({
    type: "SET_SORT_BY",
    sortBy
});