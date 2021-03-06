"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.some");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.CorrelPlugin = void 0;

var _Cell = require("../../Cell");

var _parser = require("../../parser");

var _ArithmeticHelper = require("../ArithmeticHelper");

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

var CorrelPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(CorrelPlugin, _FunctionPlugin);

  var _super = _createSuper(CorrelPlugin);

  function CorrelPlugin() {
    _classCallCheck(this, CorrelPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(CorrelPlugin, [{
    key: "correl",
    value: function correl(ast, formulaAddress) {
      if (ast.args.length != 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var dataX = (0, _ArithmeticHelper.coerceToRange)(this.evaluateAst(ast.args[0], formulaAddress));
      var dataY = (0, _ArithmeticHelper.coerceToRange)(this.evaluateAst(ast.args[1], formulaAddress));

      if (dataX.numberOfElements() !== dataY.numberOfElements()) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (dataX.numberOfElements() <= 1) {
        return new _Cell.CellError(_Cell.ErrorType.DIV_BY_ZERO);
      }

      return this.computePearson(dataX, dataY);
    }
  }, {
    key: "computePearson",
    value: function computePearson(dataX, dataY) {
      var xit = dataX.valuesFromTopLeftCorner();
      var yit = dataY.valuesFromTopLeftCorner();
      var x, y;
      var count = 0;
      var sumX = 0;
      var sumY = 0;
      var sumXsquares = 0;
      var sumYsquares = 0;
      var sumOfProducts = 0;

      while (x = xit.next(), y = yit.next(), !x.done && !y.done) {
        var xval = x.value;
        var yval = y.value;

        if (xval instanceof _Cell.CellError) {
          return xval;
        } else if (yval instanceof _Cell.CellError) {
          return yval;
        } else if (typeof xval === 'number' && typeof yval === 'number') {
          count++;
          sumX += xval;
          sumY += yval;
          sumXsquares += xval * xval;
          sumYsquares += yval * yval;
          sumOfProducts += xval * yval;
        }
      }

      return (count * sumOfProducts - sumX * sumY) / (Math.sqrt(count * sumXsquares - sumX * sumX) * Math.sqrt(count * sumYsquares - sumY * sumY));
    }
  }]);

  return CorrelPlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.CorrelPlugin = CorrelPlugin;
CorrelPlugin.implementedFunctions = {
  'CORREL': {
    method: 'correl'
  }
};