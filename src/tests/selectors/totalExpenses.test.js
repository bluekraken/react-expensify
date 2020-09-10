import totalExpenses from "../../selectors/totalExpenses";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
    const result = totalExpenses([]);
    expect(result).toBe(0);
});

test("should correctly total a single expense", () => {
    const result = totalExpenses([expenses[2]]);
    expect(result).toBe(3980);
});

test("should correctly total multiple expenses", () => {
    const result = totalExpenses(expenses);
    expect(result).toBe(5355);
});