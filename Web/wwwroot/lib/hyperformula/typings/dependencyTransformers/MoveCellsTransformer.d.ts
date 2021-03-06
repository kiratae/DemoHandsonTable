/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { Transformer } from './Transformer';
import { Ast, CellAddress } from '../parser';
import { ErrorType, SimpleCellAddress } from '../Cell';
import { ColumnAddress } from '../parser/ColumnAddress';
import { RowAddress } from '../parser/RowAddress';
import { AbsoluteCellRange } from '../AbsoluteCellRange';
export declare class MoveCellsTransformer extends Transformer {
    readonly sourceRange: AbsoluteCellRange;
    readonly toRight: number;
    readonly toBottom: number;
    readonly toSheet: number;
    private dependentFormulaTransformer;
    constructor(sourceRange: AbsoluteCellRange, toRight: number, toBottom: number, toSheet: number);
    isIrreversible(): boolean;
    get sheet(): number;
    transformSingleAst(ast: Ast, address: SimpleCellAddress): [Ast, SimpleCellAddress];
    protected fixNodeAddress(address: SimpleCellAddress): SimpleCellAddress;
    protected transformCellAddress<T extends CellAddress>(dependencyAddress: T, formulaAddress: SimpleCellAddress): ErrorType.REF | false | T;
    protected transformCellRange(start: CellAddress, end: CellAddress, formulaAddress: SimpleCellAddress): [CellAddress, CellAddress] | ErrorType.REF | false;
    protected transformColumnRange(start: ColumnAddress, end: ColumnAddress, formulaAddress: SimpleCellAddress): [ColumnAddress, ColumnAddress] | ErrorType.REF | false;
    protected transformRowRange(start: RowAddress, end: RowAddress, formulaAddress: SimpleCellAddress): [RowAddress, RowAddress] | ErrorType.REF | false;
    private transformAddress;
    private transformRange;
}
