/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../../AbsoluteCellRange';
import { CellError, InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ColumnSearchStrategy } from '../../ColumnSearch/ColumnSearchStrategy';
import { Config } from '../../Config';
import { DependencyGraph } from '../../DependencyGraph';
import { Ast, ProcedureAst } from '../../parser';
import { Interpreter } from '../Interpreter';
import { InterpreterValue } from '../InterpreterValue';
export interface ImplementedFunctions {
    [formulaId: string]: FunctionMetadata;
}
export interface FunctionMetadata {
    method: string;
    isVolatile?: boolean;
    isDependentOnSheetStructureChange?: boolean;
    doesNotNeedArgumentsToBeComputed?: boolean;
}
export interface FunctionPluginDefinition {
    new (interpreter: Interpreter): FunctionPlugin;
    implementedFunctions: ImplementedFunctions;
}
export declare type PluginFunctionType = (ast: ProcedureAst, formulaAddress: SimpleCellAddress) => InternalScalarValue;
/**
 * Abstract class representing interpreter function plugin.
 * Plugin may contain multiple functions. Each function should be of type {@link PluginFunctionType} and needs to be
 * included in {@link implementedFunctions}
 */
export declare abstract class FunctionPlugin {
    /**
     * Dictionary containing functions implemented by specific plugin, along with function name translations.
     */
    static implementedFunctions: ImplementedFunctions;
    protected readonly interpreter: Interpreter;
    protected readonly dependencyGraph: DependencyGraph;
    protected readonly columnSearch: ColumnSearchStrategy;
    protected readonly config: Config;
    constructor(interpreter: Interpreter);
    protected evaluateAst(ast: Ast, formulaAddress: SimpleCellAddress): InterpreterValue;
    protected iterateOverScalarValues(asts: Ast[], formulaAddress: SimpleCellAddress): IterableIterator<InternalScalarValue>;
    protected computeListOfValuesInRange(range: AbsoluteCellRange): InternalScalarValue[];
    protected templateWithOneCoercedToNumberArgument(ast: ProcedureAst, formulaAddress: SimpleCellAddress, fn: (arg: number) => InternalScalarValue): InternalScalarValue;
    protected templateWithOneCoercedToStringArgument(ast: ProcedureAst, formulaAddress: SimpleCellAddress, fn: (arg: string) => InternalScalarValue): InternalScalarValue;
    protected validateTwoNumericArguments(ast: ProcedureAst, formulaAddress: SimpleCellAddress): [number, number] | CellError;
    protected getNumericArgument(ast: ProcedureAst, formulaAddress: SimpleCellAddress, position: number, min?: number, max?: number): number | CellError;
    protected coerceScalarToNumberOrError(arg: InternalScalarValue): number | CellError;
    private templateWithOneArgumentCoercion;
}
