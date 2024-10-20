import {View} from 'react-native';
import {DataWidgetHeader} from '../DataWidgetHeader/DataWidgetHeader';
import {TotalCount} from '../TotalCount/TotalCount';
import {AddExpense} from '@/features/addExpense';
import {styles} from './DataWidget.styles.tsx';

export const DataWidget = () => {
  return (
    <View style={styles.widgetContainer}>
      <DataWidgetHeader />
      <TotalCount count={6954} />
      <AddExpense />
    </View>
  );
};
