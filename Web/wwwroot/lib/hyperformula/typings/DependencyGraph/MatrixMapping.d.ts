/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../AbsoluteCellRange';
import { SimpleCellAddress } from '../Cell';
import { Maybe } from '../Maybe';
import { ColumnsSpan, RowsSpan } from '../Span';
import { MatrixVertex } from './';
export declare class MatrixMapping {
    readonly matrixMapping: Map<string, MatrixVertex>;
    getMatrix(range: AbsoluteCellRange): Maybe<MatrixVertex>;
    setMatrix(range: AbsoluteCellRange, vertex: MatrixVertex): void;
    removeMatrix(range: string | AbsoluteCellRange): void;
    isFormulaMatrixInRow(sheet: number, row: number): boolean;
    isFormulaMatrixInRows(span: RowsSpan): boolean;
    isFormulaMatrixInColumn(sheet: number, column: number): boolean;
    isFormulaMatrixInColumns(span: ColumnsSpan): boolean;
    isFormulaMatrixInRange(range: AbsoluteCellRange): boolean;
    isFormulaMatrixAtAddress(address: SimpleCellAddress): boolean;
    numericMatrices(): IterableIterator<[string, MatrixVertex]>;
    numericMatricesInRows(rowsSpan: RowsSpan): IterableIterator<[string, MatrixVertex]>;
    numericMatricesInColumns(columnsSpan: ColumnsSpan): IterableIterator<[string, MatrixVertex]>;
    numericMatricesInRange(range: AbsoluteCellRange): IterableIterator<[string, MatrixVertex]>;
    truncateMatricesByRows(rowsSpan: RowsSpan): MatrixVertex[];
    truncateMatricesByColumns(columnsSpan: ColumnsSpan): MatrixVertex[];
    destroy(): void;
}
