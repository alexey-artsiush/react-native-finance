import { ITheme } from '@/shared/types/themes';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      padding: 16,
      alignItems: 'center',
    },
    inputContainer: {
      width: '65%',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.border,
    },
    input: {
      flex: 1,
      height: 'auto',
      textAlign: 'center',
      fontSize: 22,
      color: theme.text,
    },
    currencyButton: {
      paddingHorizontal: 8,
      height: 'auto',
      justifyContent: 'center',
    },
    currencyText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.active,
    },
    currencyList: {
      position: 'absolute',
      right: '25%',
      backgroundColor: theme.background,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 8,
      elevation: 5,
      shadowColor: theme.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    currencyItem: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    currencyItemText: {
      color: theme.text,
      fontSize: 16,
    },
    selectedCurrencyItem: {
      backgroundColor: `${theme.active}20`,
    },
    selectedCurrencyText: {
      color: theme.active,
      fontWeight: 'bold',
    },
  });
