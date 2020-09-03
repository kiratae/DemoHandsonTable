"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

exports.__esModule = true;
exports.concatenate = concatenate;

var _Cell = require("../Cell");

var _InterpreterValue = require("./InterpreterValue");

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */

/**
 * Concatenates two strings
 *
 * Implementation of concatenating strings which is used in interpreter.
 *
 * Errors are propagated.
 *
 * @param args - list of cell values to concatenate
 */
function concatenate(args) {
  return args.reduce(function (acc, arg) {
    if (acc instanceof _Cell.CellError) {
      return acc;
    } else if (arg instanceof _Cell.CellError) {
      return arg;
    } else if (arg === _Cell.EmptyValue) {
      return acc;
    } else if (arg instanceof _InterpreterValue.SimpleRangeValue) {
      return new _Cell.CellError(_Cell.ErrorType.VALUE);
    } else {
      return acc.concat(arg.toString());
    }
  }, '');
}