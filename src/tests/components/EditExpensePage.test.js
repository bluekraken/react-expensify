import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[2]}
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
        />
    );
});

test("should render EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
    wrapper.find("ExpenseForm").prop("handleSubmit")(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith("/dashboard");
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].guid, expenses[2]);
});

test("should handle removeExpense", () => {
    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/dashboard");
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].guid);
});