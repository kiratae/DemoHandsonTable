/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class LogarithmPlugin extends FunctionPlugin {
    static implementedFunctions: {
        LOG10: {
            method: string;
        };
        LOG: {
            method: string;
        };
        LN: {
            method: string;
        };
    };
    log10(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    log(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    ln(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
