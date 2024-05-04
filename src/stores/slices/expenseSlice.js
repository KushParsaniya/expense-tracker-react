import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    expenses: []
}


const expenseSlice = createSlice({
        name: "expense",
        initialState,
        reducers: {
            addExpense(state, action) {
                state.expenses.push(action.payload)
            },
            addExpenses(state, action) {
                state.expenses.push(...action.payload)
            },
            removeExpense(state, action) {
                state.expenses = state.expenses.filter(expense => expense.expenseId !== action.payload)
            },
            removeAllExpenses(state) {
                state.expenses = []
            }
        }
    }
);

export const {addExpense, addExpenses, removeExpense} = expenseSlice.actions;

export default expenseSlice.reducer;

