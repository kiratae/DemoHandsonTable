/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from './Cell';
import { CellValue, Exporter, NoErrorCellValue } from './CellValue';
import { Config } from './Config';
import { DependencyGraph } from './DependencyGraph';
import { Maybe } from './Maybe';
import { Unparser } from './parser';
import { NamedExpressions } from './NamedExpressions';
export declare class Serialization {
    readonly dependencyGraph: DependencyGraph;
    readonly unparser: Unparser;
    readonly config: Config;
    readonly exporter: Exporter;
    constructor(dependencyGraph: DependencyGraph, unparser: Unparser, config: Config, exporter: Exporter);
    getCellFormula(address: SimpleCellAddress): Maybe<string>;
    getCellSerialized(address: SimpleCellAddress): NoErrorCellValue;
    getCellValue(address: SimpleCellAddress): CellValue;
    getSheetValues(sheet: number): CellValue[][];
    getSheetFormulas(sheet: number): Maybe<string>[][];
    genericSheetGetter<T>(sheet: number, getter: (address: SimpleCellAddress) => T): T[][];
    genericAllSheetsGetter<T>(sheetGetter: (sheet: number) => T): Record<string, T>;
    getSheetSerialized(sheet: number): NoErrorCellValue[][];
    getAllSheetsValues(): Record<string, CellValue[][]>;
    getAllSheetsFormulas(): Record<string, Maybe<string>[][]>;
    getAllSheetsSerialized(): Record<string, NoErrorCellValue[][]>;
    withNewConfig(newConfig: Config, namedExpressions: NamedExpressions): Serialization;
}
