import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './UIButton.styles.tsx';

interface IButtonProps {
  children: string;
  onPress: () => void;
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary';
  isCircle?: boolean;
}

const getButtonStyles = (
  size: 's' | 'm' | 'l',
  color: 'primary' | 'secondary',
) => {
  const sizeStyles = {
    s: styles.buttonSmall,
    m: styles.buttonMedium,
    l: styles.buttonLarge,
  };

  const colorStyles = {
    primary: {backgroundColor: 'orange', textColor: 'white'},
    secondary: {backgroundColor: 'blue', textColor: 'white'},
  };

  return {
    buttonStyle: sizeStyles[size] || sizeStyles.l,
    colorStyle: colorStyles[color] || colorStyles.primary,
  };
};

export const UIButton = ({
  children,
  onPress,
  size = 'l',
  color = 'primary',
  isCircle = false,
}: IButtonProps) => {
  const {buttonStyle, colorStyle} = getButtonStyles(size, color);

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, isCircle && styles.circleButton]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {fontSize: buttonStyle.fontSize, color: colorStyle.textColor},
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
