/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class IsEvenPlugin extends FunctionPlugin {
    static implementedFunctions: {
        ISEVEN: {
            method: string;
        };
    };
    iseven(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
