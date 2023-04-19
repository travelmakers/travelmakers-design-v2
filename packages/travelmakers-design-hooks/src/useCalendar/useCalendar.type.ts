export type CalendarEvent = { startDate: Date; endDate: Date; note: string };
export type CalendarEventIndex = { [key: string]: number[] };
export interface CalendarNewEvents extends CalendarEvent {
  dates: string[];
}
export interface CalendarState {
  days: string[];
  month: string;
  year: number;
  events: { dates: string[]; startDate: Date; endDate: Date; note: string }[];
  weeks: {
    date: Date;
    dayOfWeek: string;
    dayOfYear: number;
    dayOfMonth: number;
    isToday: boolean;
    isSameMonth: boolean;
    isWeekend: boolean;
    dayIndex: number;
    weekIndex: number;
    events: any;
  }[][];
}

// ===========
const GET_NEXT_MONTH = "GET_NEXT_MONTH";
const GET_PREV_MONTH = "GET_PREV_MONTH";
const SET_DATE = "SET_DATE";
const SET_OPTIONS = "SET_OPTIONS";
const ADD_EVENT = "ADD_EVENT";
const REMOVE_EVENT = "REMOVE_EVENT";

export {
  GET_NEXT_MONTH,
  GET_PREV_MONTH,
  SET_DATE,
  ADD_EVENT,
  REMOVE_EVENT,
  SET_OPTIONS,
};
