import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import db from "../../firebase/firebase";
import { saveAddExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const createMockStore = configureMockStore([thunk]);

test("should add an expense to the database and dispatch to the store", () => {
    const store = createMockStore({});

    const expenseData = {
        description: "Bus ticket",
        notes: "Return to Alresford",
        amount: 720,
        createdOn: moment("2020-09-12").valueOf()
    };

    return store.dispatch(saveAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        const guid = actions[0].expense.guid;

        expect(actions[0]).toStrictEqual({
            type: "ADD_EXPENSE",
            expense: {
                guid,
                ...expenseData
            }
        });

        // return db.collection("expenses").doc(guid).get().then((doc) => {
        //     expect(doc.data()).toStrictEqual(expenseData);
        // });

    });
});

test("should add a default expense to the database and dispatch to the store", () => {
    const store = createMockStore({});

    const expenseDefaults = {
        description: "",
        notes: "",
        amount: 0,
        createdOn: 0
    };

    return store.dispatch(saveAddExpense({})).then(() => {
        const actions = store.getActions();
        const guid = actions[0].expense.guid;

        expect(actions[0]).toStrictEqual({
            type: "ADD_EXPENSE",
            expense: {
                guid,
                ...expenseDefaults
            }
        });

        // return db.collection("expenses").doc(guid).get().then((doc) => {
        //     expect(doc.data()).toStrictEqual(expenseDefaults);
        // });
    });
});

test("should create an edit expense action object", () => {
    const expenseData = {
        description: "A cup of coffee",
        notes: "The Rabbit Hole",
        amount: 565,
        createdOn: moment("2020-09-17").valueOf()
    };
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