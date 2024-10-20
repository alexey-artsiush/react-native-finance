import {View} from 'react-native';
import {UIButton} from '@/shared/ui';
import {styles} from './AddExpense.styles.tsx';

export const AddExpense = () => {
  return (
    <View style={styles.container}>
      <UIButton onPress={AddExpense} isCircle>
        +
      </UIButton>
    </View>
  );
};
