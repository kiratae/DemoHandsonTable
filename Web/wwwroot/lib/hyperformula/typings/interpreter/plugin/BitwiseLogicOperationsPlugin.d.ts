/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class BitwiseLogicOperationsPlugin extends FunctionPlugin {
    static implementedFunctions: {
        BITAND: {
            method: string;
        };
        BITOR: {
            method: string;
        };
        BITXOR: {
            method: string;
        };
    };
    bitand(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    bitor(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    bitxor(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    private templateWithTwoPositiveIntegerArguments;
}
