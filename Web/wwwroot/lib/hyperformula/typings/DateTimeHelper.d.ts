/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { Config } from './Config';
import { Maybe } from './Maybe';
export interface SimpleDate {
    year: number;
    month: number;
    day: number;
}
export interface SimpleTime {
    hours: number;
    minutes: number;
    seconds: number;
}
export declare type SimpleDateTime = SimpleDate & SimpleTime;
export declare type DateTime = SimpleTime | SimpleDate | SimpleDateTime;
export declare function instanceOfSimpleDate(obj: any): obj is SimpleDate;
export declare function instanceOfSimpleTime(obj: any): obj is SimpleTime;
export declare const maxDate: SimpleDate;
export declare class DateTimeHelper {
    private readonly config;
    private readonly minDateAboluteValue;
    private readonly maxDateValue;
    private readonly epochYearZero;
    private readonly parseDateTime;
    constructor(config: Config);
    getWithinBounds(dayNumber: number): boolean;
    dateStringToDateNumber(dateTimeString: string): Maybe<number>;
    private parseSingleFormat;
    private parseDateTimeFromFormats;
    getNullYear(): number;
    getEpochYearZero(): number;
    isValidDate(date: SimpleDate): boolean;
    dateToNumber(date: SimpleDate): number;
    timeToNumber(time: SimpleTime): number;
    numberToSimpleDate(arg: number): SimpleDate;
    numberToSimpleTime(arg: number): SimpleTime;
    numberToSimpleDateTime(arg: number): SimpleDateTime;
    private leapYearsCount;
    private dateToNumberFromZero;
    private isLeapYear;
}
export declare function endOfMonth(date: SimpleDate): SimpleDate;
export declare function offsetMonth(date: SimpleDate, offset: number): SimpleDate;
