/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalCellValue, InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing information functions
 */
export declare class InformationPlugin extends FunctionPlugin {
    static implementedFunctions: {
        ISERROR: {
            method: string;
        };
        ISBLANK: {
            method: string;
        };
        ISNUMBER: {
            method: string;
        };
        ISLOGICAL: {
            method: string;
        };
        ISTEXT: {
            method: string;
        };
        ISNONTEXT: {
            method: string;
        };
        COLUMNS: {
            method: string;
            isDependentOnSheetStructureChange: boolean;
            doesNotNeedArgumentsToBeComputed: boolean;
        };
        ROWS: {
            method: string;
            isDependentOnSheetStructureChange: boolean;
            doesNotNeedArgumentsToBeComputed: boolean;
        };
        INDEX: {
            method: string;
        };
    };
    /**
     * Corresponds to ISERROR(value)
     *
     * Checks whether provided value is an error
     *
     * @param ast
     * @param formulaAddress
     */
    iserror(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to ISBLANK(value)
     *
     * Checks whether provided cell reference is empty
     *
     * @param ast
     * @param formulaAddress
     */
    isblank(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to ISNUMBER(value)
     *
     * Checks whether provided cell reference is a number
     *
     * @param ast
     * @param formulaAddress
     */
    isnumber(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to ISLOGICAL(value)
     *
     * Checks whether provided cell reference is of logical type
     *
     * @param ast
     * @param formulaAddress
     */
    islogical(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to ISTEXT(value)
     *
     * Checks whether provided cell reference is of logical type
     *
     * @param ast
     * @param formulaAddress
     */
    istext(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to ISNONTEXT(value)
     *
     * Checks whether provided cell reference is of logical type
     *
     * @param ast
     * @param formulaAddress
     */
    isnontext(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to COLUMNS(range)
     *
     * Returns number of columns in provided range of cells
     *
     * @param ast
     * @param formulaAddress
     */
    columns(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to ROWS(range)
     *
     * Returns number of rows in provided range of cells
     *
     * @param ast
     * @param formulaAddress
     */
    rows(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    index(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalCellValue;
}
