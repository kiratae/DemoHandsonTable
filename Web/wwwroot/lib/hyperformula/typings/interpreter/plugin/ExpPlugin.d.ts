/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class ExpPlugin extends FunctionPlugin {
    static implementedFunctions: {
        EXP: {
            method: string;
        };
    };
    /**
     * Corresponds to EXP(value)
     *
     * Calculates the exponent for basis e
     *
     * @param ast
     * @param formulaAddress
     */
    exp(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
