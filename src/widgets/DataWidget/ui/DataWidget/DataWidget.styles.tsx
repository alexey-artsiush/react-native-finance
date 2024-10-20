import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  widgetContainer: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});
