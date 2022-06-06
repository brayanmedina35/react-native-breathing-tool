import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { commonsStyles } from './../../../theme';
import { BreatheIndicator } from './../../organisms';
import { Button, ImageButton } from './../../atoms';
import { playIcon, pauseIcon } from './../../../icons';
import { Timer } from './../../molecules';
import styles from './styles';

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
      <Text style={styles.title}>Breathe & relax</Text>
      <Text style={styles.subTitle}>Inhale</Text>
      <BreatheIndicator
        duration={10000}
        isPlaying={isPlaying}
        onCompleted={initializeBreatheIndicator}
      />
      <View style={styles.timerContainer}>
        <Timer style={styles.timer} />
      </View>
      <View style={styles.playContainer}>
        <ImageButton
          source={isPlaying ? pauseIcon : playIcon}
          onPress={toggleBreatheIndicator}
          style={styles.playImage}
        />
      </View>
      <View style={styles.timesSelectContainer}>
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
