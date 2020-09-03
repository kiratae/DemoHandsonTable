"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-integer");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.BitwiseLogicOperationsPlugin = void 0;

var _Cell = require("../../Cell");

var _FunctionPlugin2 = require("./FunctionPlugin");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var BitwiseLogicOperationsPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(BitwiseLogicOperationsPlugin, _FunctionPlugin);

  var _super = _createSuper(BitwiseLogicOperationsPlugin);

  function BitwiseLogicOperationsPlugin() {
    _classCallCheck(this, BitwiseLogicOperationsPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(BitwiseLogicOperationsPlugin, [{
    key: "bitand",
    value: function bitand(ast, formulaAddress) {
      return this.templateWithTwoPositiveIntegerArguments(ast, formulaAddress, function (left, right) {
        return left & right;
      });
    }
  }, {
    key: "bitor",
    value: function bitor(ast, formulaAddress) {
      return this.templateWithTwoPositiveIntegerArguments(ast, formulaAddress, function (left, right) {
        return left | right;
      });
    }
  }, {
    key: "bitxor",
    value: function bitxor(ast, formulaAddress) {
      return this.templateWithTwoPositiveIntegerArguments(ast, formulaAddress, function (left, right) {
        return left ^ right;
      });
    }
  }, {
    key: "templateWithTwoPositiveIntegerArguments",
    value: function templateWithTwoPositiveIntegerArguments(ast, formulaAddress, fn) {
      var validationResult = this.validateTwoNumericArguments(ast, formulaAddress);

      if (validationResult instanceof _Cell.CellError) {
        return validationResult;
      }

      var _validationResult = _slicedToArray(validationResult, 2),
          coercedLeft = _validationResult[0],
          coercedRight = _validationResult[1];

      if (coercedLeft < 0 || coercedRight < 0 || !Number.isInteger(coercedLeft) || !Number.isInteger(coercedRight)) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      return fn(coercedLeft, coercedRight);
    }
  }]);

  return BitwiseLogicOperationsPlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.BitwiseLogicOperationsPlugin = BitwiseLogicOperationsPlugin;
BitwiseLogicOperationsPlugin.implementedFunctions = {
  'BITAND': {
    method: 'bitand'
  },
  'BITOR': {
    method: 'bitor'
  },
  'BITXOR': {
    method: 'bitxor'
  }
};