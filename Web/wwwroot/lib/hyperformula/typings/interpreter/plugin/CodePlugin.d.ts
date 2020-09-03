/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class CodePlugin extends FunctionPlugin {
    static implementedFunctions: {
        CODE: {
            method: string;
        };
    };
    code(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
