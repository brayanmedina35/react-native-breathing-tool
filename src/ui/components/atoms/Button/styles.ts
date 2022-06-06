import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  defaultButton: {
    backgroundColor: '#6a5cc1',
  },
  defaultLabel: {
    color: '#b0a4f9',
  },
  primaryButton: {
    backgroundColor: '#9f90f7',
  },
  primaryLabel: {
    color: '#FFFFFF',
  },
  icon: { height: 14, width: 14, marginRight: 3 },
});

export default styles;
