/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import GPU from 'gpu.js';
import { SimpleCellAddress } from '../Cell';
import { ColumnSearchStrategy } from '../ColumnSearch/ColumnSearchStrategy';
import { Config } from '../Config';
import { DateTimeHelper } from '../DateTimeHelper';
import { DependencyGraph } from '../DependencyGraph';
import { Ast } from '../parser/Ast';
import { Statistics } from '../statistics/Statistics';
import { ArithmeticHelper } from './ArithmeticHelper';
import { CriterionBuilder } from './Criterion';
import { InterpreterValue } from './InterpreterValue';
import { NumberLiteralHelper } from '../NumberLiteralHelper';
import { FunctionRegistry } from './FunctionRegistry';
import { NamedExpressions } from '../NamedExpressions';
export declare class Interpreter {
    readonly dependencyGraph: DependencyGraph;
    readonly columnSearch: ColumnSearchStrategy;
    readonly config: Config;
    readonly stats: Statistics;
    readonly dateHelper: DateTimeHelper;
    readonly numberLiteralsHelper: NumberLiteralHelper;
    readonly functionRegistry: FunctionRegistry;
    readonly namedExpressions: NamedExpressions;
    private gpu?;
    readonly arithmeticHelper: ArithmeticHelper;
    readonly criterionBuilder: CriterionBuilder;
    constructor(dependencyGraph: DependencyGraph, columnSearch: ColumnSearchStrategy, config: Config, stats: Statistics, dateHelper: DateTimeHelper, numberLiteralsHelper: NumberLiteralHelper, functionRegistry: FunctionRegistry, namedExpressions: NamedExpressions);
    /**
     * Calculates cell value from formula abstract syntax tree
     *
     * @param formula - abstract syntax tree of formula
     * @param formulaAddress - address of the cell in which formula is located
     */
    evaluateAst(ast: Ast, formulaAddress: SimpleCellAddress): InterpreterValue;
    getGpuInstance(): GPU.GPU;
    destroy(): void;
    private rangeSpansOneSheet;
    private passErrors;
}
