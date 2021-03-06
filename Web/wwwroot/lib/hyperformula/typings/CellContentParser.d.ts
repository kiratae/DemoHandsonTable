/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, ErrorType } from './Cell';
import { Config } from './Config';
import { DateTimeHelper } from './DateTimeHelper';
import { NumberLiteralHelper } from './NumberLiteralHelper';
export declare type RawCellContent = Date | string | number | boolean | null | undefined;
export declare namespace CellContent {
    class Number {
        readonly value: number;
        constructor(value: number);
    }
    class String {
        readonly value: string;
        constructor(value: string);
    }
    class Boolean {
        readonly value: boolean;
        constructor(value: boolean);
    }
    class Empty {
        static getSingletonInstance(): Empty;
        private static instance;
    }
    class Formula {
        readonly formula: string;
        constructor(formula: string);
    }
    class MatrixFormula {
        readonly formula: string;
        constructor(formula: string);
        formulaWithBraces(): string;
    }
    class Error {
        readonly value: CellError;
        constructor(errorType: ErrorType);
    }
    type Type = Number | String | Boolean | Empty | Formula | MatrixFormula | Error;
}
/**
 * Checks whether string looks like formula or not.
 *
 * @param text - formula
 */
export declare function isFormula(text: string): boolean;
export declare function isBoolean(text: string): boolean;
export declare function isMatrix(text: RawCellContent): boolean;
export declare function isError(text: string, errorMapping: Record<string, ErrorType>): boolean;
export declare class CellContentParser {
    private readonly config;
    private readonly dateHelper;
    private readonly numberLiteralsHelper;
    constructor(config: Config, dateHelper: DateTimeHelper, numberLiteralsHelper: NumberLiteralHelper);
    parse(content: RawCellContent): CellContent.Type;
}
