import { createSelector } from '@reduxjs/toolkit';
import { getExpenseState } from './getExpenseState';
import { IExpense } from '../types/i-expense';

export const getCurrentExpense = createSelector(
  getExpenseState,
  (expenseState): IExpense | null => expenseState.currentExpense,
);
