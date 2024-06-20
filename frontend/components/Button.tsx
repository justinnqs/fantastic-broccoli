import React, { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  title: string;
  className: string;
}

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ onPress, title, className = styles.button }, ref) => {
    return (
      <TouchableOpacity ref={ref} className={className} onPress={onPress}>
        <Text className={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
