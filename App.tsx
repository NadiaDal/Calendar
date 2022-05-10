import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Calendar from './src/calendar';
import {DateType} from './src/types';

const App = () => {
  const [date, updateDate] = useState('');

  const onDatePress = useCallback(
    (date: DateType) => updateDate(date?.format('DD MMM YYYY') ?? ''),
    [],
  );
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Calendar initialDate={'2022-05-10'} onDatePress={onDatePress} />
      </ScrollView>
      <View style={styles.previewContainer}>
        <Text>{`Selected day: ${date}`}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    margin: 20,
    paddingVertical: 12,
    backgroundColor: '#BBF5DBFF',
  },
});

export default App;
