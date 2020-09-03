import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.array.some";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.reflect.construct";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.split";
import "core-js/modules/web.dom-collections.iterator";

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
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
import { CellError, ErrorType } from '../../Cell';
import { AstNodeType } from '../../parser';
import { coerceScalarToString } from '../ArithmeticHelper';
import { FunctionPlugin } from './FunctionPlugin';
/**
 * Interpreter plugin containing text-specific functions
 */

export var TextPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(TextPlugin, _FunctionPlugin);

  var _super = _createSuper(TextPlugin);

  function TextPlugin() {
    _classCallCheck(this, TextPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(TextPlugin, [{
    key: "concatenate",

    /**
     * Corresponds to CONCATENATE(value1, [value2, ...])
     *
     * Concatenates provided arguments to one string.
     *
     * @param args
     * @param formulaAddress
     */
    value: function concatenate(ast, formulaAddress) {
      if (ast.args.length == 0) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var result = '';

      var _iterator = _createForOfIteratorHelper(this.iterateOverScalarValues(ast.args, formulaAddress)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          var coercedValue = coerceScalarToString(value);

          if (coercedValue instanceof CellError) {
            return value;
          } else {
            result = result.concat(coercedValue);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
    /**
     * Corresponds to SPLIT(string, index)
     *
     * Splits provided string using space separator and returns chunk at zero-based position specified by second argument
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "split",
    value: function split(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new CellError(ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === AstNodeType.EMPTY;
      })) {
        return new CellError(ErrorType.NUM);
      }

      var stringArg = ast.args[0];
      var indexArg = ast.args[1];
      var stringToSplit = this.evaluateAst(stringArg, formulaAddress);

      if (typeof stringToSplit !== 'string') {
        return new CellError(ErrorType.VALUE);
      }

      var indexToUse = this.evaluateAst(indexArg, formulaAddress);

      if (typeof indexToUse !== 'number') {
        return new CellError(ErrorType.VALUE);
      }

      var splittedString = stringToSplit.split(' ');

      if (indexToUse > splittedString.length || indexToUse < 0) {
        return new CellError(ErrorType.VALUE);
      }

      return splittedString[indexToUse];
    }
  }]);

  return TextPlugin;
}(FunctionPlugin);
TextPlugin.implementedFunctions = {
  'CONCATENATE': {
    method: 'concatenate'
  },
  'SPLIT': {
    method: 'split'
  }
};