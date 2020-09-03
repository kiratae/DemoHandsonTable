"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.absoluteSheetReference = exports.movedSimpleCellAddress = exports.invalidSimpleCellAddress = exports.simpleCellAddress = exports.simpleColumnAddress = exports.simpleRowAddress = exports.CellError = exports.getCellValueType = exports.CellValueTypeOrd = exports.CellValueType = exports.getCellType = exports.CellType = exports.EmptyValue = exports.ErrorType = void 0;

var _DependencyGraph = require("./DependencyGraph");

var _InterpreterValue = require("./interpreter/InterpreterValue");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Possible errors returned by our interpreter.
 */
var ErrorType;
exports.ErrorType = ErrorType;

(function (ErrorType) {
  /** Division by zero. */
  ErrorType["DIV_BY_ZERO"] = "DIV_BY_ZERO";
  /** Unknown function name. */

  ErrorType["NAME"] = "NAME";
  ErrorType["VALUE"] = "VALUE";
  ErrorType["NUM"] = "NUM";
  ErrorType["NA"] = "NA";
  /** Cyclic dependency. */

  ErrorType["CYCLE"] = "CYCLE";
  /* Wrong address reference. */

  ErrorType["REF"] = "REF";
  /* Generic error */

  ErrorType["ERROR"] = "ERROR";
})(ErrorType || (exports.ErrorType = ErrorType = {}));

var EmptyValue = Symbol('Empty value');
exports.EmptyValue = EmptyValue;
var CellType;
exports.CellType = CellType;

(function (CellType) {
  CellType["FORMULA"] = "FORMULA";
  CellType["VALUE"] = "VALUE";
  CellType["MATRIX"] = "MATRIX";
  CellType["EMPTY"] = "EMPTY";
})(CellType || (exports.CellType = CellType = {}));

var getCellType = function getCellType(vertex) {
  if (vertex instanceof _DependencyGraph.FormulaCellVertex || vertex instanceof _DependencyGraph.ParsingErrorVertex) {
    return CellType.FORMULA;
  }

  if (vertex instanceof _DependencyGraph.ValueCellVertex || vertex instanceof _DependencyGraph.MatrixVertex && vertex.isNumeric()) {
    return CellType.VALUE;
  }

  if (vertex instanceof _DependencyGraph.MatrixVertex && vertex.isFormula()) {
    return CellType.MATRIX;
  }

  return CellType.EMPTY;
};

exports.getCellType = getCellType;
var CellValueType;
exports.CellValueType = CellValueType;

(function (CellValueType) {
  CellValueType["EMPTY"] = "EMPTY";
  CellValueType["NUMBER"] = "NUMBER";
  CellValueType["STRING"] = "STRING";
  CellValueType["BOOLEAN"] = "BOOLEAN";
  CellValueType["ERROR"] = "ERROR";
})(CellValueType || (exports.CellValueType = CellValueType = {}));

var CellValueTypeOrd = function CellValueTypeOrd(arg) {
  switch (arg) {
    case CellValueType.EMPTY:
      return 0;

    case CellValueType.NUMBER:
      return 1;

    case CellValueType.STRING:
      return 2;

    case CellValueType.BOOLEAN:
      return 3;

    case CellValueType.ERROR:
      return 4;
  }
};

exports.CellValueTypeOrd = CellValueTypeOrd;

var getCellValueType = function getCellValueType(cellValue) {
  if (cellValue === EmptyValue) {
    return CellValueType.EMPTY;
  }

  if (cellValue instanceof CellError || cellValue instanceof _InterpreterValue.SimpleRangeValue) {
    return CellValueType.ERROR;
  }

  switch (_typeof(cellValue)) {
    case 'string':
      return CellValueType.STRING;

    case 'number':
      return CellValueType.NUMBER;

    case 'boolean':
      return CellValueType.BOOLEAN;
  }

  throw new Error('Cell value not computed');
};

exports.getCellValueType = getCellValueType;

var CellError = /*#__PURE__*/function () {
  function CellError(type, message) {
    _classCallCheck(this, CellError);

    this.type = type;
    this.message = message;
  }

  _createClass(CellError, null, [{
    key: "parsingError",
    value: function parsingError() {
      return new CellError(ErrorType.ERROR, 'Parsing error');
    }
  }]);

  return CellError;
}();

exports.CellError = CellError;

var simpleRowAddress = function simpleRowAddress(sheet, row) {
  return {
    sheet: sheet,
    row: row
  };
};

exports.simpleRowAddress = simpleRowAddress;

var simpleColumnAddress = function simpleColumnAddress(sheet, col) {
  return {
    sheet: sheet,
    col: col
  };
};

exports.simpleColumnAddress = simpleColumnAddress;

var simpleCellAddress = function simpleCellAddress(sheet, col, row) {
  return {
    sheet: sheet,
    col: col,
    row: row
  };
};

exports.simpleCellAddress = simpleCellAddress;

var invalidSimpleCellAddress = function invalidSimpleCellAddress(address) {
  return address.col < 0 || address.row < 0;
};

exports.invalidSimpleCellAddress = invalidSimpleCellAddress;

var movedSimpleCellAddress = function movedSimpleCellAddress(address, toSheet, toRight, toBottom) {
  return simpleCellAddress(toSheet, address.col + toRight, address.row + toBottom);
};

exports.movedSimpleCellAddress = movedSimpleCellAddress;

var absoluteSheetReference = function absoluteSheetReference(address, baseAddress) {
  return address.sheet === null ? baseAddress.sheet : address.sheet;
};

exports.absoluteSheetReference = absoluteSheetReference;