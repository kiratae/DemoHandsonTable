import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.reduce";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, EmptyValue, ErrorType } from '../Cell';
import { SimpleRangeValue } from './InterpreterValue';
/**
 * Concatenates two strings
 *
 * Implementation of concatenating strings which is used in interpreter.
 *
 * Errors are propagated.
 *
 * @param args - list of cell values to concatenate
 */

export function concatenate(args) {
  return args.reduce(function (acc, arg) {
    if (acc instanceof CellError) {
      return acc;
    } else if (arg instanceof CellError) {
      return arg;
    } else if (arg === EmptyValue) {
      return acc;
    } else if (arg instanceof SimpleRangeValue) {
      return new CellError(ErrorType.VALUE);
    } else {
      return acc.concat(arg.toString());
    }
  }, '');
}