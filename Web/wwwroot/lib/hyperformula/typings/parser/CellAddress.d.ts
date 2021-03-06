/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress, SimpleColumnAddress, SimpleRowAddress } from '../Cell';
import { AddressWithColumn, AddressWithRow } from './Address';
/** Possible kinds of cell references */
export declare enum CellReferenceType {
    /** Cell reference with both row and column relative. */
    CELL_REFERENCE_RELATIVE = "CELL_REFERENCE",
    /** Cell reference with both row and column absolute. */
    CELL_REFERENCE_ABSOLUTE = "CELL_REFERENCE_ABSOLUTE",
    /** Cell reference with absolute column and relative row. */
    CELL_REFERENCE_ABSOLUTE_COL = "CELL_REFERENCE_ABSOLUTE_COL",
    /** Cell reference with relative column and absolute row. */
    CELL_REFERENCE_ABSOLUTE_ROW = "CELL_REFERENCE_ABSOLUTE_ROW"
}
export declare class CellAddress implements AddressWithColumn, AddressWithRow {
    readonly sheet: number | null;
    readonly col: number;
    readonly row: number;
    readonly type: CellReferenceType;
    static relative(sheet: number | null, col: number, row: number): CellAddress;
    static absolute(sheet: number | null, col: number, row: number): CellAddress;
    static absoluteCol(sheet: number | null, col: number, row: number): CellAddress;
    static absoluteRow(sheet: number | null, col: number, row: number): CellAddress;
    constructor(sheet: number | null, col: number, row: number, type: CellReferenceType);
    /**
     * Converts R0C0 representation of cell address to simple object representation.
     *
     * @param baseAddress - base address for R0C0 shifts
     */
    toSimpleCellAddress(baseAddress: SimpleCellAddress): SimpleCellAddress;
    toSimpleColumnAddress(baseAddress: SimpleCellAddress): SimpleColumnAddress;
    toSimpleRowAddress(baseAddress: SimpleCellAddress): SimpleRowAddress;
    isRowAbsolute(): boolean;
    isColumnAbsolute(): boolean;
    isColumnRelative(): boolean;
    isRowRelative(): boolean;
    isAbsolute(): boolean;
    shiftedByRows(numberOfRows: number): CellAddress;
    shiftedByColumns(numberOfColumns: number): CellAddress;
    moved(toSheet: number, toRight: number, toBottom: number): CellAddress;
    withAbsoluteSheet(sheet: number): CellAddress;
    shiftRelativeDimensions(toRight: number, toBottom: number): CellAddress;
    shiftAbsoluteDimensions(toRight: number, toBottom: number): CellAddress;
    hash(withSheet: boolean): string;
    unparse(baseAddress: SimpleCellAddress): string;
    exceedsSheetSizeLimits(maxColumns: number, maxRows: number): boolean;
}
