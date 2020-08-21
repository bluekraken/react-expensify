// Imports
import moment from "moment";

// Get filtered expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdOnMoment = moment(expense.createdOn);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdOnMoment, "day") : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdOnMoment, "day") : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        } else {
            return a.createdOn < b.createdOn ? 1 : -1;
        }
    });
}