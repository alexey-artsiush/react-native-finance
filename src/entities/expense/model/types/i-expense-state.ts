import {IExpense} from '../types/i-expense';

export interface IExpenseState {
  expenses: IExpense[];
  isLoading?: boolean;
  error?: string;
}