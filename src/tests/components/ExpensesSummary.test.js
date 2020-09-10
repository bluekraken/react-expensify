import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpenseSummary correctly with no expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0.00} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with a single expense", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={275} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with muliple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={9} expensesTotal={21578} />);
    expect(wrapper).toMatchSnapshot();
});