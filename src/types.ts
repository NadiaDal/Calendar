import {Moment} from 'moment/moment';

export type Nullable<T> = T | null;
export type Date = Nullable<Moment>;
