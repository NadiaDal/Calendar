import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Moment} from 'moment';
import styles from './styles';

interface DayProps {
  date: Moment;
  isSelected: boolean;
  isToday: boolean;
  onPress: (day: Moment) => void;
}

const Index: React.FC<DayProps> = ({date, isSelected, isToday}) => {
  const getStyles = () => {
    return styles.container;
  };

  const getTextStyles = () => {
    let style = [styles.text];
    if (isToday) {
      // @ts-ignore
      style.push(styles.todayText);
    }
    return style;
  };
  return (
    <TouchableOpacity style={getStyles()}>
      <Text style={getTextStyles()}>{date.date()}</Text>
    </TouchableOpacity>
  );
};

export default Index;
