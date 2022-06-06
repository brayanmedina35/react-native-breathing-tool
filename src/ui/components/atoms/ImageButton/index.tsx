import React from 'react';
import { TouchableOpacity, Image, ImageProps } from 'react-native';
import styles from './styles';

interface IButton extends ImageProps {
  onPress?: () => void;
  source: any;
}

const ImageButton = ({
  source,
  onPress: buttonHandler = () => {},
  ...imageProps
}: IButton) => {
  return (
    <TouchableOpacity onPress={buttonHandler} style={styles.button}>
      <Image {...imageProps} source={source} />
    </TouchableOpacity>
  );
};

export default ImageButton;
