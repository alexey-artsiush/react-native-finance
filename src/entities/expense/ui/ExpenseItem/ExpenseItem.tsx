import { View, Text, StyleSheet, Pressable } from 'react-native';
import { IExpense } from '../../model/types/i-expense';

interface IProps {
  expense: IExpense;
  onPress: (expense: IExpense) => void;
}

export const ExpenseItem = ({ expense, onPress }: IProps) => {
  return (
    <Pressable onPress={() => onPress(expense)}>
      <View style={styles.container}>
        <View style={styles.circle} />
        <Text style={styles.title}>{expense.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    color: '#333',
  },
});
