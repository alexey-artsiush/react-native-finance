import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {styles} from './TotalCount.styles.tsx';

interface TotalCountProps {
  count: number;
  style?: ViewStyle | ViewStyle[];
}

export const TotalCount: React.FC<TotalCountProps> = ({count, style}) => {
  return (
    <View style={[styles.circle, style]}>
      <Text style={styles.countText}>{count}</Text>
    </View>
  );
};
