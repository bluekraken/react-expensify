// Imports
import { v4 as uuidv4 } from "uuid";

// Add expense
export const addExpense = (
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
export const editExpense = (guid, updates) => ({
    type: "EDIT_EXPENSE",
    guid,
    updates
});

// Remove expense
export const removeExpense = ({ guid } = {}) => ({
    type: "REMOVE_EXPENSE",
    guid
});