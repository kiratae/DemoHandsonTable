/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class RadixConversionPlugin extends FunctionPlugin {
    static implementedFunctions: {
        DEC2BIN: {
            method: string;
        };
        DEC2OCT: {
            method: string;
        };
        DEC2HEX: {
            method: string;
        };
        BIN2DEC: {
            method: string;
        };
        BIN2OCT: {
            method: string;
        };
        BIN2HEX: {
            method: string;
        };
        DECIMAL: {
            method: string;
        };
        BASE: {
            method: string;
        };
    };
    dec2bin(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    dec2oct(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    dec2hex(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    bin2dec(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    bin2oct(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    bin2hex(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    base(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    decimal(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    private bin2base;
    private dec2base;
    private getFirstArgumentAsNumberInBase;
}
