import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {store} from '../config/store';

interface IStoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const {children} = props;

  return <Provider store={store}>{children}</Provider>;
};
