/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare function findNextOddNumber(arg: number): number;
export declare function findNextEvenNumber(arg: number): number;
export declare class RoundingPlugin extends FunctionPlugin {
    static implementedFunctions: {
        ROUNDUP: {
            method: string;
        };
        ROUNDDOWN: {
            method: string;
        };
        ROUND: {
            method: string;
        };
        TRUNC: {
            method: string;
        };
        INT: {
            method: string;
        };
        EVEN: {
            method: string;
        };
        ODD: {
            method: string;
        };
        CEILING: {
            method: string;
        };
    };
    roundup(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    rounddown(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    round(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    trunc(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    intFunc(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    even(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    odd(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    ceiling(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    private commonArgumentsHandling2;
}
