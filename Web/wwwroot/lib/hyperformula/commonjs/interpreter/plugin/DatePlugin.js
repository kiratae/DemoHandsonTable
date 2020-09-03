"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.some");

require("core-js/modules/es.math.trunc");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.DatePlugin = void 0;

var _Cell = require("../../Cell");

var _DateTimeHelper = require("../../DateTimeHelper");

var _format = require("../../format/format");

var _parser = require("../../parser");

var _InterpreterValue = require("../InterpreterValue");

var _FunctionPlugin2 = require("./FunctionPlugin");

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
 * Interpreter plugin containing date-specific functions
 */
var DatePlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(DatePlugin, _FunctionPlugin);

  var _super = _createSuper(DatePlugin);

  function DatePlugin() {
    _classCallCheck(this, DatePlugin);

    return _super.apply(this, arguments);
  }

  _createClass(DatePlugin, [{
    key: "date",

    /**
     * Corresponds to DATE(year, month, day)
     *
     * Converts a provided year, month and day into date
     *
     * @param ast
     * @param formulaAddress
     */
    value: function date(ast, formulaAddress) {
      if (ast.args.length !== 3) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var year = this.evaluateAst(ast.args[0], formulaAddress);
      var month = this.evaluateAst(ast.args[1], formulaAddress);
      var day = this.evaluateAst(ast.args[2], formulaAddress);

      if (year instanceof _InterpreterValue.SimpleRangeValue || month instanceof _InterpreterValue.SimpleRangeValue || day instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var coercedYear = this.coerceScalarToNumberOrError(year);
      var coercedMonth = this.coerceScalarToNumberOrError(month);
      var coercedDay = this.coerceScalarToNumberOrError(day);

      if (coercedYear instanceof _Cell.CellError) {
        return coercedYear;
      }

      if (coercedMonth instanceof _Cell.CellError) {
        return coercedMonth;
      }

      if (coercedDay instanceof _Cell.CellError) {
        return coercedDay;
      }

      var d = Math.trunc(coercedDay);
      var m = Math.trunc(coercedMonth);
      var y = Math.trunc(coercedYear);

      if (y < this.interpreter.dateHelper.getEpochYearZero()) {
        y += this.interpreter.dateHelper.getEpochYearZero();
      }

      var delta = Math.floor((m - 1) / 12);
      y += delta;
      m -= delta * 12;
      var date = {
        year: y,
        month: m,
        day: 1
      };

      if (this.interpreter.dateHelper.isValidDate(date)) {
        var ret = this.interpreter.dateHelper.dateToNumber(date) + (d - 1);

        if (this.interpreter.dateHelper.getWithinBounds(ret)) {
          return ret;
        }
      }

      return new _Cell.CellError(_Cell.ErrorType.VALUE);
    }
  }, {
    key: "eomonth",
    value: function eomonth(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var arg = this.evaluateAst(ast.args[0], formulaAddress);

      if (arg instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var dateNumber = this.coerceScalarToNumberOrError(arg);

      if (dateNumber instanceof _Cell.CellError) {
        return dateNumber;
      }

      var numberOfMonthsToShiftValue = this.evaluateAst(ast.args[1], formulaAddress);

      if (numberOfMonthsToShiftValue instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var numberOfMonthsToShift = this.coerceScalarToNumberOrError(numberOfMonthsToShiftValue);

      if (numberOfMonthsToShift instanceof _Cell.CellError) {
        return numberOfMonthsToShift;
      }

      var date = this.interpreter.dateHelper.numberToSimpleDate(dateNumber);
      return this.interpreter.dateHelper.dateToNumber((0, _DateTimeHelper.endOfMonth)((0, _DateTimeHelper.offsetMonth)(date, numberOfMonthsToShift)));
    }
  }, {
    key: "day",
    value: function day(ast, formulaAddress) {
      if (ast.args.length !== 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var arg = this.evaluateAst(ast.args[0], formulaAddress);

      if (arg instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var dateNumber = this.coerceScalarToNumberOrError(arg);

      if (dateNumber instanceof _Cell.CellError) {
        return dateNumber;
      }

      return this.interpreter.dateHelper.numberToSimpleDate(dateNumber).day;
    }
  }, {
    key: "days",
    value: function days(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var endDate = this.evaluateAst(ast.args[0], formulaAddress);

      if (endDate instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var endDateNumber = this.coerceScalarToNumberOrError(endDate);

      if (endDateNumber instanceof _Cell.CellError) {
        return endDateNumber;
      }

      var startDate = this.evaluateAst(ast.args[1], formulaAddress);

      if (startDate instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var startDateNumber = this.coerceScalarToNumberOrError(startDate);

      if (startDateNumber instanceof _Cell.CellError) {
        return startDateNumber;
      }

      return endDateNumber - startDateNumber;
    }
    /**
     * Corresponds to MONTH(date)
     *
     * Returns the month of the year specified by a given date
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "month",
    value: function month(ast, formulaAddress) {
      if (ast.args.length !== 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var arg = this.evaluateAst(ast.args[0], formulaAddress);

      if (arg instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var dateNumber = this.coerceScalarToNumberOrError(arg);

      if (dateNumber instanceof _Cell.CellError) {
        return dateNumber;
      }

      return this.interpreter.dateHelper.numberToSimpleDate(dateNumber).month;
    }
    /**
     * Corresponds to YEAR(date)
     *
     * Returns the year specified by a given date
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "year",
    value: function year(ast, formulaAddress) {
      if (ast.args.length !== 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var arg = this.evaluateAst(ast.args[0], formulaAddress);

      if (arg instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var dateNumber = this.coerceScalarToNumberOrError(arg);

      if (dateNumber instanceof _Cell.CellError) {
        return dateNumber;
      }

      return this.interpreter.dateHelper.numberToSimpleDate(dateNumber).year;
    }
    /**
     * Corresponds to TEXT(number, format)
     *
     * Tries to convert number to specified date format.
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "text",
    value: function text(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var dateArg = this.evaluateAst(ast.args[0], formulaAddress);
      var formatArg = this.evaluateAst(ast.args[1], formulaAddress);

      if (dateArg instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var numberRepresentation = this.coerceScalarToNumberOrError(dateArg);

      if (numberRepresentation instanceof _Cell.CellError) {
        return numberRepresentation;
      }

      if (typeof formatArg !== 'string') {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      return (0, _format.format)(numberRepresentation, formatArg, this.config, this.interpreter.dateHelper);
    }
  }]);

  return DatePlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.DatePlugin = DatePlugin;
DatePlugin.implementedFunctions = {
  'DATE': {
    method: 'date'
  },
  'MONTH': {
    method: 'month'
  },
  'YEAR': {
    method: 'year'
  },
  'TEXT': {
    method: 'text'
  },
  'EOMONTH': {
    method: 'eomonth'
  },
  'DAY': {
    method: 'day'
  },
  'DAYS': {
    method: 'days'
  }
};