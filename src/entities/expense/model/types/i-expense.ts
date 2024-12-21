import {StackNavigationProp} from '@react-navigation/stack';

type ExpensesStackParamList = {
  Expenses: undefined;
  AddExpense: undefined;
};

export type AddExpenseScreenNavigationProp = StackNavigationProp<
  ExpensesStackParamList,
  'AddExpense'
>;

export interface IExpense {
  id: string;
  amount: number;
  date: string;
  categoryId: string;
  description?: string;
  isRecurring: boolean;
}
