import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface IButton {
  children: string | React.ReactNode;
  onPress?: () => void;
}

const Button = ({ children, onPress: buttonHandler = () => {} }: IButton) => {
  const isString = typeof children === 'string';

  return (
    <TouchableOpacity onPress={buttonHandler} style={styles.button}>
      {isString ? <Text>{children}</Text> : <>{children}</>}
    </TouchableOpacity>
  );
};

export default Button;
