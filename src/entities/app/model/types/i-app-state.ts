import {IToastError} from './i-toast-error';
import {EThemes} from './e-themes.ts';

export interface IAppState {
  toastErrors: IToastError[];
  theme: EThemes;
}
