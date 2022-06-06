import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { commonsStyles } from './../../../theme';
import { BreatheIndicator } from './../../organisms';
import { Button, ImageButton } from './../../atoms';
import { playIcon, pauseIcon } from './../../../icons';
import { Timer } from './../../molecules';
import {
  ButtonRadioGroup,
  RadioButton,
} from './../../molecules/ButtonRadioGroup/index';
import styles from './styles';

interface IBreatheTemplate {}

const BreatheTemplate = ({}: IBreatheTemplate) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const [timeSelected, setTimeSelected] = useState('60000');

  const initializeBreatheIndicator = () => {
    setIsPlaying(null);
  };

  const toggleBreatheIndicator = () => {
    setIsPlaying(!isPlaying);
  };

  const handlerTimeSelect = (value: string) => {
    setTimeSelected(value);
  };

  return (
    <View style={commonsStyles.background}>
      <Text style={styles.title}>Breathe & relax</Text>
      <Text style={styles.subTitle}>Inhale</Text>
      <BreatheIndicator
        duration={parseInt(timeSelected)}
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
      <ButtonRadioGroup
        defaultValue={timeSelected}
        onSelect={handlerTimeSelect}>
        <RadioButton key={`key-1`} label={'1 min'} value="60000" />
        <RadioButton key={`key-2`} label={'2 min'} value="120000" />
        <RadioButton key={`key-3`} label={'3 min'} value="180000" />
      </ButtonRadioGroup>
    </View>
  );
};

export default BreatheTemplate;
