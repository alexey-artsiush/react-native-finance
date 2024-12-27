import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {IAppState, appReducer} from '@/entities/app';
import {IExpenseState} from '@/entities/expense';
import { expenseReducer } from '@/entities/expense';

const rootReducer: ReducersMapObject<IRootState> = {
  app: appReducer,
  expense: expenseReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

declare global {
  interface IRootState {
    app: IAppState;
    expense: IExpenseState;
  }

  type TAppDispatch = typeof store.dispatch;

  interface IThunkApiConfig {
    state: IRootState;
    dispatch: TAppDispatch;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }
}
