/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from './AbsoluteCellRange';
import { SimpleCellAddress } from './Cell';
import { CellContentParser, RawCellContent } from './CellContentParser';
import { Operations } from './Operations';
import { ColumnSearchStrategy } from './ColumnSearch/ColumnSearchStrategy';
import { Config } from './Config';
import { ContentChanges } from './ContentChanges';
import { DependencyGraph } from './DependencyGraph';
import { InternalNamedExpression, NamedExpressionOptions, NamedExpressions } from './NamedExpressions';
import { LazilyTransformingAstService } from './LazilyTransformingAstService';
import { ParserWithCaching } from './parser';
import { Statistics } from './statistics';
import { UndoRedo } from './UndoRedo';
import { Maybe } from './Maybe';
export declare type ColumnRowIndex = [number, number];
export declare class CrudOperations {
    /** Engine config */
    private readonly config;
    /** Statistics module for benchmarking */
    private readonly stats;
    /** Dependency graph storing sheets structure */
    private readonly dependencyGraph;
    /** Column search strategy used by VLOOKUP plugin */
    private readonly columnSearch;
    /** Parser with caching */
    private readonly parser;
    /** Raw cell input parser */
    private readonly cellContentParser;
    /** Service handling postponed CRUD transformations */
    private readonly lazilyTransformingAstService;
    /** Storage for named expressions */
    private readonly namedExpressions;
    private readonly clipboardOperations;
    readonly undoRedo: UndoRedo;
    readonly operations: Operations;
    constructor(
    /** Engine config */
    config: Config, 
    /** Statistics module for benchmarking */
    stats: Statistics, 
    /** Dependency graph storing sheets structure */
    dependencyGraph: DependencyGraph, 
    /** Column search strategy used by VLOOKUP plugin */
    columnSearch: ColumnSearchStrategy, 
    /** Parser with caching */
    parser: ParserWithCaching, 
    /** Raw cell input parser */
    cellContentParser: CellContentParser, 
    /** Service handling postponed CRUD transformations */
    lazilyTransformingAstService: LazilyTransformingAstService, 
    /** Storage for named expressions */
    namedExpressions: NamedExpressions);
    addRows(sheet: number, ...indexes: ColumnRowIndex[]): void;
    removeRows(sheet: number, ...indexes: ColumnRowIndex[]): void;
    addColumns(sheet: number, ...indexes: ColumnRowIndex[]): void;
    removeColumns(sheet: number, ...indexes: ColumnRowIndex[]): void;
    moveCells(sourceLeftCorner: SimpleCellAddress, width: number, height: number, destinationLeftCorner: SimpleCellAddress): void;
    moveRows(sheet: number, startRow: number, numberOfRows: number, targetRow: number): void;
    moveColumns(sheet: number, startColumn: number, numberOfColumns: number, targetColumn: number): void;
    cut(sourceLeftCorner: SimpleCellAddress, width: number, height: number): void;
    ensureItIsPossibleToCopy(sourceLeftCorner: SimpleCellAddress, width: number, height: number): void;
    copy(sourceLeftCorner: SimpleCellAddress, width: number, height: number): void;
    paste(targetLeftCorner: SimpleCellAddress): void;
    beginUndoRedoBatchMode(): void;
    commitUndoRedoBatchMode(): void;
    isClipboardEmpty(): boolean;
    clearClipboard(): void;
    addSheet(name?: string): string;
    removeSheet(sheetName: string): void;
    renameSheet(sheetId: number, newName: string): Maybe<string>;
    clearSheet(sheetName: string): void;
    setCellContents(topLeftCornerAddress: SimpleCellAddress, cellContents: RawCellContent[][] | RawCellContent): void;
    setSheetContent(sheetName: string, values: RawCellContent[][]): void;
    undo(): void;
    redo(): void;
    addNamedExpression(expressionName: string, expression: RawCellContent, sheetScope?: string, options?: NamedExpressionOptions): void;
    changeNamedExpressionExpression(expressionName: string, sheetScope: string | undefined, newExpression: RawCellContent, options?: NamedExpressionOptions): void;
    removeNamedExpression(expressionName: string, sheetScope: string | undefined): InternalNamedExpression;
    ensureItIsPossibleToAddNamedExpression(expressionName: string, expression: RawCellContent, sheetScope?: string): void;
    ensureItIsPossibleToChangeNamedExpression(expressionName: string, expression: RawCellContent, sheetScope?: string): void;
    isItPossibleToRemoveNamedExpression(expressionName: string, sheetScope?: string): void;
    ensureItIsPossibleToAddRows(sheet: number, ...indexes: ColumnRowIndex[]): void;
    ensureItIsPossibleToRemoveRows(sheet: number, ...indexes: ColumnRowIndex[]): void;
    ensureItIsPossibleToAddColumns(sheet: number, ...indexes: ColumnRowIndex[]): void;
    ensureItIsPossibleToRemoveColumns(sheet: number, ...indexes: ColumnRowIndex[]): void;
    ensureItIsPossibleToMoveRows(sheet: number, startRow: number, numberOfRows: number, targetRow: number): void;
    ensureItIsPossibleToMoveColumns(sheet: number, startColumn: number, numberOfColumns: number, targetColumn: number): void;
    ensureItIsPossibleToAddSheet(name: string): void;
    ensureItIsPossibleToRenameSheet(sheetId: number, name: string): void;
    ensureItIsPossibleToChangeContent(address: SimpleCellAddress): void;
    ensureItIsPossibleToChangeCellContents(address: SimpleCellAddress, content: RawCellContent[][]): void;
    ensureItIsPossibleToChangeSheetContents(sheetId: number, content: RawCellContent[][]): void;
    ensureRangeInSizeLimits(range: AbsoluteCellRange): void;
    isThereSomethingToUndo(): boolean;
    isThereSomethingToRedo(): boolean;
    getAndClearContentChanges(): ContentChanges;
    ensureSheetExists(sheetName: string): void;
    scopeId(sheetName: string | undefined): number | undefined;
    private get sheetMapping();
    private ensureNamedExpressionNameIsValid;
    private ensureNamedExpressionIsValid;
}
