export interface IExpense {
  id: number;
  title: string;
  amount: number;
  date: string | Date;
  categoryId: string;
  description?: string;
}
