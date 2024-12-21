import {View} from 'react-native';
import {UIButton} from '@/shared/ui';
import {useNavigation} from '@react-navigation/native';
import {AddExpenseScreenNavigationProp} from '@/entities/expense/model/types/i-expense.ts';
import {styles} from './NavigateToAddExpense.styles';

export const NavigateToAddExpense = () => {
  const navigation = useNavigation<AddExpenseScreenNavigationProp>();

  const handleNavigateToAddExpensePress = () => {
    navigation.navigate('AddExpense');
  };

  return (
    <View style={styles.container}>
      <UIButton onPress={handleNavigateToAddExpensePress} isCircle>
        +
      </UIButton>
    </View>
  );
};
