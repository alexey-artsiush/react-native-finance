import {View} from 'react-native';
import {DataWidgetHeader} from '../DataWidgetHeader/DataWidgetHeader';
import {TotalCount} from '../TotalCount/TotalCount';
import {styles} from './DataWidget.styles.tsx';
import { NavigateToAddExpense } from '@/features/navigateToAddExpense/NavigateToAddExpense.tsx';

export const DataWidget = () => {
  return (
    <View style={styles.widgetContainer}>
      <DataWidgetHeader />
      <TotalCount count={6954} />
      <NavigateToAddExpense />
    </View>
  );
};
