import {Moment} from 'moment/moment';

export type Nullable<T> = T | null;
export type DateType = Moment | null;
export type WeekType = DateType[];

export enum Navigation {
  prev = 'prev',
  next = 'next',
}

export enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
