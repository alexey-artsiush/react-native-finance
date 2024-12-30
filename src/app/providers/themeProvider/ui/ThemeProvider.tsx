import React, { ReactNode, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { EThemes } from '@/entities/app/model/types/e-themes.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appActions, getTheme } from '@/entities/app';
import { NavigationContainer } from '@react-navigation/native';

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(getTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        dispatch(appActions.setTheme(storedTheme as EThemes));
      }
      setLoading(false);
    };

    loadTheme();
  }, [dispatch]);

  if (loading) {
    return <Text>Loading theme...</Text>;
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>{children}</View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
