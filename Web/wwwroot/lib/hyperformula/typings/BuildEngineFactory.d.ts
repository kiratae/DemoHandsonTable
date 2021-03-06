/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { LazilyTransformingAstService } from './LazilyTransformingAstService';
import { CellContentParser } from './CellContentParser';
import { Exporter } from './CellValue';
import { ColumnSearchStrategy } from './ColumnSearch/ColumnSearchStrategy';
import { Config, ConfigParams } from './Config';
import { CrudOperations } from './CrudOperations';
import { DependencyGraph } from './DependencyGraph';
import { Evaluator } from './Evaluator';
import { NamedExpressions } from './NamedExpressions';
import { ParserWithCaching, Unparser } from './parser';
import { Serialization } from './Serialization';
import { Statistics } from './statistics';
import { Sheet, Sheets } from './Sheet';
import { FunctionRegistry } from './interpreter/FunctionRegistry';
export declare type EngineState = {
    config: Config;
    stats: Statistics;
    dependencyGraph: DependencyGraph;
    columnSearch: ColumnSearchStrategy;
    parser: ParserWithCaching;
    unparser: Unparser;
    cellContentParser: CellContentParser;
    evaluator: Evaluator;
    lazilyTransformingAstService: LazilyTransformingAstService;
    crudOperations: CrudOperations;
    exporter: Exporter;
    namedExpressions: NamedExpressions;
    serialization: Serialization;
    functionRegistry: FunctionRegistry;
};
export declare class BuildEngineFactory {
    private static buildEngine;
    static buildFromSheets(sheets: Sheets, configInput?: Partial<ConfigParams>): EngineState;
    static buildFromSheet(sheet: Sheet, configInput?: Partial<ConfigParams>): EngineState;
    static buildEmpty(configInput?: Partial<ConfigParams>): EngineState;
    static rebuildWithConfig(config: Config, sheets: Sheets, stats: Statistics): EngineState;
}
