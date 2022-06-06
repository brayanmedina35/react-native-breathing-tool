import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { alarmLight, alarmDark } from './../../../icons';
import styles from './styles';

const ICONS = {
  'alarm-light': alarmLight,
  'alarm-dark': alarmDark,
};

interface IButton {
  children: string | React.ReactNode;
  onPress?: () => void;
  apparence: 'default' | 'primary';
  disabled?: boolean;
  leftIcon?: 'alarm-light' | 'alarm-dark';
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
  disabled = false,
  leftIcon,
}: IButton) => {
  const isString = typeof children === 'string';

  const buttonStyle = styles[BUTTON_STYLES[apparence]] || styles.defaultButton;
  const labelStyle = styles[LABEL_STYLES[apparence]] || styles.defaultLabel;
  const iconSource = ICONS[leftIcon];

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={buttonHandler}
      style={[styles.button, buttonStyle]}>
      {isString ? (
        <>
          {!!leftIcon && <Image style={styles.icon} source={iconSource} />}
          <Text style={labelStyle}>{children}</Text>
        </>
      ) : (
        <>{children}</>
      )}
    </TouchableOpacity>
  );
};

export default Button;
