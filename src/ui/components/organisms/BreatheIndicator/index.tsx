import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, Easing } from 'react-native';
import styles from './styles';

const inputRange = [0, 1];
var example = 0;

interface IBreatheIndicator {
  radius?: number;
  duration?: number;
  isPlaying: boolean;
  onCompleted: () => void;
}
const fadeAnimValue = { value: 0 };

const BreatheIndicator = ({
  radius = 200,
  duration = 3000,
  isPlaying = false,
  onCompleted = () => {},
}: IBreatheIndicator) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(0);
  const [currentValue, setCurrentValue] = useState(1);
  const [outputRange, setOutputRange] = useState(['0deg', '360deg']);
  const [rotate] = useState(fadeAnim.interpolate({ inputRange, outputRange }));
  const [rotateOpposit] = useState(
    fadeAnim.interpolate({ inputRange, outputRange }),
  );

  useEffect(() => {
    if (isPlaying) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: count === 0 ? duration : duration * (1 - currentValue), //0.6
        useNativeDriver: true,
        easing: Easing.linear,
      }).start();
      setOutputRange(['0deg', '-360deg']);
      setCount(count + 1);
    }
    if (isPlaying === false) {
      fadeAnim.stopAnimation(value => {
        setCurrentValue(value);
      });
    }
  }, [fadeAnim, isPlaying]);

  useEffect(() => {
    fadeAnim.addListener(({ value }) => {
      if (value === 1) {
        fadeAnim.setValue(0);
        onCompleted();
        setCount(0);
      }
    });
  }, []);

  const transform = [{ rotate: rotate }];
  const transform1 = [{ rotate: rotateOpposit }];

  return (
    <View
      style={[
        styles.container,
        { height: radius, width: radius, borderRadius: radius / 2 },
      ]}>
      <Animated.View style={[styles.item, { transform, height: radius }]}>
        <Animated.View style={[styles.externalDot, { transform: transform1 }]}>
          <Animated.View
            style={[styles.internalDot, { transform: transform1 }]}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const BreatheIndicatorWrapper = ({
  radius = 200,
  duration,
  isPlaying,
  onCompleted = () => {},
}: IBreatheIndicator) => {
  const dotRadius = 10;
  const borderWidthExternarC1 = 4;

  return (
    <View
      style={{
        width: radius - 11,
        height: radius - 11,
        borderRadius: radius,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: borderWidthExternarC1,
        borderColor: '#7f7e98',
      }}>
      <BreatheIndicator
        radius={radius}
        duration={duration}
        isPlaying={isPlaying}
        onCompleted={onCompleted}
      />
      <View
        style={{
          width: radius - 50,
          height: radius - 50,
          position: 'absolute',
          backgroundColor: '#9183ec',
          borderRadius: (radius - 50) / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: radius - 70,
            height: radius - 70,
            position: 'absolute',
            backgroundColor: '#806bfc',
            borderRadius: (radius - 70) / 2,
          }}></View>
      </View>
    </View>
  );
};

export default BreatheIndicatorWrapper;
