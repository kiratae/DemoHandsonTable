/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class SumprodPlugin extends FunctionPlugin {
    static implementedFunctions: {
        SUMPRODUCT: {
            method: string;
        };
    };
    sumprod(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    private reduceSumprod;
}
