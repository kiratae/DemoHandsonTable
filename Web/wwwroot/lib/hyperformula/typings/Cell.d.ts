/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellVertex } from './DependencyGraph';
import { CellAddress } from './parser';
import { AddressWithSheet } from './parser/Address';
import { SimpleRangeValue } from './interpreter/InterpreterValue';
/**
 * Possible errors returned by our interpreter.
 */
export declare enum ErrorType {
    /** Division by zero. */
    DIV_BY_ZERO = "DIV_BY_ZERO",
    /** Unknown function name. */
    NAME = "NAME",
    VALUE = "VALUE",
    NUM = "NUM",
    NA = "NA",
    /** Cyclic dependency. */
    CYCLE = "CYCLE",
    REF = "REF",
    ERROR = "ERROR"
}
export declare const EmptyValue: unique symbol;
export declare type EmptyValueType = typeof EmptyValue;
export declare type InternalNoErrorCellValue = number | string | boolean | EmptyValueType;
export declare type InternalScalarValue = InternalNoErrorCellValue | CellError;
export declare type InternalCellValue = InternalScalarValue | SimpleRangeValue;
export declare enum CellType {
    FORMULA = "FORMULA",
    VALUE = "VALUE",
    MATRIX = "MATRIX",
    EMPTY = "EMPTY"
}
export declare const getCellType: (vertex: CellVertex | null) => CellType;
export declare enum CellValueType {
    EMPTY = "EMPTY",
    NUMBER = "NUMBER",
    STRING = "STRING",
    BOOLEAN = "BOOLEAN",
    ERROR = "ERROR"
}
export declare const CellValueTypeOrd: (arg: CellValueType) => number;
export declare const getCellValueType: (cellValue: InternalCellValue) => CellValueType;
export declare class CellError {
    readonly type: ErrorType;
    readonly message?: string | undefined;
    constructor(type: ErrorType, message?: string | undefined);
    static parsingError(): CellError;
}
export interface SimpleRowAddress {
    row: number;
    sheet: number;
}
export declare const simpleRowAddress: (sheet: number, row: number) => SimpleRowAddress;
export interface SimpleColumnAddress {
    col: number;
    sheet: number;
}
export declare const simpleColumnAddress: (sheet: number, col: number) => SimpleColumnAddress;
export interface SimpleCellAddress {
    col: number;
    row: number;
    sheet: number;
}
export declare const simpleCellAddress: (sheet: number, col: number, row: number) => SimpleCellAddress;
export declare const invalidSimpleCellAddress: (address: SimpleCellAddress) => boolean;
export declare const movedSimpleCellAddress: (address: SimpleCellAddress, toSheet: number, toRight: number, toBottom: number) => SimpleCellAddress;
export declare const absoluteSheetReference: (address: AddressWithSheet, baseAddress: SimpleCellAddress) => number;
export interface SheetCellAddress {
    col: number;
    row: number;
}
export interface CellRange {
    start: CellAddress;
    end: CellAddress;
}
