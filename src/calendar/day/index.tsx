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

type DayStyle = (typeof styles.container | typeof styles.selected)[];
type DayTextStyle = (typeof styles.text |typeof styles.todayText | typeof styles.selectedText)[];

const Day: React.FC<DayProps> = ({date, isSelected, isToday, onPress}) => {
  const getStyles = () => {
    let style: DayStyle = [styles.container];
    if (isSelected) {
      style.push(styles.selected);
    }
    return style;
  };

  const getTextStyles = () => {
    let style: DayTextStyle = [styles.text];
    if (isToday) {
      style.push(styles.todayText);
    }
    if (isSelected) {
      style.push(styles.selectedText);
    }
    return style;
  };
  return (
    <TouchableOpacity style={getStyles()} onPress={() => onPress(date)}>
      <Text style={getTextStyles()}>{date.date()}</Text>
    </TouchableOpacity>
  );
};

export default Day;
