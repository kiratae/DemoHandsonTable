/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from './Cell';
import { Maybe } from './Maybe';
import { Ast } from './parser';
export interface NamedExpression {
    name: string;
    scope?: string;
    expression?: string;
    options?: NamedExpressionOptions;
}
export declare type NamedExpressionOptions = Record<string, string | number | boolean>;
export declare class InternalNamedExpression {
    displayName: string;
    readonly address: SimpleCellAddress;
    added: boolean;
    options?: Record<string, string | number | boolean> | undefined;
    constructor(displayName: string, address: SimpleCellAddress, added: boolean, options?: Record<string, string | number | boolean> | undefined);
    normalizeExpressionName(): string;
    copy(): InternalNamedExpression;
}
declare class WorkbookStore {
    private readonly mapping;
    has(expressionName: string): boolean;
    isNameAvailable(expressionName: string): boolean;
    add(namedExpression: InternalNamedExpression): void;
    get(expressionName: string): Maybe<InternalNamedExpression>;
    getExisting(expressionName: string): Maybe<InternalNamedExpression>;
    remove(expressionName: string): void;
    getAllNamedExpressions(): InternalNamedExpression[];
    private normalizeExpressionName;
}
declare class WorksheetStore {
    readonly mapping: Map<string, InternalNamedExpression>;
    add(namedExpression: InternalNamedExpression): void;
    get(expressionName: string): Maybe<InternalNamedExpression>;
    has(expressionName: string): boolean;
    private normalizeExpressionName;
    isNameAvailable(expressionName: string): boolean;
    remove(expressionName: string): void;
}
export declare class NamedExpressions {
    static SHEET_FOR_WORKBOOK_EXPRESSIONS: number;
    private nextNamedExpressionRow;
    readonly workbookStore: WorkbookStore;
    readonly worksheetStores: Map<number, WorksheetStore>;
    readonly addressCache: Map<number, InternalNamedExpression>;
    constructor();
    isNameAvailable(expressionName: string, sheetId?: number): boolean;
    namedExpressionInAddress(row: number): Maybe<InternalNamedExpression>;
    namedExpressionForScope(expressionName: string, sheetId?: number): Maybe<InternalNamedExpression>;
    nearestNamedExpression(expressionName: string, sheetId: number): Maybe<InternalNamedExpression>;
    isExpressionInScope(expressionName: string, sheetId: number): boolean;
    isNameValid(expressionName: string): boolean;
    addNamedExpression(expressionName: string, sheetId?: number, options?: NamedExpressionOptions): InternalNamedExpression;
    private worksheetStore;
    namedExpressionOrPlaceholder(expressionName: string, sheetId: number): InternalNamedExpression;
    workbookNamedExpressionOrPlaceholder(expressionName: string): InternalNamedExpression;
    remove(expressionName: string, sheetId?: number): void;
    getAllNamedExpressionsNames(): string[];
    private nextAddress;
    lookupNextAddress(expressionName: string, sheetId?: number): SimpleCellAddress;
}
export declare const doesContainRelativeReferences: (ast: Ast) => boolean;
export {};
