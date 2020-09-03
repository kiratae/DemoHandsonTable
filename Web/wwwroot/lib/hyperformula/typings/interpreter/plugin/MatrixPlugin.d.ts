/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { SimpleRangeValue } from '../InterpreterValue';
import { FunctionPlugin } from './FunctionPlugin';
export declare class MatrixPlugin extends FunctionPlugin {
    static implementedFunctions: {
        MMULT: {
            method: string;
        };
        TRANSPOSE: {
            method: string;
        };
        MAXPOOL: {
            method: string;
        };
        MEDIANPOOL: {
            method: string;
        };
    };
    mmult(ast: ProcedureAst, formulaAddress: SimpleCellAddress): SimpleRangeValue | CellError;
    maxpool(ast: ProcedureAst, formulaAddress: SimpleCellAddress): SimpleRangeValue | CellError;
    medianpool(ast: ProcedureAst, formulaAddress: SimpleCellAddress): SimpleRangeValue | CellError;
    transpose(ast: ProcedureAst, formulaAddress: SimpleCellAddress): SimpleRangeValue | CellError;
}
