import React from 'react';
import { Text, TextProps } from 'react-native';

interface ITimer extends TextProps {}

const Timer = ({ ...textProps }: ITimer) => {
  return <Text {...textProps}>08:20</Text>;
};

export default Timer;
