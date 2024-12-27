import { createSelector } from "@reduxjs/toolkit";
import { getExpenseState } from "./getExpenseState";
import { IExpense } from "../types/i-expense"; 
import { IExpenseState } from "../types/i-expense-state";

export const getExpenses =  createSelector(getExpenseState, (expenseState): IExpense[] => expenseState.expenses)
