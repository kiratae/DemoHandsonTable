/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
export declare type Span = RowsSpan | ColumnsSpan;
export declare class RowsSpan {
    readonly sheet: number;
    readonly rowStart: number;
    readonly rowEnd: number;
    get numberOfRows(): number;
    static fromNumberOfRows(sheet: number, rowStart: number, numberOfRows: number): RowsSpan;
    static fromRowStartAndEnd(sheet: number, rowStart: number, rowEnd: number): RowsSpan;
    constructor(sheet: number, rowStart: number, rowEnd: number);
    rows(): IterableIterator<number>;
    intersect(otherSpan: RowsSpan): RowsSpan | null;
    firstRow(): RowsSpan;
    get start(): number;
    get end(): number;
}
export declare class ColumnsSpan {
    readonly sheet: number;
    readonly columnStart: number;
    readonly columnEnd: number;
    get numberOfColumns(): number;
    static fromNumberOfColumns(sheet: number, columnStart: number, numberOfColumns: number): ColumnsSpan;
    static fromColumnStartAndEnd(sheet: number, columnStart: number, columnEnd: number): ColumnsSpan;
    constructor(sheet: number, columnStart: number, columnEnd: number);
    columns(): IterableIterator<number>;
    intersect(otherSpan: ColumnsSpan): ColumnsSpan | null;
    firstColumn(): ColumnsSpan;
    get start(): number;
    get end(): number;
}
