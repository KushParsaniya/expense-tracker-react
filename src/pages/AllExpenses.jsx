import ExpenseCard from "../components/card/ExpenseCard.jsx";
import {useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";


const selectExpenses = state => state.expense.expenses;

// Create a memoized selector
const selectMemoizedExpenses = createSelector(
    [selectExpenses],
    (expenses) => expenses
);

function AllExpenses() {

    const isLogged = useSelector(state => state.auth.isLogged);
    const expenses = useSelector(selectMemoizedExpenses);


    return (
        isLogged ? (<section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expenses.map((expense) => (
                    <ExpenseCard key={expense.expenseId} {...expense} />
                ))}
            </div>
        </section>) : (<h2>please login to see expenses...</h2>)
    );
}

export default AllExpenses;
