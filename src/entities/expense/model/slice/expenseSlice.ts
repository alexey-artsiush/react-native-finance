import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IExpense} from '../types/i-expense';
import {IExpenseState} from '../types/i-expense-state';

const initialState: IExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<IExpense>) => {
      state.expenses.push(action.payload);
    },
    editExpense: (state, action: PayloadAction<IExpense>) => {
      const index = state.expenses.findIndex(e => e.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(e => e.id !== action.payload);
    },
  },
});

export const {actions: expenseActions} = expenseSlice;
export const {reducer: expenseReducer} = expenseSlice;
