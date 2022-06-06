import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface IButton {
  children: string | React.ReactNode;
  onPress?: () => void;
  apparence: 'default' | 'primary';
}

const BUTTON_STYLES: { [key: string]: string } = {
  default: 'defaultButton',
  primary: 'primaryButton',
};

const LABEL_STYLES: { [key: string]: string } = {
  default: 'defaultLabel',
  primary: 'primaryLabel',
};

const Button = ({
  children,
  onPress: buttonHandler = () => {},
  apparence = 'default',
}: IButton) => {
  const isString = typeof children === 'string';

  const buttonStyle = styles[BUTTON_STYLES[apparence]] || styles.defaultButton;
  const labelStyle = styles[LABEL_STYLES[apparence]] || styles.defaultLabel;

  return (
    <TouchableOpacity
      onPress={buttonHandler}
      style={[styles.button, buttonStyle]}>
      {isString ? <Text style={labelStyle}>{children}</Text> : <>{children}</>}
    </TouchableOpacity>
  );
};

export default Button;
