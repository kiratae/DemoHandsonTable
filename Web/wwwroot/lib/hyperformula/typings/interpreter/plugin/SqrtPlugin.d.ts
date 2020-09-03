/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class SqrtPlugin extends FunctionPlugin {
    static implementedFunctions: {
        SQRT: {
            method: string;
        };
    };
    sqrt(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
