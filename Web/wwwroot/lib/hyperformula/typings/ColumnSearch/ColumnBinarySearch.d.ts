/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../AbsoluteCellRange';
import { InternalNoErrorCellValue, InternalScalarValue, SimpleCellAddress } from '../Cell';
import { Config } from '../Config';
import { DependencyGraph } from '../DependencyGraph';
import { Matrix } from '../Matrix';
import { ColumnSearchStrategy } from './ColumnSearchStrategy';
import { ColumnsSpan } from '../Span';
export declare class ColumnBinarySearch implements ColumnSearchStrategy {
    private dependencyGraph;
    private config;
    constructor(dependencyGraph: DependencyGraph, config: Config);
    add(value: InternalScalarValue | Matrix, address: SimpleCellAddress): void;
    remove(value: InternalScalarValue | Matrix | null, address: SimpleCellAddress): void;
    change(oldValue: InternalScalarValue | Matrix | null, newValue: InternalScalarValue | Matrix, address: SimpleCellAddress): void;
    addColumns(columnsSpan: ColumnsSpan): void;
    removeColumns(columnsSpan: ColumnsSpan): void;
    removeSheet(sheetId: number): void;
    moveValues(sourceRange: IterableIterator<[InternalScalarValue, SimpleCellAddress]>, toRight: number, toBottom: number, toSheet: number): void;
    removeValues(range: IterableIterator<[InternalScalarValue, SimpleCellAddress]>): void;
    destroy(): void;
    find(key: InternalNoErrorCellValue, range: AbsoluteCellRange, sorted: boolean): number;
    advancedFind(keyMatcher: (arg: InternalScalarValue) => boolean, range: AbsoluteCellRange): number;
    private computeListOfValuesInRange;
}
