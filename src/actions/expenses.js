// Imports
import { v4 as uuidv4 } from "uuid";
import db from "../firebase/firebase";

// Add expense
const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const saveAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = "",
            amount = 0,
            createdOn = 0,
            notes = ""
        } = expenseData;

        const expense = { description, amount, createdOn, notes };

        const guid = uuidv4();

        return db.collection("expenses")
            .doc(guid)
            .set({ ...expense })
            .then(() => {
                dispatch(addExpense({
                    guid,
                    ...expense
                }));
            });
    };
};


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