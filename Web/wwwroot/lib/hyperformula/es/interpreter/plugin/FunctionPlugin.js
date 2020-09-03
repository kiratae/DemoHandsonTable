import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.array.some";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import "regenerator-runtime/runtime";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, ErrorType } from '../../Cell';
import { AstNodeType } from '../../parser';
import { coerceScalarToString } from '../ArithmeticHelper';
import { SimpleRangeValue } from '../InterpreterValue';
/**
 * Abstract class representing interpreter function plugin.
 * Plugin may contain multiple functions. Each function should be of type {@link PluginFunctionType} and needs to be
 * included in {@link implementedFunctions}
 */

export var FunctionPlugin = /*#__PURE__*/function () {
  function FunctionPlugin(interpreter) {
    _classCallCheck(this, FunctionPlugin);

    this.interpreter = interpreter;
    this.dependencyGraph = interpreter.dependencyGraph;
    this.columnSearch = interpreter.columnSearch;
    this.config = interpreter.config;
  }

  _createClass(FunctionPlugin, [{
    key: "evaluateAst",
    value: function evaluateAst(ast, formulaAddress) {
      return this.interpreter.evaluateAst(ast, formulaAddress);
    }
  }, {
    key: "iterateOverScalarValues",
    value: /*#__PURE__*/regeneratorRuntime.mark(function iterateOverScalarValues(asts, formulaAddress) {
      var _iterator, _step, argAst, value, _iterator2, _step2, scalarValue;

      return regeneratorRuntime.wrap(function iterateOverScalarValues$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(asts);
              _context.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 30;
                break;
              }

              argAst = _step.value;
              value = this.evaluateAst(argAst, formulaAddress);

              if (!(value instanceof SimpleRangeValue)) {
                _context.next = 26;
                break;
              }

              _iterator2 = _createForOfIteratorHelper(value.valuesFromTopLeftCorner());
              _context.prev = 8;

              _iterator2.s();

            case 10:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 16;
                break;
              }

              scalarValue = _step2.value;
              _context.next = 14;
              return scalarValue;

            case 14:
              _context.next = 10;
              break;

            case 16:
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](8);

              _iterator2.e(_context.t0);

            case 21:
              _context.prev = 21;

              _iterator2.f();

              return _context.finish(21);

            case 24:
              _context.next = 28;
              break;

            case 26:
              _context.next = 28;
              return value;

            case 28:
              _context.next = 3;
              break;

            case 30:
              _context.next = 35;
              break;

            case 32:
              _context.prev = 32;
              _context.t1 = _context["catch"](1);

              _iterator.e(_context.t1);

            case 35:
              _context.prev = 35;

              _iterator.f();

              return _context.finish(35);

            case 38:
            case "end":
              return _context.stop();
          }
        }
      }, iterateOverScalarValues, this, [[1, 32, 35, 38], [8, 18, 21, 24]]);
    })
  }, {
    key: "computeListOfValuesInRange",
    value: function computeListOfValuesInRange(range) {
      var values = [];

      var _iterator3 = _createForOfIteratorHelper(range.addresses(this.dependencyGraph)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var cellFromRange = _step3.value;
          var value = this.dependencyGraph.getScalarValue(cellFromRange);
          values.push(value);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return values;
    }
  }, {
    key: "templateWithOneCoercedToNumberArgument",
    value: function templateWithOneCoercedToNumberArgument(ast, formulaAddress, fn) {
      var _this = this;

      return this.templateWithOneArgumentCoercion(ast, formulaAddress, function (arg) {
        return _this.coerceScalarToNumberOrError(arg);
      }, fn);
    }
  }, {
    key: "templateWithOneCoercedToStringArgument",
    value: function templateWithOneCoercedToStringArgument(ast, formulaAddress, fn) {
      return this.templateWithOneArgumentCoercion(ast, formulaAddress, coerceScalarToString, fn);
    }
  }, {
    key: "validateTwoNumericArguments",
    value: function validateTwoNumericArguments(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var left = this.evaluateAst(ast.args[0], formulaAddress);

      if (left instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      var coercedLeft = this.coerceScalarToNumberOrError(left);

      if (coercedLeft instanceof CellError) {
        return coercedLeft;
      }

      var right = this.evaluateAst(ast.args[1], formulaAddress);

      if (right instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      var coercedRight = this.coerceScalarToNumberOrError(right);

      if (coercedRight instanceof CellError) {
        return coercedRight;
      }

      return [coercedLeft, coercedRight];
    }
  }, {
    key: "getNumericArgument",
    value: function getNumericArgument(ast, formulaAddress, position, min, max) {
      if (position > ast.args.length - 1) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args[position].type === AstNodeType.EMPTY) {
        return new CellError(ErrorType.NUM);
      }

      var arg = this.evaluateAst(ast.args[position], formulaAddress);

      if (arg instanceof SimpleRangeValue) {
        return new CellError(ErrorType.VALUE);
      }

      var value = this.coerceScalarToNumberOrError(arg);

      if (typeof value === 'number' && min !== undefined && max !== undefined && (value < min || value > max)) {
        return new CellError(ErrorType.NUM);
      }

      return value;
    }
  }, {
    key: "coerceScalarToNumberOrError",
    value: function coerceScalarToNumberOrError(arg) {
      return this.interpreter.arithmeticHelper.coerceScalarToNumberOrError(arg);
    }
  }, {
    key: "templateWithOneArgumentCoercion",
    value: function templateWithOneArgumentCoercion(ast, formulaAddress, coerceFunction, fn) {
      if (ast.args.length !== 1) {
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

      var coercedArg = coerceFunction(arg);

      if (coercedArg instanceof CellError) {
        return coercedArg;
      } else {
        return fn(coercedArg);
      }
    }
  }]);

  return FunctionPlugin;
}();