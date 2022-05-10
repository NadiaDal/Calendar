import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#0d94c9',
    borderRadius: 8,
  },
  today: {
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  todayText: {
    color: '#0d94c9',
  },
  selectedText: {
    color: '#fff',
  },
});

export default styles;
