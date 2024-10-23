import {IExpenseState} from '../../types/i-expense-state';

export const getExpenseState = (state: IRootState): IExpenseState =>
  state.expense;
