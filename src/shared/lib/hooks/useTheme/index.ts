import { useSelector } from 'react-redux';
import { getTheme } from '@/entities/app';
import { EThemes } from '@/entities/app/model/types/e-themes';
import { lightTheme, darkTheme } from '@/app/themes';

export const useAppTheme = () => {
  const currentTheme = useSelector(getTheme);

  return currentTheme === EThemes.LIGHT ? lightTheme : darkTheme;
};
