// Imports
import { v4 as uuidv4 } from "uuid";
import db from "../firebase/firebase";

// Add expense
const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const collection = `users/${getState().auth.uid}/expenses`;

        const {
            description = "",
            amount = 0,
            createdOn = 0,
            notes = ""
        } = expenseData;

        const expense = { description, amount, createdOn, notes };

        const guid = uuidv4();

        return db.collection(collection)
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
const editExpense = (guid, updates) => ({
    type: "EDIT_EXPENSE",
    guid,
    updates
});

export const startEditExpense = (guid, updates) => {
    return (dispatch, getState) => {
        const collection = `users/${getState().auth.uid}/expenses`;

        return db.collection(collection)
            .doc(guid)
            .update({ ...updates })
            .then(() => {
                dispatch(editExpense(guid, updates));
            });
    };
};

// Remove expense
const removeExpense = (guid) => ({
    type: "REMOVE_EXPENSE",
    guid
});

export const startRemoveExpense = (guid) => {
    return (dispatch, getState) => {
        const collection = `users/${getState().auth.uid}/expenses`;

        return db.collection(collection)
            .doc(guid)
            .delete()
            .then(() => {
                dispatch(removeExpense(guid));
            });
    };
};

// Setup expenses
const setupExpenses = (expenses) => ({
    type: "SETUP_EXPENSES",
    expenses
});

export const startSetupExpenses = () => {
    return (dispatch, getState) => {
        const collection = `users/${getState().auth.uid}/expenses`;

        return db.collection(collection)
            .get()
            .then((snapshot) => {
                const expenses = [];

                snapshot.docs.forEach((doc) => {
                    expenses.push({
                        guid: doc.id,
                        ...doc.data()
                    });
                });

                dispatch(setupExpenses(expenses));
            });
    };
};