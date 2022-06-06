import React, { useRef, useEffect, useState } from 'react';
import { TextProps, Text, Animated, Easing } from 'react-native';
import { getTimeFormated } from './../../../../core/helpers/date';
import styles from './styles';
interface ITimer extends TextProps {
  duration: number;
  running: boolean;
  reset: boolean;
}

const Timer = ({ duration = 0, running, reset, ...textProps }: ITimer) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(1);
  const secondsRef = useRef(0);
  const [runningCount, setRunningCount] = useState(0);

  const updateSeconds = (value: number) => {
    if (count !== value) {
      secondsRef.current = value;
      setCount(value);
    }
  };

  useEffect(() => {
    if (reset) {
      fadeAnim.setValue(0);
      updateSeconds(0);
    }
  }, [reset, count, setCount]);

  useEffect(() => {
    if (running) {
      Animated.timing(fadeAnim, {
        toValue: duration / 60000,
        duration:
          runningCount === 0 ? duration : duration * (1 - currentPercentage),
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
      setRunningCount(runningCount + 1);
    }
    if (running === false) {
      fadeAnim.stopAnimation(value => {
        setCurrentPercentage(value);
      });
    }
  }, [fadeAnim, running]);

  useEffect(() => {
    fadeAnim.addListener(({ value }) => {
      // @ts-ignore
      const seconds = parseInt((duration * value) / 1000);
      updateSeconds(seconds);

      if (value === 1) {
        fadeAnim.setValue(0);
      }
    });
  }, []);

  const timeFormated = getTimeFormated(duration / 1000 - count);

  return <Text style={styles.label}>{timeFormated}</Text>;
};

export default Timer;
