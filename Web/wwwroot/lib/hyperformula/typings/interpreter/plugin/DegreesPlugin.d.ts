/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class DegreesPlugin extends FunctionPlugin {
    static implementedFunctions: {
        DEGREES: {
            method: string;
        };
    };
    degrees(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
