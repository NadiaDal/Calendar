import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import Header from './header';
import Day from './day';
import styles from './styles';

import {formatMonth, getMonth, getYear, isSameDay, isToday} from '../dateUtils';
import {DateType, Months, Navigation} from '../types';
import {dayNames} from './constants';
import {calendarGridBuilder} from './calendarBuilder';

interface CalendarProps {
  initialDate: string;
  onDatePress?: (date: DateType) => void;
}
interface CurrentProps {
  month: number;
  year: number;
}

const Calendar: React.FC<CalendarProps> = ({initialDate, onDatePress}) => {
  const [current, updateCurrent] = useState<CurrentProps>({
    month: getMonth(initialDate),
    year: getYear(initialDate),
  });

  const [selectedDate, updateSelectedDate] = useState<DateType>(null);

  const addMonth = ({month, year}: CurrentProps) => {
    if (month === Months.December) {
      return {month: Months.January, year: year + 1};
    }
    return {month: month + 1, year};
  };

  const subtractMonth = ({month, year}: CurrentProps) => {
    if (month === Months.January) {
      return {month: Months.December, year: year - 1};
    }
    return {month: month - 1, year};
  };

  const navigate = useCallback((navigation: Navigation) => {
    updateCurrent(current => {
      switch (navigation) {
        case Navigation.next:
          return addMonth(current);
        case Navigation.prev:
          return subtractMonth(current);
      }
    });
  }, []);

  useEffect(() => {
    updateCurrent(() => ({
      month: getMonth(initialDate),
      year: getYear(initialDate),
    }));
  }, [initialDate]);

  useEffect(() => {
    onDatePress?.(selectedDate);
  }, [selectedDate]);

  const renderDay = (id: string, date: DateType) => {
    if (!date) return <View key={id} style={styles.emptyDay} />;

    return (
      <View key={id} style={styles.day}>
        <Day
          date={date}
          isSelected={isSameDay(date, selectedDate)}
          isToday={isToday(date)}
          onPress={updateSelectedDate}
        />
      </View>
    );
  };

  const renderWeek = (days: DateType[], id: string) => {
    return (
      <View style={styles.week} key={id}>
        {days.map((day, index) =>
          renderDay(day ? day.toISOString() : `emptyDayId${index}`, day),
        )}
      </View>
    );
  };

  const renderMonth = () => {
    const weeksGrid = calendarGridBuilder(current.month, current.year);

    return (
      <View style={styles.month}>
        {weeksGrid.map((week, index) => renderWeek(week, `uniqWeekId${index}`))}
      </View>
    );
  };
  return (
    <View>
      <Header
        formattedMonth={formatMonth(current.month, current.year)}
        onPress={navigate}
      />
      <View style={styles.week}>
        {dayNames.map(name => (
          <Text key={name}>{name}</Text>
        ))}
      </View>
      {renderMonth()}
    </View>
  );
};

export default Calendar;
