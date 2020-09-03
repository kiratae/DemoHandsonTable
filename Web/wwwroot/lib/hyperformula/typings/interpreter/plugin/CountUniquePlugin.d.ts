/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing COUNTUNIQUE function
 */
export declare class CountUniquePlugin extends FunctionPlugin {
    static implementedFunctions: {
        COUNTUNIQUE: {
            method: string;
        };
    };
    /**
     * Corresponds to COUNTUNIQUE(Number1, Number2, ...).
     *
     * Returns number of unique numbers from arguments
     *
     * @param ast
     * @param formulaAddress
     */
    countunique(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
