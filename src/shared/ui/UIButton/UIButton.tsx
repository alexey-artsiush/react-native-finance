import React from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {styles, colorStyles} from './UIButton.styles';

interface IButtonProps {
  children: string;
  onPress: () => void;
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'outline';
  extraStyles?: {
    container?: StyleProp<ViewStyle>; 
    text?: StyleProp<TextStyle>; 
  };
  isCircle?: boolean;
}

const sizeStyles = {
  s: styles.buttonSmall,
  m: styles.buttonMedium,
  l: styles.buttonLarge,
};

const getButtonStyles = (
  size: 's' | 'm' | 'l',
  color: 'primary' | 'secondary' | 'outline',
) => {
  return {
    buttonStyle: [
      sizeStyles[size] || sizeStyles.l,
      color === 'outline' && styles.outlined,
    ],
    colorStyle: colorStyles[color],
  };
};

export const UIButton = ({
  children,
  onPress,
  size = 'l',
  color = 'primary',
  isCircle = false,
  extraStyles,
}: IButtonProps) => {
  const {buttonStyle, colorStyle} = getButtonStyles(size, color);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        {backgroundColor: colorStyle.backgroundColor},
        isCircle && styles.circleButton,
        extraStyles?.container,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          {fontSize: sizeStyles[size].fontSize, color: colorStyle.textColor},
          extraStyles?.text,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};