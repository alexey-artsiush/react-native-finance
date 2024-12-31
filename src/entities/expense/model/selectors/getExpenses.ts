import { createSelector } from '@reduxjs/toolkit';
import { getExpenseState } from './getExpenseState';
import { IExpense } from '../types/i-expense';

export const getExpenses = createSelector(
  getExpenseState,
  (expenseState): IExpense[] => expenseState.expenses,
);
