/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalCellValue, SimpleCellAddress } from './Cell';
import { Matrix } from './Matrix';
export interface CellValueChange {
    sheet: number;
    row: number;
    col: number;
    value: InternalCellValue;
}
export interface ChangeExporter<T> {
    exportChange: (arg: CellValueChange) => T;
}
export declare type ChangeList = CellValueChange[];
export declare class ContentChanges {
    static empty(): ContentChanges;
    private changes;
    addAll(other: ContentChanges): ContentChanges;
    addMatrixChange(newValue: Matrix, address: SimpleCellAddress): void;
    addChange(newValue: InternalCellValue, address: SimpleCellAddress): void;
    add(...change: ChangeList): void;
    exportChanges<T>(exporter: ChangeExporter<T>): T[];
    getChanges(): ChangeList;
    isEmpty(): boolean;
    private addSingleCellValue;
}
