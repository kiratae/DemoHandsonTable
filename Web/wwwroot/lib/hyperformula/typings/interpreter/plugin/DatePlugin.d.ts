/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing date-specific functions
 */
export declare class DatePlugin extends FunctionPlugin {
    static implementedFunctions: {
        DATE: {
            method: string;
        };
        MONTH: {
            method: string;
        };
        YEAR: {
            method: string;
        };
        TEXT: {
            method: string;
        };
        EOMONTH: {
            method: string;
        };
        DAY: {
            method: string;
        };
        DAYS: {
            method: string;
        };
    };
    /**
     * Corresponds to DATE(year, month, day)
     *
     * Converts a provided year, month and day into date
     *
     * @param ast
     * @param formulaAddress
     */
    date(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    eomonth(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    day(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    days(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to MONTH(date)
     *
     * Returns the month of the year specified by a given date
     *
     * @param ast
     * @param formulaAddress
     */
    month(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to YEAR(date)
     *
     * Returns the year specified by a given date
     *
     * @param ast
     * @param formulaAddress
     */
    year(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to TEXT(number, format)
     *
     * Tries to convert number to specified date format.
     *
     * @param ast
     * @param formulaAddress
     */
    text(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
