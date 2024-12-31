import { ITheme } from '@/shared/types/themes';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: 10,
      position: 'relative',
    },
    expensesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: 10,
      marginTop: 20,
      position: 'relative',
    },
    itemWrapper: {
      width: '28%',
      padding: 5,
    },
    amountContainer: {
      width: '100%',
      padding: 16,
      alignItems: 'center',
    },
    input: {
      color: theme.text,
      width: '50%',
      height: 60,
      borderBottomWidth: 1,
      textAlign: 'center',
      borderColor: theme.border,
      borderRadius: 8,
      fontSize: 22,
      paddingHorizontal: 10,
    },
    datesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginTop: 16,
    },
    dateItem: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 5,
      backgroundColor: theme.background,
      borderWidth: 1,
      borderColor: theme.border,
    },
    selectedDateItem: {
      backgroundColor: theme.active,
      borderColor: theme.active,
    },
    dateText: {
      fontSize: 16,
      color: theme.text,
    },
    selectedDateText: {
      color: theme.background,
      fontWeight: 'bold',
    },
    submitButton: {
      backgroundColor: theme.active,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 8,
      marginTop: 24,
      alignSelf: 'center',
    },
    submitButtonDisabled: {
      backgroundColor: theme.inactive,
    },
    submitButtonText: {
      color: theme.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    errorText: {
      position: 'absolute',
      color: theme.error,
      fontSize: 12,
      marginTop: 4,
      textAlign: 'center',
    },
    amountError: {
      position: 'absolute',
      color: theme.error,
      fontSize: 12,
      width: '100%',
      textAlign: 'center',
      top: 80,
    },
    expenseError: {
      position: 'absolute',
      color: theme.error,
      fontSize: 12,
      width: '100%',
      textAlign: 'center',
      bottom: -5,
    },
  });
