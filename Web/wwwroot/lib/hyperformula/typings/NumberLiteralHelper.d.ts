/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { Config } from './Config';
export declare class NumberLiteralHelper {
    private readonly config;
    private readonly numberPattern;
    private readonly allThousandSeparatorsRegex;
    constructor(config: Config);
    isNumber(input: string): boolean;
    numericStringToNumber(input: string): number;
}
