/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { SimpleCellAddress } from './Cell';
import { CellContentParser } from './CellContentParser';
import { CellDependency } from './CellDependency';
import { ColumnSearchStrategy } from './ColumnSearch/ColumnSearchStrategy';
import { Config } from './Config';
import { DependencyGraph, MatrixVertex, ValueCellVertex, Vertex } from './DependencyGraph';
import { ParserWithCaching, ProcedureAst } from './parser';
import { Statistics } from './statistics';
import { Sheets } from './Sheet';
export declare type Dependencies = Map<Vertex, CellDependency[]>;
/**
 * Service building the graph and mappings.
 */
export declare class GraphBuilder {
    private readonly dependencyGraph;
    private readonly columnSearch;
    private readonly parser;
    private readonly cellContentParser;
    private readonly config;
    private readonly stats;
    private buildStrategy;
    /**
     * Configures the building service.
     *
     * @param graph - graph instance in which we want to add vertices and edges
     * @param addressMapping - mapping from addresses to vertices
     * @param rangeMapping - mapping from ranges to range vertices
     * @param stats - dependency tracking building performance
     * @param config - configuration of the sheet
     */
    constructor(dependencyGraph: DependencyGraph, columnSearch: ColumnSearchStrategy, parser: ParserWithCaching, cellContentParser: CellContentParser, config: Config, stats: Statistics);
    /**
     * Builds graph.
     *
     * @param sheet - two-dimensional array representation of sheet
     */
    buildGraph(sheets: Sheets): void;
    private processDependencies;
}
export interface GraphBuilderStrategy {
    run(sheets: Sheets): Dependencies;
}
export declare class SimpleStrategy implements GraphBuilderStrategy {
    private readonly dependencyGraph;
    private readonly columnIndex;
    private readonly parser;
    private readonly stats;
    private readonly cellContentParser;
    constructor(dependencyGraph: DependencyGraph, columnIndex: ColumnSearchStrategy, parser: ParserWithCaching, stats: Statistics, cellContentParser: CellContentParser);
    run(sheets: Sheets): Dependencies;
}
export declare class MatrixDetectionStrategy implements GraphBuilderStrategy {
    private readonly dependencyGraph;
    private readonly columnSearch;
    private readonly parser;
    private readonly stats;
    private readonly threshold;
    private readonly cellContentParser;
    constructor(dependencyGraph: DependencyGraph, columnSearch: ColumnSearchStrategy, parser: ParserWithCaching, stats: Statistics, threshold: number, cellContentParser: CellContentParser);
    run(sheets: Sheets): Dependencies;
}
export declare function buildMatrixVertex(ast: ProcedureAst, formulaAddress: SimpleCellAddress): MatrixVertex | ValueCellVertex;
