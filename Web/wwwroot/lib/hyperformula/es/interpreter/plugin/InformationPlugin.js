import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.some";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { AbsoluteCellRange } from '../../AbsoluteCellRange';
import { CellError, EmptyValue, ErrorType } from '../../Cell';
import { AstNodeType } from '../../parser';
import { SimpleRangeValue } from '../InterpreterValue';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing information functions
 */

export var InformationPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(InformationPlugin, _FunctionPlugin);

  var _super = _createSuper(InformationPlugin);

  function InformationPlugin() {
    _classCallCheck(this, InformationPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(InformationPlugin, [{
    key: "iserror",

    /**
     * Corresponds to ISERROR(value)
     *
     * Checks whether provided value is an error
     *
     * @param ast
     * @param formulaAddress
     */
    value: function iserror(ast, formulaAddress) {
      if (ast.args.length != 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var arg = this.evaluateAst(ast.args[0], formulaAddress);

      if (arg instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      return arg instanceof CellError;
    }
    /**
     * Corresponds to ISBLANK(value)
     *
     * Checks whether provided cell reference is empty
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "isblank",
    value: function isblank(ast, formulaAddress) {
      if (ast.args.length != 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var arg = ast.args[0];
      var value = this.evaluateAst(arg, formulaAddress);

      if (value instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      return value === EmptyValue;
    }
    /**
     * Corresponds to ISNUMBER(value)
     *
     * Checks whether provided cell reference is a number
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "isnumber",
    value: function isnumber(ast, formulaAddress) {
      if (ast.args.length != 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var arg = ast.args[0];
      var value = this.evaluateAst(arg, formulaAddress);

      if (value instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      return typeof value === 'number';
    }
    /**
     * Corresponds to ISLOGICAL(value)
     *
     * Checks whether provided cell reference is of logical type
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "islogical",
    value: function islogical(ast, formulaAddress) {
      if (ast.args.length != 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var arg = ast.args[0];
      var value = this.evaluateAst(arg, formulaAddress);

      if (value instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      return typeof value === 'boolean';
    }
    /**
     * Corresponds to ISTEXT(value)
     *
     * Checks whether provided cell reference is of logical type
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "istext",
    value: function istext(ast, formulaAddress) {
      if (ast.args.length != 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var arg = ast.args[0];
      var value = this.evaluateAst(arg, formulaAddress);

      if (value instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      return typeof value === 'string';
    }
    /**
     * Corresponds to ISNONTEXT(value)
     *
     * Checks whether provided cell reference is of logical type
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "isnontext",
    value: function isnontext(ast, formulaAddress) {
      if (ast.args.length != 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var arg = ast.args[0];
      var value = this.evaluateAst(arg, formulaAddress);

      if (value instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      return typeof value !== 'string';
    }
    /**
     * Corresponds to COLUMNS(range)
     *
     * Returns number of columns in provided range of cells
     *
     * @param ast
     * @param formulaAddress
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "columns",
    value: function columns(ast, formulaAddress) {
      if (ast.args.length !== 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var rangeAst = ast.args[0];

      if (rangeAst.type === AstNodeType.CELL_RANGE) {
        return rangeAst.end.col - rangeAst.start.col + 1;
      } else {
        return new CellError(ErrorType.VALUE);
      }
    }
    /**
     * Corresponds to ROWS(range)
     *
     * Returns number of rows in provided range of cells
     *
     * @param ast
     * @param formulaAddress
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "rows",
    value: function rows(ast, formulaAddress) {
      if (ast.args.length !== 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var rangeAst = ast.args[0];

      if (rangeAst.type === AstNodeType.CELL_RANGE) {
        return rangeAst.end.row - rangeAst.start.row + 1;
      } else {
        return new CellError(ErrorType.VALUE);
      }
    }
  }, {
    key: "index",
    value: function index(ast, formulaAddress) {
      var rangeArg = ast.args[0];

      if (ast.args.length < 1 || ast.args.length > 3) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var width, height;
      var range;

      if (rangeArg.type === AstNodeType.CELL_RANGE) {
        range = AbsoluteCellRange.fromCellRange(rangeArg, formulaAddress);
        width = range.width();
        height = range.height();
      } else {
        width = 1;
        height = 1;
      }

      var rowArg = ast.args[1];
      var rowValue = this.evaluateAst(rowArg, formulaAddress);

      if (typeof rowValue !== 'number' || rowValue < 0 || rowValue > height) {
        return new CellError(ErrorType.NUM);
      }

      var columnArg = ast.args[2];
      var columnValue = this.evaluateAst(columnArg, formulaAddress);

      if (typeof columnValue !== 'number' || columnValue < 0 || columnValue > width) {
        return new CellError(ErrorType.NUM);
      }

      if (columnValue === 0 || rowValue === 0 || range === undefined) {
        throw Error('Not implemented yet');
      }

      var address = range.getAddress(columnValue - 1, rowValue - 1);
      return this.dependencyGraph.getCellValue(address);
    }
  }]);

  return InformationPlugin;
}(FunctionPlugin);
InformationPlugin.implementedFunctions = {
  'ISERROR': {
    method: 'iserror'
  },
  'ISBLANK': {
    method: 'isblank'
  },
  'ISNUMBER': {
    method: 'isnumber'
  },
  'ISLOGICAL': {
    method: 'islogical'
  },
  'ISTEXT': {
    method: 'istext'
  },
  'ISNONTEXT': {
    method: 'isnontext'
  },
  'COLUMNS': {
    method: 'columns',
    isDependentOnSheetStructureChange: true,
    doesNotNeedArgumentsToBeComputed: true
  },
  'ROWS': {
    method: 'rows',
    isDependentOnSheetStructureChange: true,
    doesNotNeedArgumentsToBeComputed: true
  },
  'INDEX': {
    method: 'index'
  }
};