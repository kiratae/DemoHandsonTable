/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, ErrorType, InternalCellValue, SimpleCellAddress } from './Cell';
import { Config } from './Config';
import { CellValueChange } from './ContentChanges';
import { NamedExpressions } from './NamedExpressions';
export declare type NoErrorCellValue = number | string | boolean | null;
export declare type CellValue = NoErrorCellValue | DetailedCellError;
export declare type ExportedChange = ExportedCellChange | ExportedNamedExpressionChange;
/**
 * A list of cells which values changed after the operation, their absolute addresses and new values.
 */
export declare class ExportedCellChange {
    readonly address: SimpleCellAddress;
    readonly newValue: CellValue;
    constructor(address: SimpleCellAddress, newValue: CellValue);
    get col(): number;
    get row(): number;
    get sheet(): number;
    get value(): CellValue;
}
export declare class ExportedNamedExpressionChange {
    readonly name: string;
    readonly newValue: CellValue;
    constructor(name: string, newValue: CellValue);
}
export declare class DetailedCellError {
    readonly value: string;
    readonly type: ErrorType;
    readonly message: string;
    constructor(error: CellError, value: string);
}
export declare class Exporter {
    private readonly config;
    private readonly namedExpressions;
    constructor(config: Config, namedExpressions: NamedExpressions);
    exportChange(change: CellValueChange): ExportedChange;
    exportValue(value: InternalCellValue): CellValue;
    private detailedError;
    private cellValueRounding;
}
