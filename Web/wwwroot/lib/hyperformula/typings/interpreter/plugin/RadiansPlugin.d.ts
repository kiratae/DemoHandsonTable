/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class RadiansPlugin extends FunctionPlugin {
    static implementedFunctions: {
        RADIANS: {
            method: string;
        };
    };
    radians(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
