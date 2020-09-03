/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing text-specific functions
 */
export declare class TextPlugin extends FunctionPlugin {
    static implementedFunctions: {
        CONCATENATE: {
            method: string;
        };
        SPLIT: {
            method: string;
        };
    };
    /**
     * Corresponds to CONCATENATE(value1, [value2, ...])
     *
     * Concatenates provided arguments to one string.
     *
     * @param args
     * @param formulaAddress
     */
    concatenate(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to SPLIT(string, index)
     *
     * Splits provided string using space separator and returns chunk at zero-based position specified by second argument
     *
     * @param ast
     * @param formulaAddress
     */
    split(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
