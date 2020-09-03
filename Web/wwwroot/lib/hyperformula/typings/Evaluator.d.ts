/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalCellValue, SimpleCellAddress } from './Cell';
import { ColumnSearchStrategy } from './ColumnSearch/ColumnSearchStrategy';
import { Config } from './Config';
import { ContentChanges } from './ContentChanges';
import { DateTimeHelper } from './DateTimeHelper';
import { DependencyGraph, Vertex } from './DependencyGraph';
import { Ast, RelativeDependency } from './parser';
import { Statistics } from './statistics';
import { NumberLiteralHelper } from './NumberLiteralHelper';
import { NamedExpressions } from './NamedExpressions';
import { FunctionRegistry } from './interpreter/FunctionRegistry';
export declare class Evaluator {
    private readonly dependencyGraph;
    private readonly columnSearch;
    private readonly config;
    private readonly stats;
    readonly dateHelper: DateTimeHelper;
    private readonly numberLiteralsHelper;
    private readonly functionRegistry;
    private readonly namedExpressions;
    private interpreter;
    constructor(dependencyGraph: DependencyGraph, columnSearch: ColumnSearchStrategy, config: Config, stats: Statistics, dateHelper: DateTimeHelper, numberLiteralsHelper: NumberLiteralHelper, functionRegistry: FunctionRegistry, namedExpressions: NamedExpressions);
    run(): void;
    partialRun(vertices: Vertex[]): ContentChanges;
    destroy(): void;
    runAndForget(ast: Ast, address: SimpleCellAddress, dependencies: RelativeDependency[]): InternalCellValue;
    /**
     * Recalculates formulas in the topological sort order
     */
    private recomputeFormulas;
    private evaluateAstToCellValue;
    private evaluateAstToRangeValue;
}
