import { StyleSheet } from 'react-native';
import { lightTheme } from '@/app/themes';

export const createStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 8,
      borderRadius: 8,
    },
    activeContainer: {
      backgroundColor: theme.background,
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.primary,
      marginBottom: 8,
    },
    title: {
      fontSize: 14,
      color: theme.text,
    },
  });
