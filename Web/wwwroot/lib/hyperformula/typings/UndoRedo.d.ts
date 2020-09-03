/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from './Cell';
import { ClipboardCell } from './ClipboardOperations';
import { RawCellContent } from './CellContentParser';
import { AddColumnsCommand, AddRowsCommand, ColumnsRemoval, Operations, RemoveColumnsCommand, RemoveRowsCommand, RowsRemoval } from './Operations';
import { Config } from './Config';
import { InternalNamedExpression } from './NamedExpressions';
export declare class RemoveRowsUndoEntry {
    readonly command: RemoveRowsCommand;
    readonly rowsRemovals: RowsRemoval[];
    constructor(command: RemoveRowsCommand, rowsRemovals: RowsRemoval[]);
}
export declare class MoveCellsUndoEntry {
    readonly sourceLeftCorner: SimpleCellAddress;
    readonly width: number;
    readonly height: number;
    readonly destinationLeftCorner: SimpleCellAddress;
    readonly overwrittenCellsData: [SimpleCellAddress, ClipboardCell][];
    readonly addedGlobalNamedExpressions: string[];
    readonly version: number;
    constructor(sourceLeftCorner: SimpleCellAddress, width: number, height: number, destinationLeftCorner: SimpleCellAddress, overwrittenCellsData: [SimpleCellAddress, ClipboardCell][], addedGlobalNamedExpressions: string[], version: number);
}
export declare class AddRowsUndoEntry {
    readonly command: AddRowsCommand;
    constructor(command: AddRowsCommand);
}
export declare class SetSheetContentUndoEntry {
    readonly sheetId: number;
    readonly oldSheetContent: ClipboardCell[][];
    readonly newSheetContent: RawCellContent[][];
    constructor(sheetId: number, oldSheetContent: ClipboardCell[][], newSheetContent: RawCellContent[][]);
}
export declare class MoveRowsUndoEntry {
    readonly sheet: number;
    readonly startRow: number;
    readonly numberOfRows: number;
    readonly targetRow: number;
    constructor(sheet: number, startRow: number, numberOfRows: number, targetRow: number);
}
export declare class MoveColumnsUndoEntry {
    readonly sheet: number;
    readonly startColumn: number;
    readonly numberOfColumns: number;
    readonly targetColumn: number;
    constructor(sheet: number, startColumn: number, numberOfColumns: number, targetColumn: number);
}
export declare class AddColumnsUndoEntry {
    readonly command: AddColumnsCommand;
    constructor(command: AddColumnsCommand);
}
export declare class RemoveColumnsUndoEntry {
    readonly command: RemoveColumnsCommand;
    readonly columnsRemovals: ColumnsRemoval[];
    constructor(command: RemoveColumnsCommand, columnsRemovals: ColumnsRemoval[]);
}
export declare class AddSheetUndoEntry {
    readonly sheetName: string;
    constructor(sheetName: string);
}
export declare class RemoveSheetUndoEntry {
    readonly sheetName: string;
    readonly sheetId: number;
    readonly oldSheetContent: ClipboardCell[][];
    readonly version: number;
    constructor(sheetName: string, sheetId: number, oldSheetContent: ClipboardCell[][], version: number);
}
export declare class RenameSheetUndoEntry {
    readonly sheetId: number;
    readonly oldName: string;
    readonly newName: string;
    constructor(sheetId: number, oldName: string, newName: string);
}
export declare class ClearSheetUndoEntry {
    readonly sheetId: number;
    readonly oldSheetContent: ClipboardCell[][];
    constructor(sheetId: number, oldSheetContent: ClipboardCell[][]);
}
export declare class SetCellContentsUndoEntry {
    readonly cellContents: {
        address: SimpleCellAddress;
        newContent: RawCellContent;
        oldContent: ClipboardCell;
    }[];
    constructor(cellContents: {
        address: SimpleCellAddress;
        newContent: RawCellContent;
        oldContent: ClipboardCell;
    }[]);
}
export declare class PasteUndoEntry {
    readonly targetLeftCorner: SimpleCellAddress;
    readonly oldContent: [SimpleCellAddress, ClipboardCell][];
    readonly newContent: ClipboardCell[][];
    readonly addedGlobalNamedExpressions: string[];
    constructor(targetLeftCorner: SimpleCellAddress, oldContent: [SimpleCellAddress, ClipboardCell][], newContent: ClipboardCell[][], addedGlobalNamedExpressions: string[]);
}
export declare class AddNamedExpressionUndoEntry {
    readonly name: string;
    readonly newContent: RawCellContent;
    readonly scope?: number | undefined;
    readonly options?: Record<string, string | number | boolean> | undefined;
    constructor(name: string, newContent: RawCellContent, scope?: number | undefined, options?: Record<string, string | number | boolean> | undefined);
}
export declare class RemoveNamedExpressionUndoEntry {
    readonly namedExpression: InternalNamedExpression;
    readonly content: ClipboardCell;
    readonly scope?: number | undefined;
    constructor(namedExpression: InternalNamedExpression, content: ClipboardCell, scope?: number | undefined);
}
export declare class ChangeNamedExpressionUndoEntry {
    readonly namedExpression: InternalNamedExpression;
    readonly newContent: RawCellContent;
    readonly oldContent: ClipboardCell;
    readonly scope?: number | undefined;
    readonly options?: Record<string, string | number | boolean> | undefined;
    constructor(namedExpression: InternalNamedExpression, newContent: RawCellContent, oldContent: ClipboardCell, scope?: number | undefined, options?: Record<string, string | number | boolean> | undefined);
}
export declare class BatchUndoEntry {
    readonly operations: UndoStackEntry[];
    add(operation: UndoStackEntry): void;
    reversedOperations(): Generator<UndoStackEntry, void, unknown>;
}
declare type UndoStackEntry = RemoveRowsUndoEntry | AddRowsUndoEntry | MoveRowsUndoEntry | MoveColumnsUndoEntry | AddColumnsUndoEntry | RemoveColumnsUndoEntry | SetCellContentsUndoEntry | AddSheetUndoEntry | RemoveSheetUndoEntry | RenameSheetUndoEntry | ClearSheetUndoEntry | MoveCellsUndoEntry | SetSheetContentUndoEntry | PasteUndoEntry | BatchUndoEntry | AddNamedExpressionUndoEntry | RemoveNamedExpressionUndoEntry | ChangeNamedExpressionUndoEntry;
export declare class UndoRedo {
    readonly operations: Operations;
    private undoStack;
    private redoStack;
    private readonly undoLimit;
    private batchUndoEntry?;
    constructor(config: Config, operations: Operations);
    oldData: Map<number, [SimpleCellAddress, string][]>;
    saveOperation(operation: UndoStackEntry): void;
    beginBatchMode(): void;
    private addUndoEntry;
    commitBatchMode(): void;
    storeDataForVersion(version: number, address: SimpleCellAddress, astHash: string): void;
    clearRedoStack(): void;
    clearUndoStack(): void;
    isUndoStackEmpty(): boolean;
    isRedoStackEmpty(): boolean;
    undo(): void;
    private undoEntry;
    private undoBatch;
    private undoRemoveRows;
    private undoRemoveColumns;
    private undoAddRows;
    private undoAddColumns;
    private undoSetCellContents;
    private undoPaste;
    private undoMoveRows;
    private undoMoveColumns;
    undoMoveCells(operation: MoveCellsUndoEntry): void;
    private undoAddSheet;
    private undoRemoveSheet;
    undoRenameSheet(operation: RenameSheetUndoEntry): void;
    private undoClearSheet;
    private undoSetSheetContent;
    private undoAddNamedExpression;
    private undoRemoveNamedExpression;
    private undoChangeNamedExpression;
    redo(): void;
    private redoEntry;
    private redoBatch;
    private redoRemoveRows;
    private redoMoveCells;
    private redoRemoveColumns;
    private redoPaste;
    private redoSetCellContents;
    private redoAddRows;
    private redoAddColumns;
    private redoRemoveSheet;
    private redoAddSheet;
    private redoRenameSheet;
    private redoMoveRows;
    private redoMoveColumns;
    private redoClearSheet;
    private redoSetSheetContent;
    private redoAddNamedExpression;
    private redoRemoveNamedExpression;
    private redoChangeNamedExpression;
    private restoreOldDataFromVersion;
}
export {};
