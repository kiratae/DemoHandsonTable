/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { DateTime, SimpleDate, SimpleTime } from './DateTimeHelper';
import { Maybe } from './Maybe';
export declare function defaultParseToDateTime(dateTimeString: string, dateFormat: string, timeFormat: string): Maybe<DateTime>;
export declare const secondsExtendedRegexp: RegExp;
export declare function defaultParseToTime(timeItems: string[], timeFormat: string): Maybe<SimpleTime>;
export declare function defaultParseToDate(dateItems: string[], dateFormat: string): Maybe<SimpleDate>;
