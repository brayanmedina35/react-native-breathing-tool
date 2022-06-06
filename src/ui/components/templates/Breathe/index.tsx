import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { commonsStyles } from './../../../theme';
import { BreatheIndicator } from './../../organisms';
import { ImageButton } from './../../atoms';
import { playIcon, pauseIcon } from './../../../icons';
import { Timer } from './../../molecules';
import {
  ButtonRadioGroup,
  RadioButton,
} from './../../molecules/ButtonRadioGroup/index';
import {
  BREATHE_INDICATORS,
  DEFAULT_BREATHE_INDICATOR,
} from './../../../../core/constants/indicators';

import styles from './styles';

interface IBreatheTemplate {}

const BreatheTemplate = ({}: IBreatheTemplate) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const [timeSelected, setTimeSelected] = useState(DEFAULT_BREATHE_INDICATOR);

  const initializeBreatheIndicator = () => {
    setIsPlaying(null);
  };

  const toggleBreatheIndicator = () => {
    setIsPlaying(!isPlaying);
  };

  const handlerTimeSelect = (value: string) => {
    setTimeSelected(value);
  };

  const duration = parseInt(timeSelected);
  const inhalationTime =
    duration / BREATHE_INDICATORS[timeSelected].inhalationCycles;

  return (
    <View style={commonsStyles.background}>
      <Text style={styles.title}>Breathe & relax</Text>
      <Text style={styles.subTitle}>Inhale</Text>
      <BreatheIndicator
        duration={duration}
        isPlaying={isPlaying}
        onCompleted={initializeBreatheIndicator}
        inhalationTime={inhalationTime}
      />
      <View style={styles.timerContainer}>
        <Timer duration={duration} running={isPlaying} style={styles.timer} />
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
        <RadioButton
          key={`key-1`}
          label={BREATHE_INDICATORS['60000'].label}
          value={BREATHE_INDICATORS['60000'].time}
        />
        <RadioButton
          key={`key-2`}
          label={BREATHE_INDICATORS['120000'].label}
          value={BREATHE_INDICATORS['120000'].time}
        />
        <RadioButton
          key={`key-3`}
          label={BREATHE_INDICATORS['180000'].label}
          value={BREATHE_INDICATORS['180000'].time}
        />
      </ButtonRadioGroup>
    </View>
  );
};

export default BreatheTemplate;
