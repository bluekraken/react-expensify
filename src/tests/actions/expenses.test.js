import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should create an add expense action object with values provided", () => {
    const expenseData = {
        description: "A cup of coffee",
        notes: "The Rabbit Hole",
        amount: 565,
        createdOn: 1_250_000
    }
    const action = addExpense(expenseData);
    expect(action).toStrictEqual({
        type: "ADD_EXPENSE",
        expense: {
            guid: expect.any(String),
            ...expenseData
        }
    });
});

test("should create an add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toStrictEqual({
        type: "ADD_EXPENSE",
        expense:
        {
            guid: expect.any(String),
            description: "",
            notes: "",
            amount: 0,
            createdOn: 0
        }
    });
});

test("should create an edit expense action object", () => {
    const expenseData = {
        description: "A cup of coffee",
        notes: "The Rabbit Hole",
        amount: 565,
        createdOn: 1_250_000
    }
    const action = editExpense("4e3a5108-fe63-48f7-89e0-4eaa8f64225a", expenseData);
    expect(action).toStrictEqual({
        type: "EDIT_EXPENSE",
        guid: "4e3a5108-fe63-48f7-89e0-4eaa8f64225a",
        updates: {
            ...expenseData
        }
    });
});

test("should create a remove expense action object", () => {
    const action = removeExpense({ guid: "4e3a5108-fe63-48f7-89e0-4eaa8f64225a" });
    expect(action).toStrictEqual({
        type: "REMOVE_EXPENSE",
        guid: "4e3a5108-fe63-48f7-89e0-4eaa8f64225a"
    });
});