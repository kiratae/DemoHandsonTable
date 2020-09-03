"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.some");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.ErrorFunctionPlugin = void 0;

var _Cell = require("../../Cell");

var _parser = require("../../parser");

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

var ErrorFunctionPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(ErrorFunctionPlugin, _FunctionPlugin);

  var _super = _createSuper(ErrorFunctionPlugin);

  function ErrorFunctionPlugin() {
    _classCallCheck(this, ErrorFunctionPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(ErrorFunctionPlugin, [{
    key: "erf",
    value: function erf(ast, formulaAddress) {
      if (ast.args.length < 1 || ast.args.length > 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var lowerBound = this.getNumericArgument(ast, formulaAddress, 0);

      if (lowerBound instanceof _Cell.CellError) {
        return lowerBound;
      }

      if (ast.args.length === 2) {
        var upperBound = this.getNumericArgument(ast, formulaAddress, 1);

        if (upperBound instanceof _Cell.CellError) {
          return upperBound;
        }

        return erf2(lowerBound, upperBound);
      }

      return _erf(lowerBound);
    }
  }, {
    key: "erfc",
    value: function erfc(ast, formulaAddress) {
      return this.templateWithOneCoercedToNumberArgument(ast, formulaAddress, function (arg) {
        return _erfc(arg);
      });
    }
  }]);

  return ErrorFunctionPlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.ErrorFunctionPlugin = ErrorFunctionPlugin;
ErrorFunctionPlugin.implementedFunctions = {
  'ERF': {
    method: 'erf'
  },
  'ERFC': {
    method: 'erfc'
  }
};

function _erf(x) {
  if (x >= 0) {
    return erfApprox(x);
  } else {
    return -erfApprox(-x);
  }
}

function erfApprox(x) {
  var polyExponent = 16;
  var coefficients = [0.0705230784, 0.0422820123, 0.0092705272, 0.0001520143, 0.0002765672, 0.0000430638];
  var poly = coefficients.reduce(function (acc, coefficient, index) {
    return acc + coefficient * Math.pow(x, index + 1);
  }, 1);
  return 1 - 1 / Math.pow(poly, polyExponent);
}

function erf2(lowerBound, upperBound) {
  return _erf(upperBound) - _erf(lowerBound);
}

function _erfc(x) {
  return 1 - _erf(x);
}