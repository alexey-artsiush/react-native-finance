import { View } from 'react-native';
import { UIButton } from '@/shared/ui';
import { styles } from './SwitchExpenseIncome.style.tsx';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface IProps {
  currentTab: 'income' | 'expenses';
  setCurrentTab: (tab: 'income' | 'expenses') => void;
}

export const SwitchExpenseIncome = ({ currentTab, setCurrentTab }: IProps) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <UIButton
          color="outline"
          onPress={() => setCurrentTab('expenses')}
          extraStyles={{
            container: [
              styles.tabButton,
              currentTab === 'expenses' && {
                borderBottomColor: theme.active,
              },
            ],
            text: {
              color: currentTab === 'expenses' ? theme.active : theme.text,
            },
          }}
        >
          expenses
        </UIButton>
        <UIButton
          color="outline"
          onPress={() => setCurrentTab('income')}
          extraStyles={{
            container: [
              styles.tabButton,
              currentTab === 'income' && {
                borderBottomColor: theme.active,
              },
            ],
            text: {
              color: currentTab === 'income' ? theme.active : theme.text,
            },
          }}
        >
          income
        </UIButton>
      </View>
    </View>
  );
};
