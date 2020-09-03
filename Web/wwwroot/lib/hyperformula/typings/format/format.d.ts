/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue } from '../Cell';
import { Config } from '../Config';
import { DateTimeHelper, SimpleDateTime, SimpleTime } from '../DateTimeHelper';
import { Maybe } from '../Maybe';
export declare function format(value: number, formatArg: string, config: Config, dateHelper: DateTimeHelper): InternalScalarValue;
export declare function padLeft(number: number | string, size: number): string;
export declare function padRight(number: number | string, size: number): string;
export declare function defaultStringifyDuration(time: SimpleTime, formatArg: string): Maybe<string>;
export declare function defaultStringifyDateTime(dateTime: SimpleDateTime, formatArg: string): Maybe<string>;
