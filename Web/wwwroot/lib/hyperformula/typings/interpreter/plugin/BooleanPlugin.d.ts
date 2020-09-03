/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue, SimpleCellAddress } from '../../Cell';
import { ProcedureAst } from '../../parser';
import { InterpreterValue } from '../InterpreterValue';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing boolean functions
 */
export declare class BooleanPlugin extends FunctionPlugin {
    static implementedFunctions: {
        TRUE: {
            method: string;
        };
        FALSE: {
            method: string;
        };
        IF: {
            method: string;
        };
        AND: {
            method: string;
        };
        OR: {
            method: string;
        };
        XOR: {
            method: string;
        };
        NOT: {
            method: string;
        };
        SWITCH: {
            method: string;
        };
        IFERROR: {
            method: string;
        };
        IFNA: {
            method: string;
        };
        CHOOSE: {
            method: string;
        };
    };
    /**
     * Corresponds to TRUE()
     *
     * Returns the logical true
     *
     * @param ast
     * @param formulaAddress
     */
    literalTrue(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to FALSE()
     *
     * Returns the logical false
     *
     * @param ast
     * @param formulaAddress
     */
    literalFalse(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to IF(expression, value_if_true, value_if_false)
     *
     * Returns value specified as second argument if expression is true and third argument if expression is false
     *
     * @param ast
     * @param formulaAddress
     */
    conditionalIf(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InterpreterValue;
    /**
     * Corresponds to AND(expression1, [expression2, ...])
     *
     * Returns true if all of the provided arguments are logically true, and false if any of it is logically false
     *
     * @param ast
     * @param formulaAddress
     */
    and(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    /**
     * Corresponds to OR(expression1, [expression2, ...])
     *
     * Returns true if any of the provided arguments are logically true, and false otherwise
     *
     * @param ast
     * @param formulaAddress
     */
    or(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    not(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    xor(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    switch(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    iferror(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    ifna(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
    choose(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalScalarValue;
}
