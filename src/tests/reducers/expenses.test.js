import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should create default expenses values", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toStrictEqual([]);
});

test("should add an expense", () => {
    const expense = {
        guid: "8c477c86-212d-4383-a968-86ee1f5b7e0a",
        description: "Javascript training",
        notes: "Coursera",
        amount: 30000,
        createdOn: moment("2020-08-31").valueOf()
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toStrictEqual([
        ...expenses,
        expense
    ]);
});

test("should edit an expense by its guid", () => {
    const updates = {
        description: "Car park",
        notes: "Tate, St.Ives",
        amount: 880,
        createdOn: moment("2020-08-24").valueOf()
    };
    const action = {
        type: "EDIT_EXPENSE",
        guid: expenses[1].guid,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toStrictEqual([
        expenses[0],
        {
            ...updates,
            guid: expenses[1].guid
        },
        expenses[2]
    ]);
});

test("should not edit an expense if guid does not exist", () => {
    const updates = {
        description: "Car park",
        notes: "Tate, St.Ives",
        amount: 880,
        createdOn: moment("2020-08-24").valueOf()
    };
    const action = {
        type: "EDIT_EXPENSE",
        guid: "06aa1b02-2c38-4318-a498-0506a10e998e",
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toStrictEqual(expenses);
});

test("should remove an expense by its guid", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        guid: expenses[1].guid
    };
    const state = expensesReducer(expenses, action);
    expect(state).toStrictEqual([expenses[0], expenses[2]]);
});

test("should not remove an expense if guid does not exist", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        guid: "06aa1b02-2c38-4318-a498-0506a10e998e"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toStrictEqual(expenses);
});