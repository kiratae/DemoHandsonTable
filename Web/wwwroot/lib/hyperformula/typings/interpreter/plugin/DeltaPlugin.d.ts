/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class DeltaPlugin extends FunctionPlugin {
    static implementedFunctions: {
        DELTA: {
            method: string;
        };
    };
    delta(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
