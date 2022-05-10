import moment, {Moment} from 'moment';
import {DateType, WeekType} from '../types';

const getWeeks = (arr: DateType[]): WeekType[] => {
  let weeks = [];
  let i = 0;
  let n = arr.length;

  while (i < n) {
    weeks.push(arr.slice(i, (i += 7)));
  }

  return weeks;
};

const getDaysInMonth = (month: number, year: number): Moment[] => {
  const daysInMonth = moment(new Date(year, month)).daysInMonth();
  return Array.from({length: daysInMonth}, (_, i) =>
    moment(new Date(year, month, i + 1, 0, 0, 0)),
  );
};

export const calendarGridBuilder = (
  month: number,
  year: number,
): WeekType[] => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDayWeekIndex = daysInMonth[0].isoWeekday();
  const lastDayWeekIndex = daysInMonth[daysInMonth.length - 1].isoWeekday();

  const padLeft = Array.from({length: firstDayWeekIndex - 1}, () => null);
  const padRight = Array.from({length: 7 - lastDayWeekIndex}, () => null);
  const grid = [...padLeft, ...daysInMonth, ...padRight];

  return getWeeks(grid);
};
