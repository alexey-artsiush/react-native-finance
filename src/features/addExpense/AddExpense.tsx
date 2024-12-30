import { createStyles } from './AddExpense.styles';
import { FC, useMemo, useState } from 'react';
import { View } from 'react-native';
import { ExpenseItem } from '../../entities/expense/ui/ExpenseItem/ExpenseItem';
import { getCurrentExpense, IExpense } from '../../entities/expense/model';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { expenseActions } from '@/entities/expense';
import { useSelector } from 'react-redux';
import { useAppTheme } from '@/shared/lib/hooks/useTheme';
import { UIAmountInput } from '@/shared/ui';

interface IProps {
  expenses: IExpense[];
}

export const AddExpense: FC<IProps> = ({ expenses }) => {
  const dispatch = useAppDispatch();
  const theme = useAppTheme();
  const [amount, setAmount] = useState('');
  const currentExpense = useSelector(getCurrentExpense);
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleClick = (expense: IExpense) => {
    dispatch(expenseActions.setCurrentExpense(expense));
  };

  return (
    <View style={styles.container}>
      <UIAmountInput value={amount} onChange={setAmount} />

      {expenses.map((expense) => (
        <View key={expense.id} style={styles.itemWrapper}>
          <ExpenseItem
            currentExpense={currentExpense?.id === expense.id}
            expense={expense}
            onPress={handleClick}
          />
        </View>
      ))}
    </View>
  );
};
