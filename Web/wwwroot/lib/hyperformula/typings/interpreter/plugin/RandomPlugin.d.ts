/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class RandomPlugin extends FunctionPlugin {
    static implementedFunctions: {
        RAND: {
            method: string;
            isVolatile: boolean;
        };
    };
    /**
     * Corresponds to RAND()
     *
     * Returns a pseudo-random floating-point random number
     * in the range [0,1).
     *
     * @param ast
     * @param formulaAddress
     */
    rand(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
