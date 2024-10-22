import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppState} from '../types/i-app-state';

const initialState: IAppState = {
  toastErrors: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToastError: (state, action: PayloadAction<IAppState>) => {},
  },
});

export const {actions: appActions} = appSlice;
export const {reducer: appReducer} = appSlice;
