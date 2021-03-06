/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../AbsoluteCellRange';
import { CellError, SimpleCellAddress } from '../Cell';
import { IMatrix, Matrix } from '../Matrix';
import { Ast } from '../parser';
import { ColumnsSpan, RowsSpan } from '../Span';
export declare class MatrixVertex {
    get width(): number;
    get height(): number;
    get sheet(): number;
    static fromRange(range: AbsoluteCellRange, formula?: Ast): MatrixVertex;
    cellAddress: SimpleCellAddress;
    matrix: IMatrix;
    private formula;
    constructor(cellAddress: SimpleCellAddress, width: number, height: number, formula?: Ast);
    setCellValue(matrix: Matrix): void;
    setErrorValue(error: CellError): void;
    getCellValue(): Matrix | CellError;
    getMatrixCellValue(address: SimpleCellAddress): number | CellError;
    setMatrixCellValue(address: SimpleCellAddress, value: number): void;
    getRange(): AbsoluteCellRange;
    getAddress(): SimpleCellAddress;
    setAddress(address: SimpleCellAddress): void;
    getFormula(): Ast | null;
    setFormula(newFormula: Ast): void;
    isFormula(): boolean;
    isNumeric(): boolean;
    spansThroughSheetRows(sheet: number, startRow: number, endRow?: number): boolean;
    spansThroughSheetColumn(sheet: number, col: number, columnEnd?: number): boolean;
    addRows(sheet: number, row: number, numberOfRows: number): void;
    addColumns(sheet: number, column: number, numberOfColumns: number): void;
    removeRows(removedRows: RowsSpan): void;
    removeColumns(removedColumns: ColumnsSpan): void;
    isComputed(): boolean;
    columnsFromMatrix(): ColumnsSpan;
    rowsFromMatrix(): RowsSpan;
}
