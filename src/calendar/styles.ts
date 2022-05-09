import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  day: {
    flex: 1,
    alignItems: 'center',
  },
  emptyDay: {
    flex: 1,
  },
  week: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  month: {},
});

export default styles;
