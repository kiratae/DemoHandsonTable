/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class BitShiftPlugin extends FunctionPlugin {
    static implementedFunctions: {
        BITLSHIFT: {
            method: string;
        };
        BITRSHIFT: {
            method: string;
        };
    };
    bitlshift(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    bitrshift(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    private bitshiftTemplate;
}