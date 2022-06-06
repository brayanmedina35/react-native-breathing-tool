import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, Easing } from 'react-native';
import { walowLight, walowDark } from './../../../icons';
import styles from './styles';

interface IWallowAnimation {
  radius: number;
  isPlaying: boolean;
  playingCount: number;
  duration: number;
  reset: boolean;
}

const WallowAnimation = ({
  radius,
  isPlaying = false,
  playingCount,
  duration = 2000,
  reset = false,
}: IWallowAnimation) => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  const [count, setCount] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(1);
  const cycles = useRef(0);
  const [inputRange] = useState([0, 1, 2]);
  const [outputRange] = useState([1, 1.5, 2]);

  const [imageStyle1] = useState(
    fadeAnim1.interpolate({
      inputRange,
      outputRange,
    }),
  );

  const [imageStyle2] = useState(
    fadeAnim2.interpolate({
      inputRange,
      outputRange,
    }),
  );

  const animation1 = (time: number) => {
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: time,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const animation2 = (time: number) => {
    Animated.timing(fadeAnim2, {
      toValue: 0,
      duration: time,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const updateCounter = () => {
    cycles.current++;
    setCount(cycles.current);
  };

  useEffect(() => {
    if (reset) {
      fadeAnim1.setValue(0);
      fadeAnim2.setValue(1);
    }
  }, [reset]);

  useEffect(() => {
    if (isPlaying) {
      const time =
        playingCount === 0
          ? duration
          : currentPercentage === 1
          ? duration
          : duration * (1 - currentPercentage);
      if (cycles.current % 2 === 0) {
        animation1(time);
      } else {
        animation2(time);
      }
    }
    if (isPlaying === false) {
      fadeAnim1.stopAnimation(value => {
        setCurrentPercentage(value);
      });
      fadeAnim2.stopAnimation(value => {
        setCurrentPercentage(value);
      });
    }
  }, [fadeAnim1, cycles.current, isPlaying]);

  const handleEventAnimation1 = ({ value }) => {
    if (value === 1) {
      setCurrentPercentage(1);
      fadeAnim1.setValue(0);
      updateCounter();
    }
  };

  const handleEventAnimation2 = ({ value }) => {
    if (value === 0) {
      setCurrentPercentage(1);
      fadeAnim2.setValue(1);
      updateCounter();
    }
  };

  useEffect(() => {
    fadeAnim1.addListener(handleEventAnimation1);
    fadeAnim2.addListener(handleEventAnimation2);
  }, []);

  const transform1 = [{ scale: imageStyle1 }];
  const transform2 = [{ scale: imageStyle2 }];

  return (
    <View
      style={{
        width: radius - 50,
        height: radius - 50,
        borderRadius: (radius - 50) / 2,
        ...styles.externarCircle,
      }}>
      <View
        style={{
          width: radius - 70,
          height: radius - 70,
          borderRadius: (radius - 70) / 2,
          ...styles.internalCircle,
        }}>
        {isPlaying === null ? (
          <Animated.Image
            source={walowDark}
            style={{
              height: 50,
              transform: cycles.current % 2 === 0 ? transform1 : transform2,
            }}
            resizeMode="contain"
          />
        ) : (
          <Animated.Image
            source={walowLight}
            style={{
              height: 50,
              transform: cycles.current % 2 === 0 ? transform1 : transform2,
            }}
            resizeMode="contain"
          />
        )}
      </View>
    </View>
  );
};

export default WallowAnimation;
