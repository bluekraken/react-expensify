import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

// Add expense
const addExpense = (
    {
        description = "",
        notes = "",
        amount = 0,
        createdOn = 0
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        guid: uuidv4(),
        description,
        notes,
        amount,
        createdOn
    }
});

// Edit expense
const editExpense = (guid, updates) => ({
    type: "EDIT_EXPENSE",
    guid,
    updates
});

// Remove expense
const removeExpense = ({ guid } = {}) => ({
    type: "REMOVE_EXPENSE",
    guid
});

// Set End Date
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

// Set Start Date
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

// Set Text Filter
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// Sort By Amount
const sortByAmount = () => ({
    type: "SORT_BY",
    sortBy: "amount"
});

// Sort By Date
const sortByDate = () => ({
    type: "SORT_BY",
    sortBy: "date"
});

// Filters reducer
const filtersDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case "SET_END_DATE":
            if (
                typeof state.startDate === "number"
                && typeof action.endDate === "number"
                && state.startDate > state.endDate
            ) {
                return state;
            } else {
                return { ...state, endDate: action.endDate };
            }
        case "SET_START_DATE":
            if (
                typeof state.endDate === "number"
                && typeof action.startDate === "number"
                && action.startDate > state.endDate
            ) {
                return state;
            } else {
                return { ...state, startDate: action.startDate };
            }
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text };
        case "SORT_BY":
            return { ...state, sortBy: action.sortBy};
        default:
            return state;
    }
};

// Get Filtered Expenses
const getFilteredExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdOn >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdOn <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdOn < b.createdOn ? 1 : -11;
        } else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Create store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);

    console.log(filteredExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 1_000, createdOn: 35_000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 275, createdOn: -500 }));
const expenseThree = store.dispatch(addExpense({ description: "Parking", amount: 650, createdOn: -1_500 }));

// store.dispatch(removeExpense({ guid: expenseOne.expense.guid }));

// store.dispatch(editExpense(expenseTwo.expense.guid, {amount: 315}));

// store.dispatch(setTextFilter("OFF"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(187));
// store.dispatch(setStartDate());
// store.dispatch(setStartDate(225));

console.log(store.getState());