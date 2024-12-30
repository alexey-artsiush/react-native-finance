import { View, TextInput, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { createStyles } from './UIAmountInput.styles';
import { useAppTheme } from '@/shared/lib/hooks/useTheme';
import { currencies, ECurrency } from '@/entities/currency';

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export const UIAmountInput = ({ value, onChange }: IProps) => {
  const theme = useAppTheme();
  const [currency, setCurrency] = useState(ECurrency.USD);
  const [showCurrencies, setShowCurrencies] = useState(false);
  const styles = createStyles(theme);

  const handleCurrencyPress = () => {
    setShowCurrencies(!showCurrencies);
  };

  const selectCurrency = (newCurrency: ECurrency) => {
    setCurrency(newCurrency);
    setShowCurrencies(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          keyboardType="numeric"
          placeholder="Type amount"
          placeholderTextColor={`${theme.text}60`}
        />
        <Pressable onPress={handleCurrencyPress} style={styles.currencyButton}>
          <Text style={styles.currencyText}>{currency}</Text>
        </Pressable>
      </View>

      {showCurrencies && (
        <View style={styles.currencyList}>
          {currencies.map((curr) => (
            <Pressable
              key={curr}
              style={[styles.currencyItem, curr === currency && styles.selectedCurrencyItem]}
              onPress={() => selectCurrency(curr)}
            >
              <Text
                style={[styles.currencyItemText, curr === currency && styles.selectedCurrencyText]}
              >
                {curr}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};
