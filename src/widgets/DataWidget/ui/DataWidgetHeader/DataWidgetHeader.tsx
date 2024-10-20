import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const periods = [
  {id: 1, period: 'День'},
  {id: 2, period: 'Неделя'},
  {id: 3, period: 'Месяц'},
  {id: 4, period: 'Год'},
];

export const DataWidgetHeader = () => {
  const [activePeriod, setActivePeriod] = useState(1);

  return (
    <View style={styles.header}>
      {periods.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => setActivePeriod(item.id)}
          style={styles.button}>
          <Text
            style={[
              styles.text,
              activePeriod === item.id && styles.activeText,
            ]}>
            {item.period}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  activeText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
