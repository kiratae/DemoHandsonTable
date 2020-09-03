/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class IsOddPlugin extends FunctionPlugin {
    static implementedFunctions: {
        ISODD: {
            method: string;
        };
    };
    isodd(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
