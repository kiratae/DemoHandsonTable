/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class MathConstantsPlugin extends FunctionPlugin {
    static implementedFunctions: {
        PI: {
            method: string;
        };
        E: {
            method: string;
        };
    };
    pi(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    e(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
