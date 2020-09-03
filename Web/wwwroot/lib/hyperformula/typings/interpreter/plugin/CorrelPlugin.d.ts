/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class CorrelPlugin extends FunctionPlugin {
    static implementedFunctions: {
        CORREL: {
            method: string;
        };
    };
    correl(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    private computePearson;
}
