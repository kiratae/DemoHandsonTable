/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { Statistics } from './statistics';
import { ClipboardCell } from './ClipboardOperations';
import { SimpleCellAddress } from './Cell';
import { CellContentParser, RawCellContent } from './CellContentParser';
import { ColumnsSpan, RowsSpan } from './Span';
import { ContentChanges } from './ContentChanges';
import { ColumnSearchStrategy } from './ColumnSearch/ColumnSearchStrategy';
import { LazilyTransformingAstService } from './LazilyTransformingAstService';
import { DependencyGraph } from './DependencyGraph';
import { ValueCellVertexValue } from './DependencyGraph/ValueCellVertex';
import { ParserWithCaching } from './parser';
import { ParsingError } from './parser/Ast';
import { AbsoluteCellRange } from './AbsoluteCellRange';
import { Config } from './Config';
import { InternalNamedExpression, NamedExpressionOptions, NamedExpressions } from './NamedExpressions';
import { ColumnRowIndex } from './CrudOperations';
export declare class RemoveRowsCommand {
    readonly sheet: number;
    readonly indexes: ColumnRowIndex[];
    constructor(sheet: number, indexes: ColumnRowIndex[]);
    normalizedIndexes(): ColumnRowIndex[];
    rowsSpans(): RowsSpan[];
}
export declare class AddRowsCommand {
    readonly sheet: number;
    readonly indexes: ColumnRowIndex[];
    constructor(sheet: number, indexes: ColumnRowIndex[]);
    normalizedIndexes(): ColumnRowIndex[];
    rowsSpans(): RowsSpan[];
}
export declare class AddColumnsCommand {
    readonly sheet: number;
    readonly indexes: ColumnRowIndex[];
    constructor(sheet: number, indexes: ColumnRowIndex[]);
    normalizedIndexes(): ColumnRowIndex[];
    columnsSpans(): ColumnsSpan[];
}
export declare class RemoveColumnsCommand {
    readonly sheet: number;
    readonly indexes: ColumnRowIndex[];
    constructor(sheet: number, indexes: ColumnRowIndex[]);
    normalizedIndexes(): ColumnRowIndex[];
    columnsSpans(): ColumnsSpan[];
}
export interface ChangedCell {
    address: SimpleCellAddress;
    cellType: ClipboardCell;
}
export interface RowsRemoval {
    rowFrom: number;
    rowCount: number;
    version: number;
    removedCells: ChangedCell[];
}
export interface ColumnsRemoval {
    columnFrom: number;
    columnCount: number;
    version: number;
    removedCells: ChangedCell[];
}
export interface MoveCellsResult {
    version: number;
    overwrittenCellsData: [SimpleCellAddress, ClipboardCell][];
    addedGlobalNamedExpressions: string[];
}
export declare class Operations {
    private readonly dependencyGraph;
    private readonly columnSearch;
    private readonly cellContentParser;
    private readonly parser;
    private readonly stats;
    private readonly lazilyTransformingAstService;
    private readonly namedExpressions;
    private readonly config;
    private changes;
    constructor(dependencyGraph: DependencyGraph, columnSearch: ColumnSearchStrategy, cellContentParser: CellContentParser, parser: ParserWithCaching, stats: Statistics, lazilyTransformingAstService: LazilyTransformingAstService, namedExpressions: NamedExpressions, config: Config);
    removeRows(cmd: RemoveRowsCommand): RowsRemoval[];
    addRows(cmd: AddRowsCommand): void;
    addColumns(cmd: AddColumnsCommand): void;
    removeColumns(cmd: RemoveColumnsCommand): ColumnsRemoval[];
    removeSheet(sheetName: string): number;
    clearSheet(sheetId: number): void;
    addSheet(name?: string): string;
    renameSheet(sheetId: number, newName: string): string | undefined;
    moveRows(sheet: number, startRow: number, numberOfRows: number, targetRow: number): void;
    moveColumns(sheet: number, startColumn: number, numberOfColumns: number, targetColumn: number): void;
    moveCells(sourceLeftCorner: SimpleCellAddress, width: number, height: number, destinationLeftCorner: SimpleCellAddress): MoveCellsResult;
    addNamedExpression(expressionName: string, expression: RawCellContent, sheetId?: number, options?: NamedExpressionOptions): void;
    restoreNamedExpression(namedExpression: InternalNamedExpression, content: ClipboardCell, sheetId?: number): void;
    changeNamedExpressionExpression(expressionName: string, newExpression: RawCellContent, sheetId?: number, options?: NamedExpressionOptions): [InternalNamedExpression, ClipboardCell];
    removeNamedExpression(expressionName: string, sheetId?: number): [InternalNamedExpression, ClipboardCell];
    ensureItIsPossibleToMoveCells(sourceLeftCorner: SimpleCellAddress, width: number, height: number, destinationLeftCorner: SimpleCellAddress): void;
    restoreClipboardCells(sourceSheetId: number, cells: IterableIterator<[SimpleCellAddress, ClipboardCell]>): string[];
    restoreCell(address: SimpleCellAddress, clipboardCell: ClipboardCell): void;
    /**
     * Removes multiple rows from sheet. </br>
     * Does nothing if rows are outside of effective sheet size.
     *
     * @param sheet - sheet id from which rows will be removed
     * @param rowStart - number of the first row to be deleted
     * @param rowEnd - number of the last row to be deleted
     * */
    private doRemoveRows;
    /**
     * Removes multiple columns from sheet. </br>
     * Does nothing if columns are outside of effective sheet size.
     *
     * @param sheet - sheet id from which columns will be removed
     * @param columnStart - number of the first column to be deleted
     * @param columnEnd - number of the last row to be deleted
     */
    private doRemoveColumns;
    /**
     * Add multiple rows to sheet. </br>
     * Does nothing if rows are outside of effective sheet size.
     *
     * @param sheet - sheet id in which rows will be added
     * @param row - row number above which the rows will be added
     * @param numberOfRowsToAdd - number of rows to add
     */
    private doAddRows;
    /**
     * Add multiple columns to sheet </br>
     * Does nothing if columns are outside of effective sheet size
     *
     * @param sheet - sheet id in which columns will be added
     * @param column - column number above which the columns will be added
     * @param numberOfColumns - number of columns to add
     */
    private doAddColumns;
    getClipboardCell(address: SimpleCellAddress): ClipboardCell;
    getSheetClipboardCells(sheet: number): ClipboardCell[][];
    getRangeClipboardCells(range: AbsoluteCellRange): [SimpleCellAddress, ClipboardCell][];
    setCellContent(address: SimpleCellAddress, newCellContent: RawCellContent): void;
    setSheetContent(sheetId: number, newSheetContent: RawCellContent[][]): void;
    setValueToCell(value: ValueCellVertexValue, address: SimpleCellAddress): void;
    setCellEmpty(address: SimpleCellAddress): void;
    setFormulaToCellFromCache(formulaHash: string, address: SimpleCellAddress): void;
    setParsingErrorToCell(rawInput: string, errors: ParsingError[], address: SimpleCellAddress): void;
    /**
     * Returns true if row number is outside of given sheet.
     *
     * @param row - row number
     * @param sheet - sheet id number
     */
    rowEffectivelyNotInSheet(row: number, sheet: number): boolean;
    getAndClearContentChanges(): ContentChanges;
    forceApplyPostponedTransformations(): void;
    private get sheetMapping();
    /**
     * Returns true if row number is outside of given sheet.
     *
     * @param column - row number
     * @param sheet - sheet id number
     */
    private columnEffectivelyNotInSheet;
    private adjustNamedExpressionEdges;
    private storeNamedExpressionInCell;
    private updateNamedExpressionsForMovedCells;
    private updateNamedExpressionsForTargetAddress;
    private allocateNamedExpressionAddressSpace;
    private copyOrFetchGlobalNamedExpressionVertex;
    private get addressMapping();
}
export declare function normalizeRemovedIndexes(indexes: ColumnRowIndex[]): ColumnRowIndex[];
export declare function normalizeAddedIndexes(indexes: ColumnRowIndex[]): ColumnRowIndex[];
