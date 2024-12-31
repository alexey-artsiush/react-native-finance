export interface IExpense {
  id: string;
  title: string;
  amount: number;
  date: string | Date;
  categoryId: string;
  description?: string;
}

export interface TExpenseForm {
  amount: string;
  expenseId: string;
  date: Date;
}
