import {IAppState} from '@/entities/app';

export const getAppState = (state: IRootState): IAppState => state.app;
