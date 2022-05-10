import moment, {Moment} from 'moment';

export const isToday = (day: Moment) => {
  return isSameDay(day, moment());
};

export const isSameDay = (day1: Moment | null, day2: Moment | null) => {
  if (!day1) return false;
  if (!day2) return false;

  return day1.isSame(day2, 'day');
};

export const getMonth = (date: string) => moment(date).month();
export const getYear = (date: string) => moment(date).year();

export const formatMonth = (
  month: number,
  year: number,
  monthFormat = 'MMM YY',
) => {
  return moment(new Date(year, month)).format(monthFormat);
};
