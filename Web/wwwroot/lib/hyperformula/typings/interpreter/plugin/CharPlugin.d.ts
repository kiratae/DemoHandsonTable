/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class CharPlugin extends FunctionPlugin {
    static implementedFunctions: {
        CHAR: {
            method: string;
        };
    };
    char(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
