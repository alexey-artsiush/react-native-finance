import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',

    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonSmall: {
    padding: 10,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  buttonMedium: {
    padding: 15,
    fontSize: 26,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  buttonLarge: {
    padding: 32,
    fontSize: 32,
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  circleButton: {
    borderRadius: 9999,
  },
});
