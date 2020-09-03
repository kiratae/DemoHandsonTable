/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress, SimpleRowAddress } from '../Cell';
import { ReferenceType } from './ColumnAddress';
import { AddressWithRow } from './Address';
export declare class RowAddress implements AddressWithRow {
    readonly sheet: number | null;
    readonly row: number;
    readonly type: ReferenceType;
    private constructor();
    static absolute(sheet: number | null, row: number): RowAddress;
    static relative(sheet: number | null, row: number): RowAddress;
    isRowAbsolute(): boolean;
    isRowRelative(): boolean;
    isAbsolute(): boolean;
    moved(toSheet: number, toRight: number, toBottom: number): RowAddress;
    shiftedByRows(numberOfColumns: number): RowAddress;
    toSimpleRowAddress(baseAddress: SimpleCellAddress): SimpleRowAddress;
    shiftRelativeDimensions(toRight: number, toBottom: number): RowAddress;
    shiftAbsoluteDimensions(toRight: number, toBottom: number): RowAddress;
    withAbsoluteSheet(sheet: number): RowAddress;
    hash(withSheet: boolean): string;
    unparse(baseAddress: SimpleCellAddress): string;
    exceedsSheetSizeLimits(maxRows: number): boolean;
}
