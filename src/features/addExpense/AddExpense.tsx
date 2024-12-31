import { createStyles } from './AddExpense.styles';
import { FC, useMemo, useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { ExpenseItem } from '../../entities/expense/ui/ExpenseItem/ExpenseItem';
import { IExpense, TExpenseForm } from '../../entities/expense/model';
import { useAppTheme } from '@/shared/lib/hooks/useTheme';
import { UIAmountInput } from '@/shared/ui';
import { getFormattedDate, getThreeDays } from '@/shared/lib/utils/dates';
import { Formik } from 'formik';
import { useValidationSchema } from './model/hooks/useValidationSchema';

interface IProps {
  expenses: IExpense[];
}

export const AddExpense: FC<IProps> = ({ expenses }) => {
  const theme = useAppTheme();
  const dates = getThreeDays();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const styles = useMemo(() => createStyles(theme), [theme]);

  const initialValues: TExpenseForm = {
    amount: '',
    expenseId: '',
    date: new Date(),
  };

  const handleSubmit = (values: TExpenseForm) => {
    console.log('Form submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={useValidationSchema()}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, values, setFieldValue, errors, touched }) => (
        <View style={styles.container}>
          <UIAmountInput
            value={values.amount}
            onChange={(value) => setFieldValue('amount', value)}
          />
          {touched.amount && errors.amount && (
            <Text style={styles.amountError}>{errors.amount}</Text>
          )}

          <View style={styles.expensesContainer}>
            {expenses.map((expense) => (
              <View key={expense.id} style={styles.itemWrapper}>
                <ExpenseItem
                  currentExpense={values.expenseId === expense.id}
                  expense={expense}
                  onPress={(expense) => setFieldValue('expenseId', expense.id)}
                />
              </View>
            ))}
            {touched.expenseId && errors.expenseId && (
              <Text style={styles.expenseError}>{errors.expenseId}</Text>
            )}
          </View>

          <View style={styles.datesContainer}>
            {dates.map((date) => (
              <Pressable
                key={date.toISOString()}
                style={[
                  styles.dateItem,
                  date.toDateString() === selectedDate.toDateString() && styles.selectedDateItem,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    styles.dateText,
                    date.toDateString() === selectedDate.toDateString() && styles.selectedDateText,
                  ]}
                >
                  {getFormattedDate(date)}
                </Text>
              </Pressable>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.submitButton,
              (!values.amount || !values.expenseId) && styles.submitButtonDisabled,
            ]}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.submitButtonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
