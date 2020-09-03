/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class ModuloPlugin extends FunctionPlugin {
    static implementedFunctions: {
        MOD: {
            method: string;
        };
    };
    mod(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
