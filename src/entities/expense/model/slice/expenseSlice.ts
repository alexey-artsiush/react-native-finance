import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExpense } from '../types/i-expense';
import { IExpenseState } from '../types/i-expense-state';
import { getExpensesThunk } from '../thunks/expenseThunk';

const initialState: IExpenseState = {
  expenses: [],
  isLoading: false,
  error: undefined,
  currentExpense: null,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<IExpense>) => {
      state.expenses.push(action.payload);
    },
    editExpense: (state, action: PayloadAction<IExpense>) => {
      const index = state.expenses.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
    setCurrentExpense: (state, action: PayloadAction<IExpense>) => {
      state.currentExpense = action.payload;
    },
    deleteExpense: (state, action: PayloadAction<number>) => {
      state.expenses = state.expenses.filter((e) => e.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpensesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getExpensesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.expenses = action.payload;
        state.error = undefined;
      })
      .addCase(getExpensesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: expenseActions } = expenseSlice;
export const { reducer: expenseReducer } = expenseSlice;
