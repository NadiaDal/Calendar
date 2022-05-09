import moment, {Moment} from 'moment';

export const getWeeks = (arr: (Moment | null)[]) => {
  let weeks = [];
  let i = 0;
  let n = arr.length;

  while (i < n) {
    weeks.push(arr.slice(i, (i += 7)));
  }

  return weeks;
};

export const getDaysInMonth = (month: number, year: number) => {
  const daysInMonth = moment(new Date(year, month)).daysInMonth();
  return Array.from({length: daysInMonth}, (_, i) =>
    moment(new Date(year, month, i + 1, 0, 0, 0)),
  );
};

export const getMonthGrid = (month: number, year: number) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDayWeekIndex = daysInMonth[0].isoWeekday();
  const lastDayWeekIndex = daysInMonth[daysInMonth.length - 1].isoWeekday();

  const padLeft = Array.from({length: firstDayWeekIndex - 1}, () => null);
  const padRight = Array.from({length: 7 - lastDayWeekIndex}, () => null);
  const grid = [...padLeft, ...daysInMonth, ...padRight];

  return getWeeks(grid);
};

export const isToday = (day: Moment) => {
  return day.date() === moment().date();
};

export const formatMonth = (
  month: number,
  year: number,
  monthFormat = 'MMM YY',
) => {
  return moment(new Date(year, month)).format(monthFormat);
};
