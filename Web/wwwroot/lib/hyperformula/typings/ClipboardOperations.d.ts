/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from './Cell';
import { Operations } from './Operations';
import { DependencyGraph } from './DependencyGraph';
import { ValueCellVertexValue } from './DependencyGraph/ValueCellVertex';
import { LazilyTransformingAstService } from './LazilyTransformingAstService';
import { ParserWithCaching } from './parser';
import { ParsingError } from './parser/Ast';
import { Config } from './Config';
export declare type ClipboardCell = ClipboardCellValue | ClipboardCellFormula | ClipboardCellEmpty | ClipboardCellParsingError;
declare enum ClipboardOperationType {
    COPY = 0,
    CUT = 1
}
export declare enum ClipboardCellType {
    VALUE = 0,
    EMPTY = 1,
    FORMULA = 2,
    PARSING_ERROR = 3
}
export interface ClipboardCellValue {
    type: ClipboardCellType.VALUE;
    value: ValueCellVertexValue;
}
export interface ClipboardCellEmpty {
    type: ClipboardCellType.EMPTY;
}
export interface ClipboardCellFormula {
    type: ClipboardCellType.FORMULA;
    hash: string;
}
export interface ClipboardCellParsingError {
    type: ClipboardCellType.PARSING_ERROR;
    rawInput: string;
    errors: ParsingError[];
}
declare class Clipboard {
    readonly sourceLeftCorner: SimpleCellAddress;
    readonly width: number;
    readonly height: number;
    readonly type: ClipboardOperationType;
    readonly content?: ClipboardCell[][] | undefined;
    constructor(sourceLeftCorner: SimpleCellAddress, width: number, height: number, type: ClipboardOperationType, content?: ClipboardCell[][] | undefined);
    getContent(leftCorner: SimpleCellAddress): IterableIterator<[SimpleCellAddress, ClipboardCell]>;
}
export declare class ClipboardOperations {
    private readonly dependencyGraph;
    private readonly operations;
    private readonly parser;
    private readonly lazilyTransformingAstService;
    private readonly config;
    clipboard?: Clipboard;
    constructor(dependencyGraph: DependencyGraph, operations: Operations, parser: ParserWithCaching, lazilyTransformingAstService: LazilyTransformingAstService, config: Config);
    cut(leftCorner: SimpleCellAddress, width: number, height: number): void;
    copy(leftCorner: SimpleCellAddress, width: number, height: number): void;
    abortCut(): void;
    clear(): void;
    ensureItIsPossibleToCopyPaste(destinationLeftCorner: SimpleCellAddress): void;
    isCutClipboard(): boolean;
    isCopyClipboard(): boolean;
}
export {};
