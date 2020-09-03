/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare type BinaryOperation<T> = (left: T, right: T) => T;
export declare type MapOperation<T> = (arg: InternalScalarValue) => T;
export declare class NumericAggregationPlugin extends FunctionPlugin {
    static implementedFunctions: {
        SUM: {
            method: string;
        };
        SUMSQ: {
            method: string;
        };
        MAX: {
            method: string;
        };
        MIN: {
            method: string;
        };
        MAXA: {
            method: string;
        };
        MINA: {
            method: string;
        };
        COUNTBLANK: {
            method: string;
        };
        COUNT: {
            method: string;
        };
        COUNTA: {
            method: string;
        };
        AVERAGE: {
            method: string;
        };
        AVERAGEA: {
            method: string;
        };
    };
    /**
     * Corresponds to SUM(Number1, Number2, ...).
     *
     * Returns a sum of given numbers.
     *
     * @param ast
     * @param formulaAddress
     */
    sum(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    sumsq(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    countblank(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to MAX(Number1, Number2, ...).
     *
     * Returns a max of given numbers.
     *
     * @param ast
     * @param formulaAddress
     */
    max(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    maxa(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to MIN(Number1, Number2, ...).
     *
     * Returns a min of given numbers.
     *
     * @param ast
     * @param formulaAddress
     */
    min(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    mina(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    count(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    counta(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    average(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    averagea(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Reduces procedure arguments with given reducing function
     *
     * @param ast - cell range ast
     * @param formulaAddress - address of the cell in which formula is located
     * @param initialAccValue - initial accumulator value for reducing function
     * @param functionName - function name to use as cache key
     * @param reducingFunction - reducing function
     * @param mapFunction
     * @param coerceFunction
     * */
    private reduce;
    /**
     * Reduces list of cell values with given reducing function
     *
     * @param rangeValues - list of values to reduce
     * @param initialAccValue - initial accumulator value for reducing function
     * @param reducingFunction - reducing function
     */
    private reduceRange;
    /**
     * Performs range operation on given range
     *
     * @param ast - cell range ast
     * @param formulaAddress - address of the cell in which formula is located
     * @param initialAccValue - initial accumulator value for reducing function
     * @param functionName - function name to use as cache key
     * @param reducingFunction - reducing function
     */
    private evaluateRange;
    /**
     * Returns list of values for given range and function name
     *
     * If range is dependent on smaller range, list will contain value of smaller range for this function
     * and values of cells that are not present in smaller range
     *
     * @param functionName - function name (e.g. SUM)
     * @param range - cell range
     */
    private getRangeValues;
}
