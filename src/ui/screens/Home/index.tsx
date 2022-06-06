import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BreatheTemplate } from './../../components/templates';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#BCBCC7', '#7B66FF']} style={{ flex: 1 }}>
      <BreatheTemplate />
    </LinearGradient>
  );
};

export default HomeScreen;
