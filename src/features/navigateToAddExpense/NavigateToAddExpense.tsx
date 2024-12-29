import { View } from 'react-native';
import { UIButton } from '@/shared/ui';
import { useNavigation } from '@react-navigation/native';
import { styles } from './NavigateToAddExpense.styles';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '@/shared/types/navigation';

export const NavigateToAddExpense = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
