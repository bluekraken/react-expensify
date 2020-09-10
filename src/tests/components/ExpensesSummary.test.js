import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should render ExpenseSummary correctly with no expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with a single expense", () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[2]]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with muliple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});