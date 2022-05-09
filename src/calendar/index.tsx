import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

import Header from './header';
import Day from './day';
import {getMonthGrid, isToday, formatMonth} from '../dateUtils';
import {Date} from '../types';

const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const Calendar: React.FC = () => {
  const [currentMonth] = useState(4); // TODO enum
  const [currentYear] = useState(2022);

  const renderDayNames = () => {
    return (
      <View style={styles.week}>
        {dayNames.map(name => (
          <Text key={name}>{name}</Text>
        ))}
      </View>
    );
  };
  const renderDay = (date: Date, id: string) => {
    if (!date) return <View style={styles.emptyDay} key={id} />;

    return (
      <View style={styles.day} key={id}>
        <Day
          date={date}
          isSelected={false}
          isToday={isToday(date)}
          onPress={() => {}}
        />
      </View>
    );
  };

  const renderWeek = (days: Date[], id: string) => {
    return (
      <View style={styles.week} key={id}>
        {days.map((day, index) =>
          renderDay(day, day ? day.toISOString() : `emptyDayId${index}`),
        )}
      </View>
    );
  };

  const renderMonth = () => {
    const weeksGrid = getMonthGrid(currentMonth, currentYear);

    return (
      <View style={styles.month}>
        {weeksGrid.map((week, index) => renderWeek(week, 'uniqWeekId' + index))}
      </View>
    );
  };
  return (
    <View>
      <Header formattedMonth={formatMonth(currentMonth, currentYear)} />
      {renderDayNames()}
      {renderMonth()}
    </View>
  );
};

export default Calendar;
