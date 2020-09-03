/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class AbsPlugin extends FunctionPlugin {
    static implementedFunctions: {
        ABS: {
            method: string;
        };
    };
    abs(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
