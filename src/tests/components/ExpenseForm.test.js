import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm correctly with an expense", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render an error for an invalid from submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    });
    expect(wrapper.state("error")).not.toBe("");
    expect(wrapper).toMatchSnapshot();
});

test("should update the description on change", () => {
    const value = "Logitech mouse";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("#description").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("description")).toBe(value);
});

test("should update the amount on a valid change", () => {
    const value = "12.34";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("#amount").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe(value);
});

test("should not update the amount on an invalid change", () => {
    const value = "12.345";
    const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>);
    wrapper.find("#amount").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe(Number(Math.round((expenses[2].amount / 100) + "e2") + "e-2").toString());
});

test("should update the notes on change", () => {
    const value = "These are some random notes!";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("#notes").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("notes")).toBe(value);
});

test("should call onSubmit props for valid form submission", () => {
    const handleSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} handleSubmit={handleSubmitSpy}/>);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    });
    expect(wrapper.state("error")).toBe("");
    expect(handleSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[2].description,
        amount: expenses[2].amount,
        notes: expenses[2].notes,
        createdOn: expenses[2].createdOn
    });
});

test("should update the date on change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
    expect(wrapper.state("createdOn")).toStrictEqual(now);
});

test("should update the calendar focus on change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({ focused });
    expect(wrapper.state("calendarFocused")).toBe(focused);
});