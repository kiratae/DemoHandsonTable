/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../AbsoluteCellRange';
import { InternalCellValue, InternalNoErrorCellValue, InternalScalarValue, SimpleCellAddress } from '../Cell';
import { Config } from '../Config';
import { DependencyGraph } from '../DependencyGraph';
import { Matrix } from '../Matrix';
import { ColumnsSpan } from '../Span';
import { Statistics } from '../statistics';
import { ColumnSearchStrategy } from './ColumnSearchStrategy';
declare type ColumnMap = Map<InternalCellValue, ValueIndex>;
interface ValueIndex {
    version: number;
    index: number[];
}
export declare class ColumnIndex implements ColumnSearchStrategy {
    private readonly dependencyGraph;
    private readonly config;
    private readonly stats;
    private readonly index;
    private readonly transformingService;
    private readonly binarySearchStrategy;
    constructor(dependencyGraph: DependencyGraph, config: Config, stats: Statistics);
    add(value: InternalCellValue | Matrix, address: SimpleCellAddress): void;
    remove(value: InternalCellValue | Matrix | null, address: SimpleCellAddress): void;
    change(oldValue: InternalCellValue | Matrix | null, newValue: InternalScalarValue | Matrix, address: SimpleCellAddress): void;
    moveValues(sourceRange: IterableIterator<[InternalScalarValue, SimpleCellAddress]>, toRight: number, toBottom: number, toSheet: number): void;
    removeValues(range: IterableIterator<[InternalScalarValue, SimpleCellAddress]>): void;
    find(key: InternalNoErrorCellValue, range: AbsoluteCellRange, sorted: boolean): number;
    advancedFind(keyMatcher: (arg: InternalCellValue) => boolean, range: AbsoluteCellRange): number;
    addColumns(columnsSpan: ColumnsSpan): void;
    removeColumns(columnsSpan: ColumnsSpan): void;
    removeSheet(sheetId: number): void;
    getColumnMap(sheet: number, col: number): ColumnMap;
    getValueIndex(sheet: number, col: number, value: InternalCellValue): ValueIndex;
    ensureRecentData(sheet: number, col: number, value: InternalCellValue): void;
    destroy(): void;
    private addSingleCellValue;
    private removeSingleValue;
    private addRows;
    private removeRows;
    private addValue;
    private removeRowsFromValues;
    private shiftRows;
}
export declare function upperBound(values: number[], key: number): number;
export declare function lowerBound(values: number[], key: number): number;
export {};
