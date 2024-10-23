import {createSelector} from '@reduxjs/toolkit';
import {getAppState} from '@/entities/app/model/selectors/getAppState/getAppState.ts';
import {EThemes} from '@/entities/app/model/types/e-themes.ts';

export const getTheme = createSelector(
  getAppState,
  (appState): EThemes => appState.theme,
);
