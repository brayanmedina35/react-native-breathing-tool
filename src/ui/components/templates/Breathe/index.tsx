import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { commonsStyles } from './../../../theme';
import { BreatheIndicator } from './../../organisms';
import { Button } from './../../atoms';
import { playIcon, pauseIcon } from './../../../icons';

interface IBreatheTemplate {}

const BreatheTemplate = ({}: IBreatheTemplate) => {
  const [isPlaying, setIsPlaying] = useState(null);

  const initializeBreatheIndicator = () => {
    setIsPlaying(null);
  };

  const toggleBreatheIndicator = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={commonsStyles.background}>
      <BreatheIndicator
        duration={5000}
        isPlaying={isPlaying}
        onCompleted={initializeBreatheIndicator}
      />
      <View style={{ paddingTop: 30 }}>
        <Button onPress={toggleBreatheIndicator}>
          <Image
            source={isPlaying ? pauseIcon : playIcon}
            style={{ height: 50, width: 50 }}
          />
        </Button>
      </View>
      <View style={{ paddingTop: 50, flexDirection: 'row' }}>
        <Button
          onPress={() => {
            console.warn('Hola mundo');
          }}>
          <Text>1 min</Text>
        </Button>
        <Button
          onPress={() => {
            console.warn('Hola mundo');
          }}>
          <Text>2 min</Text>
        </Button>
        <Button
          onPress={() => {
            console.warn('Hola mundo');
          }}>
          <Text>3 min</Text>
        </Button>
      </View>
    </View>
  );
};

export default BreatheTemplate;
