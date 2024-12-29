import { IExpense } from '@/entities/expense';
import { getExpenses } from '@/entities/expense/model/selectors/getExpenses';
import { getExpensesThunk } from '@/entities/expense/model/thunks/expenseThunk';
import { IIncome } from '@/entities/income';
import { AddExpense } from '@/features/AddExpense/AddExpense';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

interface IProps {
  selectedItem: IExpense | IIncome | null;
  setSelectedItem: (item: IExpense | IIncome | null) => void;
  currentTab: 'income' | 'expenses';
}

export const ChooseExpenseIncomeItem: FC<IProps> = ({
  selectedItem,
  setSelectedItem,
  currentTab,
}) => {
  const dispatch = useAppDispatch();
  const expenses = useSelector(getExpenses);

  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  return (
    <View>
      {currentTab === 'expenses' && <AddExpense expenses={expenses} />}
      {/* {currentTab === 'income' && <ListIncomeItem expenses={expenses} />} */}
    </View>
  );
};
