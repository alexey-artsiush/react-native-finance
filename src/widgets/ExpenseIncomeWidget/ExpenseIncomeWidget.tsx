import { IExpense } from '@/entities/expense';
import { getExpenses, getExpensesThunk } from '@/entities/expense/model';
import { AddExpense } from '@/features/AddExpense/AddExpense';
import { SwitchExpenseIncome } from '@/features/SwitchExpenseIncome';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

export const ExpenseIncomeWidget: FC = () => {
  const dispatch = useAppDispatch();
  const expenses = useSelector(getExpenses);
  const [currentTab, setCurrentTab] = useState<'expenses' | 'income'>('expenses');

  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  return (
    <View>
      <SwitchExpenseIncome currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <View>
        {currentTab === 'expenses' && <AddExpense expenses={expenses} />}
        {/* {currentTab === 'income' && <ListIncomeItem expenses={expenses} />} */}
      </View>
    </View>
  );
};
