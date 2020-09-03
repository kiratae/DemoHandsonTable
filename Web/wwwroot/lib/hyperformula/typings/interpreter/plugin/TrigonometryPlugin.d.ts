/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing trigonometric functions
 */
export declare class TrigonometryPlugin extends FunctionPlugin {
    static implementedFunctions: {
        ACOS: {
            method: string;
        };
        ASIN: {
            method: string;
        };
        COS: {
            method: string;
        };
        SIN: {
            method: string;
        };
        TAN: {
            method: string;
        };
        ATAN: {
            method: string;
        };
        ATAN2: {
            method: string;
        };
        COT: {
            method: string;
        };
    };
    /**
     * Corresponds to ACOS(value)
     *
     * Returns the arc cosine (or inverse cosine) of a number.
     *
     * @param ast
     * @param formulaAddress
     */
    acos(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    asin(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    cos(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    sin(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    tan(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    atan(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    atan2(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    ctg(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
