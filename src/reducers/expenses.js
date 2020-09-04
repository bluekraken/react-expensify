// Default array
const expensesDefaultState = [];

// Return expenses reducer
export default (state = expensesDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.guid === action.guid) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case "REMOVE_EXPENSE":
            return state.filter(({ guid }) => guid !== action.guid);
        default:
            return state;
    }
};