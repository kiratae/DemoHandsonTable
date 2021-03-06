/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress, SimpleColumnAddress } from '../Cell';
import { AddressWithColumn } from './Address';
export declare enum ReferenceType {
    RELATIVE = "RELATIVE",
    ABSOLUTE = "ABSOLUTE"
}
export declare class ColumnAddress implements AddressWithColumn {
    readonly sheet: number | null;
    readonly col: number;
    readonly type: ReferenceType;
    constructor(sheet: number | null, col: number, type: ReferenceType);
    static absolute(sheet: number | null, column: number): ColumnAddress;
    static relative(sheet: number | null, column: number): ColumnAddress;
    isColumnAbsolute(): boolean;
    isColumnRelative(): boolean;
    isAbsolute(): boolean;
    moved(toSheet: number, toRight: number, _toBottom: number): ColumnAddress;
    shiftedByColumns(numberOfColumns: number): ColumnAddress;
    toSimpleColumnAddress(baseAddress: SimpleCellAddress): SimpleColumnAddress;
    shiftRelativeDimensions(toRight: number, _toBottom: number): ColumnAddress;
    shiftAbsoluteDimensions(toRight: number, _toBottom: number): ColumnAddress;
    withAbsoluteSheet(sheet: number): ColumnAddress;
    hash(withSheet: boolean): string;
    unparse(baseAddress: SimpleCellAddress): string;
    exceedsSheetSizeLimits(maxColumns: number): boolean;
}
