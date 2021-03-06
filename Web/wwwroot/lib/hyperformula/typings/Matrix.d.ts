/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, SimpleCellAddress } from './Cell';
import { Ast } from './parser';
export declare class MatrixSize {
    width: number;
    height: number;
    constructor(width: number, height: number);
}
export declare type MatrixSizeCheck = MatrixSize | CellError;
export declare function matrixSizeForTranspose(inputSize: MatrixSize): MatrixSize;
export declare function matrixSizeForMultiplication(leftMatrixSize: MatrixSize, rightMatrixSize: MatrixSize): MatrixSize;
export declare function matrixSizeForPoolFunction(inputMatrix: MatrixSize, windowSize: number, stride: number): MatrixSize;
export declare function checkMatrixSize(ast: Ast, formulaAddress: SimpleCellAddress): MatrixSizeCheck;
export interface IMatrix {
    size: MatrixSize;
    width(): number;
    height(): number;
    get(col: number, row: number): number | CellError;
}
export declare class NotComputedMatrix implements IMatrix {
    readonly size: MatrixSize;
    constructor(size: MatrixSize);
    width(): number;
    height(): number;
    get(col: number, row: number): number;
}
export declare class Matrix implements IMatrix {
    size: MatrixSize;
    private readonly matrix;
    constructor(matrix: number[][]);
    addRows(aboveRow: number, numberOfRows: number): void;
    addColumns(aboveColumn: number, numberOfColumns: number): void;
    removeRows(startRow: number, endRow: number): void;
    removeColumns(leftmostColumn: number, rightmostColumn: number): void;
    zeroArrays(count: number, size: number): any[][];
    get(col: number, row: number): number;
    set(col: number, row: number, value: number): void;
    width(): number;
    height(): number;
    raw(): number[][];
    generateValues(leftCorner: SimpleCellAddress): IterableIterator<[number, SimpleCellAddress]>;
    private outOfBound;
}
export declare class ErroredMatrix implements IMatrix {
    private readonly error;
    readonly size: MatrixSize;
    constructor(error: CellError, size: MatrixSize);
    get(col: number, row: number): CellError;
    width(): number;
    height(): number;
}
