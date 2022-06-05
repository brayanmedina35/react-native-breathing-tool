import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    position: 'absolute',
    width: 15,
  },
  externalDot: {
    width: '100%',
    height: 15,
    backgroundColor: '#dddbf2',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  internalDot: {
    width: 8,
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
  },
});

export default styles;
