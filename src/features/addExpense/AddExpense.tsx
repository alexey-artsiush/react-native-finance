import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { ExpenseItem } from '../../entities/expense/ui/ExpenseItem/ExpenseItem';
import { IExpense } from '../../entities/expense/model';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { expenseActions } from '@/entities/expense';

interface IProps {
  expenses: IExpense[];
}

export const AddExpense: FC<IProps> = ({ expenses }) => {
  const dispatch = useAppDispatch();

  const handleClick = (expense: IExpense) => {
    dispatch(expenseActions.setCurrentExpense(expense));
  };

  return (
    <View style={styles.container}>
      {expenses.map((expense) => (
        <View key={expense.id} style={styles.itemWrapper}>
          <ExpenseItem expense={expense} onPress={handleClick} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
  },
  itemWrapper: {
    width: '28%',
    padding: 5,
  },
});
