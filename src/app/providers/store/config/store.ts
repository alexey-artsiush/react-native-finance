import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {appReducer} from '@/entities/app/model/slice/appSlice.ts';

const rootReducer: ReducersMapObject<IRootState> = {
  app: appReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

declare global {
  interface IRootState {}

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
