/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing MEDIAN function
 */
export declare class MedianPlugin extends FunctionPlugin {
    static implementedFunctions: {
        MEDIAN: {
            method: string;
        };
    };
    /**
     * Corresponds to MEDIAN(Number1, Number2, ...).
     *
     * Returns a median of given numbers.
     *
     * @param ast
     * @param formulaAddress
     */
    median(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
