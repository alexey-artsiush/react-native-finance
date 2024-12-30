import { View, Text, Pressable } from 'react-native';
import { IExpense } from '../../model/types/i-expense';
import { createStyles } from './ExpenseItem.styles';
import { useMemo } from 'react';
import { useAppTheme } from '@/shared/lib/hooks/useTheme';

interface IProps {
  expense: IExpense;
  onPress: (expense: IExpense) => void;
  currentExpense: boolean;
}

export const ExpenseItem = ({ expense, onPress, currentExpense }: IProps) => {
  const theme = useAppTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Pressable onPress={() => onPress(expense)}>
      <View style={[styles.container, currentExpense && styles.activeContainer]}>
        <View style={styles.circle} />
        <Text style={styles.title}>{expense.title}</Text>
      </View>
    </Pressable>
  );
};
