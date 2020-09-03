/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { InternalScalarValue } from '../Cell';
import { InterpreterValue } from './InterpreterValue';
/**
 * Concatenates two strings
 *
 * Implementation of concatenating strings which is used in interpreter.
 *
 * Errors are propagated.
 *
 * @param args - list of cell values to concatenate
 */
export declare function concatenate(args: InterpreterValue[]): InternalScalarValue;
