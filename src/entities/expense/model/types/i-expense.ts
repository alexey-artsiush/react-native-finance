export interface IExpense {
  id: string;
  amount: number;
  date: string;
  categoryId: string;
  description?: string;
  isRecurring: boolean;
}
