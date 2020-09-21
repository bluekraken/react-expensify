import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let saveAddExpense, history, wrapper;

beforeEach(() => {
    saveAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage saveAddExpense={saveAddExpense} history={history} />);
});

test("should render AddExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle addExpense", () => {
    wrapper.find("ExpenseForm").prop("handleSubmit")(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(saveAddExpense).toHaveBeenLastCalledWith(expenses[2]);
});