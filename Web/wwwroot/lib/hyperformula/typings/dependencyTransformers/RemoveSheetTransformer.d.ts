/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { Transformer } from './Transformer';
import { ErrorType, SimpleCellAddress } from '../Cell';
import { DependencyGraph } from '../DependencyGraph';
import { CellAddress, ParserWithCaching } from '../parser';
import { ColumnAddress } from '../parser/ColumnAddress';
import { RowAddress } from '../parser/RowAddress';
export declare class RemoveSheetTransformer extends Transformer {
    readonly sheet: number;
    constructor(sheet: number);
    isIrreversible(): boolean;
    performEagerTransformations(graph: DependencyGraph, _parser: ParserWithCaching): void;
    protected fixNodeAddress(address: SimpleCellAddress): SimpleCellAddress;
    protected transformCellAddress<T extends CellAddress>(dependencyAddress: T, _formulaAddress: SimpleCellAddress): ErrorType.REF | false | T;
    protected transformCellRange(start: CellAddress, end: CellAddress, formulaAddress: SimpleCellAddress): [CellAddress, CellAddress] | ErrorType.REF | false;
    protected transformColumnRange(start: ColumnAddress, _end: ColumnAddress, _formulaAddress: SimpleCellAddress): [ColumnAddress, ColumnAddress] | ErrorType.REF | false;
    protected transformRowRange(start: RowAddress, _end: RowAddress, _formulaAddress: SimpleCellAddress): [RowAddress, RowAddress] | ErrorType.REF | false;
}
