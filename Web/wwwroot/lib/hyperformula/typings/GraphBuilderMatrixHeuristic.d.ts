/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from './AbsoluteCellRange';
import { SimpleCellAddress } from './Cell';
import { CellContentParser, RawCellContent } from './CellContentParser';
import { ColumnSearchStrategy } from './ColumnSearch/ColumnSearchStrategy';
import { DependencyGraph } from './DependencyGraph';
import { Matrix, MatrixSize } from './Matrix';
import { Sheets } from './Sheet';
export declare class Array2d<T> {
    static fromArray<T>(input: T[][]): Array2d<T>;
    private readonly _size;
    private readonly array;
    constructor(size: MatrixSize);
    set(x: number, y: number, value: T): void;
    get(x: number, y: number): T | null;
    size(): MatrixSize;
}
export interface PossibleMatrix {
    isMatrix: boolean;
    range: AbsoluteCellRange;
    cells: SimpleCellAddress[];
}
export declare class GraphBuilderMatrixHeuristic {
    private readonly dependencyGraph;
    private readonly columnSearch;
    private readonly threshold;
    private readonly cellContentParser;
    private mapping;
    constructor(dependencyGraph: DependencyGraph, columnSearch: ColumnSearchStrategy, threshold: number, cellContentParser: CellContentParser);
    addSheet(id: number, size: MatrixSize): void;
    add(cellAddress: SimpleCellAddress): void;
    run(sheets: Sheets): PossibleMatrix[];
    matrixFromPlainValues(range: AbsoluteCellRange, sheet: RawCellContent[][]): Matrix;
    private findMatrices;
}
export declare function findMatrices(sheet: number, input: Array2d<boolean>): IterableIterator<PossibleMatrix>;
