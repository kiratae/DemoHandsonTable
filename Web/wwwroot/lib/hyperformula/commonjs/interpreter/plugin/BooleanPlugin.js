"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.some");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.BooleanPlugin = void 0;

var _Cell = require("../../Cell");

var _parser = require("../../parser");

var _ArithmeticHelper = require("../ArithmeticHelper");

var _InterpreterValue = require("../InterpreterValue");

var _FunctionPlugin2 = require("./FunctionPlugin");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 * Interpreter plugin containing boolean functions
 */
var BooleanPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(BooleanPlugin, _FunctionPlugin);

  var _super = _createSuper(BooleanPlugin);

  function BooleanPlugin() {
    _classCallCheck(this, BooleanPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(BooleanPlugin, [{
    key: "literalTrue",

    /**
     * Corresponds to TRUE()
     *
     * Returns the logical true
     *
     * @param ast
     * @param formulaAddress
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: function literalTrue(ast, formulaAddress) {
      if (ast.args.length > 0) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      } else {
        return true;
      }
    }
    /**
     * Corresponds to FALSE()
     *
     * Returns the logical false
     *
     * @param ast
     * @param formulaAddress
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "literalFalse",
    value: function literalFalse(ast, formulaAddress) {
      if (ast.args.length > 0) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      } else {
        return false;
      }
    }
    /**
     * Corresponds to IF(expression, value_if_true, value_if_false)
     *
     * Returns value specified as second argument if expression is true and third argument if expression is false
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "conditionalIf",
    value: function conditionalIf(ast, formulaAddress) {
      if (ast.args.length > 3 || ast.args.length < 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var conditionValue = this.evaluateAst(ast.args[0], formulaAddress);

      if (conditionValue instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var condition = (0, _ArithmeticHelper.coerceScalarToBoolean)(conditionValue);

      if (condition === true) {
        return this.evaluateAst(ast.args[1], formulaAddress);
      } else if (condition === false) {
        if (ast.args[2] !== undefined) {
          return this.evaluateAst(ast.args[2], formulaAddress);
        } else {
          return false;
        }
      } else if (condition instanceof _Cell.CellError) {
        return condition;
      } else {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }
    }
    /**
     * Corresponds to AND(expression1, [expression2, ...])
     *
     * Returns true if all of the provided arguments are logically true, and false if any of it is logically false
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "and",
    value: function and(ast, formulaAddress) {
      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var result = true;
      var anyReasonableValue = false;

      var _iterator = _createForOfIteratorHelper(this.iterateOverScalarValues(ast.args, formulaAddress)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var scalarValue = _step.value;
          var coercedValue = (0, _ArithmeticHelper.coerceScalarToBoolean)(scalarValue);

          if (coercedValue instanceof _Cell.CellError) {
            return coercedValue;
          } else if (coercedValue !== null) {
            result = result && coercedValue;
            anyReasonableValue = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (anyReasonableValue) {
        return result;
      } else {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }
    }
    /**
     * Corresponds to OR(expression1, [expression2, ...])
     *
     * Returns true if any of the provided arguments are logically true, and false otherwise
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "or",
    value: function or(ast, formulaAddress) {
      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var result = null;

      var _iterator2 = _createForOfIteratorHelper(this.iterateOverScalarValues(ast.args, formulaAddress)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var scalarValue = _step2.value;
          var coercedValue = (0, _ArithmeticHelper.coerceScalarToBoolean)(scalarValue);

          if (coercedValue instanceof _Cell.CellError) {
            return coercedValue;
          } else if (coercedValue !== null) {
            result = result || coercedValue;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (result === null) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      } else {
        return result;
      }
    }
  }, {
    key: "not",
    value: function not(ast, formulaAddress) {
      if (ast.args.length !== 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var argValue = this.evaluateAst(ast.args[0], formulaAddress);

      if (argValue instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      } else {
        var coercedValue = (0, _ArithmeticHelper.coerceScalarToBoolean)(argValue);

        if (coercedValue instanceof _Cell.CellError) {
          return coercedValue;
        } else {
          return !coercedValue;
        }
      }
    }
  }, {
    key: "xor",
    value: function xor(ast, formulaAddress) {
      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var truesCount = 0;
      var anyFalseValue = false;

      var _iterator3 = _createForOfIteratorHelper(this.iterateOverScalarValues(ast.args, formulaAddress)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var scalarValue = _step3.value;
          var coercedValue = (0, _ArithmeticHelper.coerceScalarToBoolean)(scalarValue);

          if (coercedValue instanceof _Cell.CellError) {
            return coercedValue;
          } else if (coercedValue === true) {
            truesCount++;
          } else if (coercedValue === false) {
            anyFalseValue = true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (anyFalseValue || truesCount > 0) {
        return truesCount % 2 === 1;
      } else {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }
    }
  }, {
    key: "switch",
    value: function _switch(ast, formulaAddress) {
      if (ast.args.length < 3) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var vals = [];

      var _iterator4 = _createForOfIteratorHelper(ast.args),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var arg = _step4.value;
          var val = this.evaluateAst(arg, formulaAddress);

          if (val instanceof _InterpreterValue.SimpleRangeValue) {
            return new _Cell.CellError(_Cell.ErrorType.VALUE);
          }

          vals.push(val);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var n = vals.length;

      if (vals[0] instanceof _Cell.CellError) {
        return vals[0];
      }

      var i = 1;

      for (; i + 1 < n; i += 2) {
        if (vals[i] instanceof _Cell.CellError) {
          continue;
        }

        if (this.interpreter.arithmeticHelper.compare(vals[0], vals[i]) === 0) {
          return vals[i + 1];
        }
      }

      if (i < n) {
        return vals[i];
      } else {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }
    }
  }, {
    key: "iferror",
    value: function iferror(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var left = this.evaluateAst(ast.args[0], formulaAddress);
      var right = this.evaluateAst(ast.args[1], formulaAddress);

      if (left instanceof _InterpreterValue.SimpleRangeValue || right instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      if (left instanceof _Cell.CellError) {
        return right;
      } else {
        return left;
      }
    }
  }, {
    key: "ifna",
    value: function ifna(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var left = this.evaluateAst(ast.args[0], formulaAddress);
      var right = this.evaluateAst(ast.args[1], formulaAddress);

      if (left instanceof _InterpreterValue.SimpleRangeValue || right instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      if (left instanceof _Cell.CellError && left.type === _Cell.ErrorType.NA) {
        return right;
      } else {
        return left;
      }
    }
  }, {
    key: "choose",
    value: function choose(ast, formulaAddress) {
      if (ast.args.length < 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var vals = [];

      var _iterator5 = _createForOfIteratorHelper(ast.args),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var arg = _step5.value;
          var val = this.evaluateAst(arg, formulaAddress);

          if (val instanceof _InterpreterValue.SimpleRangeValue) {
            return new _Cell.CellError(_Cell.ErrorType.VALUE);
          }

          vals.push(val);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var n = vals.length;

      if (vals[0] instanceof _Cell.CellError) {
        return vals[0];
      }

      var selector = this.interpreter.arithmeticHelper.coerceToMaybeNumber(vals[0]);

      if (selector === undefined || selector != Math.round(selector) || selector < 1 || selector >= n) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      return vals[selector];
    }
  }]);

  return BooleanPlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.BooleanPlugin = BooleanPlugin;
BooleanPlugin.implementedFunctions = {
  'TRUE': {
    method: 'literalTrue'
  },
  'FALSE': {
    method: 'literalFalse'
  },
  'IF': {
    method: 'conditionalIf'
  },
  'AND': {
    method: 'and'
  },
  'OR': {
    method: 'or'
  },
  'XOR': {
    method: 'xor'
  },
  'NOT': {
    method: 'not'
  },
  'SWITCH': {
    method: 'switch'
  },
  'IFERROR': {
    method: 'iferror'
  },
  'IFNA': {
    method: 'ifna'
  },
  'CHOOSE': {
    method: 'choose'
  }
};