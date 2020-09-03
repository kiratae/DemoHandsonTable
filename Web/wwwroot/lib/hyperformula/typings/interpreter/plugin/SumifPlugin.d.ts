/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class SumifPlugin extends FunctionPlugin {
    static implementedFunctions: {
        SUMIF: {
            method: string;
        };
        COUNTIF: {
            method: string;
        };
        AVERAGEIF: {
            method: string;
        };
        SUMIFS: {
            method: string;
        };
        COUNTIFS: {
            method: string;
        };
    };
    /**
     * Corresponds to SUMIF(Range, Criterion, SumRange)
     *
     * Range is the range to which criterion is to be applied.
     * Criterion is the criteria used to choose which cells will be included in sum.
     * SumRange is the range on which adding will be performed.
     *
     * @param ast
     * @param formulaAddress
     */
    sumif(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    sumifs(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    averageif(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to COUNTIF(Range, Criterion)
     *
     * Range is the range to which criterion is to be applied.
     * Criterion is the criteria used to choose which cells will be included in sum.
     *
     * Returns number of cells on which criteria evaluates to true.
     *
     * @param ast
     * @param formulaAddress
     */
    countif(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    countifs(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
