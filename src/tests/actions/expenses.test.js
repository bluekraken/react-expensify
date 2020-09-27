import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import db from "../../firebase/firebase";
import { startAddExpense, startEditExpense, startRemoveExpense } from "../../actions/expenses";

const createMockStore = configureMockStore([thunk]);
const defaultAuthState = {
    uid: "TESTING"
}
let guid;

test("should dispatch an add expense to the store and database", () => {
    const store = createMockStore(defaultAuthState);

    const expenseData = {
        description: "Bus ticket",
        notes: "Return to Alresford",
        amount: 720,
        createdOn: moment("2020-09-12").valueOf()
    };

    return store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        guid = actions[0].expense.guid;

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

test("should dispatch an add default expense to the store and database", () => {
    const store = createMockStore(defaultAuthState);

    const expenseDefaults = {
        description: "",
        notes: "",
        amount: 0,
        createdOn: 0
    };

    return store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        guid = actions[0].expense.guid;

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

test("should dispatch an edit expense to the store and database", () => {
    const store = createMockStore(defaultAuthState);

    const expenseData = {
        description: "A cup of coffee",
        notes: "The Rabbit Hole",
        amount: 565,
        createdOn: moment("2020-09-17").valueOf()
    };

    return store.dispatch(startEditExpense(guid, expenseData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toStrictEqual({
            type: "EDIT_EXPENSE",
            guid,
            updates: {
                ...expenseData
            }
        });
    });
});

test("should dispatch a remove expense to the store and database", () => {
    const store = createMockStore(defaultAuthState);

    return store.dispatch(startRemoveExpense(guid)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toStrictEqual({
            type: "REMOVE_EXPENSE",
            guid
        });
    });
});