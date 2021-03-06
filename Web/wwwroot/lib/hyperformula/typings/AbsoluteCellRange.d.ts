/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellRange, SimpleCellAddress, SimpleColumnAddress, SimpleRowAddress } from './Cell';
import { DependencyGraph } from './DependencyGraph';
import { CellAddress, CellRangeAst } from './parser';
import { ColumnRangeAst, RowRangeAst } from './parser/Ast';
import { Span } from './Span';
export declare const DIFFERENT_SHEETS_ERROR = "AbsoluteCellRange: Start and end are in different sheets";
export declare const WRONG_RANGE_SIZE = "AbsoluteCellRange: Wrong range size";
export declare class AbsoluteCellRange {
    readonly start: SimpleCellAddress;
    readonly end: SimpleCellAddress;
    get sheet(): number;
    static fromAst(ast: CellRangeAst | ColumnRangeAst | RowRangeAst, baseAddress: SimpleCellAddress): AbsoluteCellRange;
    static fromCellRange(x: CellRange, baseAddress: SimpleCellAddress): AbsoluteCellRange;
    static spanFrom(topLeftCorner: SimpleCellAddress, width: number, height: number): AbsoluteCellRange;
    static fromCoordinates(sheet: number, x1: number, y1: number, x2: number, y2: number): AbsoluteCellRange;
    static singleRangeFromCellAddress(cellAddress: CellAddress, baseAddress: SimpleCellAddress): AbsoluteCellRange;
    constructor(start: SimpleCellAddress, end: SimpleCellAddress);
    isFinite(): boolean;
    doesOverlap(other: AbsoluteCellRange): boolean;
    addressInRange(address: SimpleCellAddress): boolean;
    columnInRange(address: SimpleColumnAddress): boolean;
    rowInRange(address: SimpleRowAddress): boolean;
    containsRange(range: AbsoluteCellRange): boolean;
    intersectionWith(other: AbsoluteCellRange): AbsoluteCellRange | null;
    includesRow(row: number): boolean;
    includesColumn(column: number): boolean;
    shiftByRows(numberOfRows: number): void;
    expandByRows(numberOfRows: number): void;
    shiftByColumns(numberOfColumns: number): void;
    shifted(byCols: number, byRows: number): AbsoluteCellRange;
    expandByColumns(numberOfColumns: number): void;
    moveToSheet(toSheet: number): void;
    removeSpan(span: Span): void;
    protected removeRows(rowStart: number, rowEnd: number): void;
    protected removeColumns(columnStart: number, columnEnd: number): void;
    shouldBeRemoved(): boolean;
    rangeWithSameWidth(startRow: number, numberOfRows: number): AbsoluteCellRange;
    rangeWithSameHeight(startColumn: number, numberOfColumns: number): AbsoluteCellRange;
    toString(): string;
    width(): number;
    height(): number;
    size(): number;
    arrayOfAddressesInRange(): SimpleCellAddress[][];
    withStart(newStart: SimpleCellAddress): AbsoluteCellRange;
    sameDimensionsAs(other: AbsoluteCellRange): boolean;
    addresses(dependencyGraph: DependencyGraph): IterableIterator<SimpleCellAddress>;
    addressesWithDirection(right: number, bottom: number, dependencyGraph: DependencyGraph): IterableIterator<SimpleCellAddress>;
    getAddress(col: number, row: number): SimpleCellAddress;
    exceedsSheetSizeLimits(maxColumns: number, maxRows: number): boolean;
    protected effectiveEndColumn(_dependencyGraph: DependencyGraph): number;
    protected effectiveEndRow(_dependencyGraph: DependencyGraph): number;
}
export declare class AbsoluteColumnRange extends AbsoluteCellRange {
    static fromColumnRange(x: ColumnRangeAst, baseAddress: SimpleCellAddress): AbsoluteColumnRange;
    constructor(sheet: number, columnStart: number, columnEnd: number);
    shouldBeRemoved(): boolean;
    shiftByRows(_numberOfRows: number): void;
    expandByRows(_numberOfRows: number): void;
    shifted(byCols: number, _byRows: number): AbsoluteCellRange;
    protected removeRows(_rowStart: number, _rowEnd: number): void;
    rangeWithSameHeight(startColumn: number, numberOfColumns: number): AbsoluteCellRange;
    exceedsSheetSizeLimits(maxColumns: number, _maxRows: number): boolean;
    protected effectiveEndRow(dependencyGraph: DependencyGraph): number;
}
export declare class AbsoluteRowRange extends AbsoluteCellRange {
    static fromRowRange(x: RowRangeAst, baseAddress: SimpleCellAddress): AbsoluteRowRange;
    constructor(sheet: number, rowStart: number, rowEnd: number);
    shouldBeRemoved(): boolean;
    shiftByColumns(_numberOfColumns: number): void;
    expandByColumns(_numberOfColumns: number): void;
    shifted(byCols: number, byRows: number): AbsoluteCellRange;
    protected removeColumns(_columnStart: number, _columnEnd: number): void;
    rangeWithSameWidth(startRow: number, numberOfRows: number): AbsoluteCellRange;
    exceedsSheetSizeLimits(_maxColumns: number, maxRows: number): boolean;
    protected effectiveEndColumn(dependencyGraph: DependencyGraph): number;
}
