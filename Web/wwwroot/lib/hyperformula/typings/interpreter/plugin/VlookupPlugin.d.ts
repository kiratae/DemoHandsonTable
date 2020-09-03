/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalCellValue, InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { FunctionPlugin } from './FunctionPlugin';
export declare class VlookupPlugin extends FunctionPlugin {
    static implementedFunctions: {
        VLOOKUP: {
            method: string;
        };
        MATCH: {
            method: string;
        };
    };
    /**
     * Corresponds to VLOOKUP(key, range, index, [sorted])
     *
     * @param ast
     * @param formulaAddress
     */
    vlookup(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalCellValue;
    match(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    private searchInRange;
    private doVlookup;
}
