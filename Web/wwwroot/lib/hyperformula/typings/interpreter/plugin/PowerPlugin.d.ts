/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class PowerPlugin extends FunctionPlugin {
    static implementedFunctions: {
        POWER: {
            method: string;
        };
    };
    power(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
