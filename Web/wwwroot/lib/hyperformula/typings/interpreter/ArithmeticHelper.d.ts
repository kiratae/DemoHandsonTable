/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, InternalCellValue, InternalNoErrorCellValue, InternalScalarValue } from '../Cell';
import { Config } from '../Config';
import { DateTimeHelper } from '../DateTimeHelper';
import { Maybe } from '../Maybe';
import { NumberLiteralHelper } from '../NumberLiteralHelper';
import { InterpreterValue, SimpleRangeValue } from './InterpreterValue';
export declare class ArithmeticHelper {
    private readonly config;
    private readonly dateTimeHelper;
    private readonly numberLiteralsHelper;
    private readonly collator;
    private readonly actualEps;
    constructor(config: Config, dateTimeHelper: DateTimeHelper, numberLiteralsHelper: NumberLiteralHelper);
    eqMatcherFunction(pattern: string): (arg: InternalCellValue) => boolean;
    neqMatcherFunction(pattern: string): (arg: InternalCellValue) => boolean;
    requiresRegex(pattern: string): boolean;
    private buildRegex;
    private normalizeString;
    compare(left: InternalNoErrorCellValue, right: InternalNoErrorCellValue): number;
    floatCmp(left: number, right: number): number;
    stringCmp(left: string, right: string): number;
    add(left: number | CellError, right: number | CellError): number | CellError;
    private addWithEpsilon;
    /**
     * Adds two numbers
     *
     * Implementation of adding which is used in interpreter.
     *
     * Errors are propagated, non-numerical values are ignored.
     *
     * @param left - left operand of addition
     * @param right - right operand of addition
     */
    nonstrictadd: (left: InternalScalarValue, right: InternalScalarValue) => number | CellError;
    /**
     * Subtracts two numbers
     *
     * Implementation of subtracting which is used in interpreter.
     *
     * Errors are propagated.
     *
     * @param left - left operand of subtraction
     * @param right - right operand of subtraction
     * @param eps - precision of comparison
     */
    subtract(left: number | CellError, right: number | CellError): number | CellError;
    coerceScalarToNumberOrError(arg: InternalScalarValue): number | CellError;
    coerceToMaybeNumber(arg: InternalNoErrorCellValue): Maybe<number>;
    coerceNonDateScalarToMaybeNumber(arg: InternalNoErrorCellValue): Maybe<number>;
}
export declare function coerceToRange(arg: InterpreterValue): SimpleRangeValue;
export declare function coerceToRangeNumbersOrError(arg: InterpreterValue): SimpleRangeValue | CellError | null;
export declare function coerceBooleanToNumber(arg: boolean): number;
export declare function coerceEmptyToValue(arg: InternalNoErrorCellValue): InternalNoErrorCellValue;
/**
 * Coerce scalar value to boolean if possible, or error if value is an error
 *
 * @param arg
 */
export declare function coerceScalarToBoolean(arg: InternalScalarValue): boolean | CellError | null;
export declare function coerceScalarToString(arg: InternalScalarValue): string | CellError;
/**
 * Multiplies two numbers
 *
 * Implementation of multiplication which is used in interpreter.
 *
 * Errors are propagated.
 *
 * @param left - left operand of multiplication
 * @param right - right operand of multiplication
 */
export declare function multiply(left: number | CellError, right: number | CellError): number | CellError;
export declare function power(left: number | CellError, right: number | CellError): number | CellError;
export declare function divide(left: number | CellError, right: number | CellError): number | CellError;
export declare function unaryminus(value: number | CellError): number | CellError;
export declare function percent(value: number | CellError): number | CellError;
/**
 * Returns max from two numbers
 *
 * Implementation of max function which is used in interpreter.
 *
 * Errors are propagated, non-numerical values are neutral.
 *
 * @param left - left operand of addition
 * @param right - right operand of addition
 */
export declare function max(left: InternalScalarValue, right: InternalScalarValue): InternalScalarValue;
export declare function maxa(left: InternalScalarValue, right: InternalScalarValue): InternalScalarValue;
/**
 * Returns min from two numbers
 *
 * Implementation of min function which is used in interpreter.
 *
 * Errors are propagated, non-numerical values are neutral.
 *
 * @param left - left operand of addition
 * @param right - right operand of addition
 */
export declare function min(left: InternalScalarValue, right: InternalScalarValue): InternalScalarValue;
export declare function mina(left: InternalScalarValue, right: InternalScalarValue): InternalScalarValue;
export declare function numberCmp(left: number, right: number): number;
export declare function isNumberOverflow(arg: number): boolean;
export declare function fixNegativeZero(arg: number): number;
