import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppState} from '../types/i-app-state';
import {EThemes} from '@/entities/app/model/types/e-themes.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: IAppState = {
  toastErrors: [],
  theme: EThemes.LIGHT,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToastError: (state, action: PayloadAction<IAppState>) => {},
    setTheme: (state, action: PayloadAction<EThemes>) => {
      state.theme = action.payload;
      AsyncStorage.setItem('theme', action.payload);
    },
  },
});

export const {actions: appActions} = appSlice;
export const {reducer: appReducer} = appSlice;
