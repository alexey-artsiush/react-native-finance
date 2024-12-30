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
  });
