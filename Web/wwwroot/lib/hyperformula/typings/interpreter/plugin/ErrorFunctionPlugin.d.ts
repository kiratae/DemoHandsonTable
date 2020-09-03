/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class ErrorFunctionPlugin extends FunctionPlugin {
    static implementedFunctions: {
        ERF: {
            method: string;
        };
        ERFC: {
            method: string;
        };
    };
    erf(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    erfc(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
