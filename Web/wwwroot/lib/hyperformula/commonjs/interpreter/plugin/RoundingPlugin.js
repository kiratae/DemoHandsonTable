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
exports.findNextOddNumber = findNextOddNumber;
exports.findNextEvenNumber = findNextEvenNumber;
exports.RoundingPlugin = void 0;

var _Cell = require("../../Cell");

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

function findNextOddNumber(arg) {
  var ceiled = Math.ceil(arg);
  return ceiled % 2 === 1 ? ceiled : ceiled + 1;
}

function findNextEvenNumber(arg) {
  var ceiled = Math.ceil(arg);
  return ceiled % 2 === 0 ? ceiled : ceiled + 1;
}

var RoundingPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(RoundingPlugin, _FunctionPlugin);

  var _super = _createSuper(RoundingPlugin);

  function RoundingPlugin() {
    _classCallCheck(this, RoundingPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(RoundingPlugin, [{
    key: "roundup",
    value: function roundup(ast, formulaAddress) {
      return this.commonArgumentsHandling2(ast, formulaAddress, function (numberToRound, places) {
        var placesMultiplier = Math.pow(10, places);

        if (numberToRound < 0) {
          return -Math.ceil(-numberToRound * placesMultiplier) / placesMultiplier;
        } else {
          return Math.ceil(numberToRound * placesMultiplier) / placesMultiplier;
        }
      });
    }
  }, {
    key: "rounddown",
    value: function rounddown(ast, formulaAddress) {
      return this.commonArgumentsHandling2(ast, formulaAddress, function (numberToRound, places) {
        var placesMultiplier = Math.pow(10, places);

        if (numberToRound < 0) {
          return -Math.floor(-numberToRound * placesMultiplier) / placesMultiplier;
        } else {
          return Math.floor(numberToRound * placesMultiplier) / placesMultiplier;
        }
      });
    }
  }, {
    key: "round",
    value: function round(ast, formulaAddress) {
      return this.commonArgumentsHandling2(ast, formulaAddress, function (numberToRound, places) {
        var placesMultiplier = Math.pow(10, places);

        if (numberToRound < 0) {
          return -Math.round(-numberToRound * placesMultiplier) / placesMultiplier;
        } else {
          return Math.round(numberToRound * placesMultiplier) / placesMultiplier;
        }
      });
    }
  }, {
    key: "trunc",
    value: function trunc(ast, formulaAddress) {
      return this.rounddown(ast, formulaAddress);
    }
  }, {
    key: "intFunc",
    value: function intFunc(ast, formulaAddress) {
      return this.templateWithOneCoercedToNumberArgument(ast, formulaAddress, function (coercedNumberToRound) {
        if (coercedNumberToRound < 0) {
          return -Math.floor(-coercedNumberToRound);
        } else {
          return Math.floor(coercedNumberToRound);
        }
      });
    }
  }, {
    key: "even",
    value: function even(ast, formulaAddress) {
      return this.templateWithOneCoercedToNumberArgument(ast, formulaAddress, function (coercedNumberToRound) {
        if (coercedNumberToRound < 0) {
          return -findNextEvenNumber(-coercedNumberToRound);
        } else {
          return findNextEvenNumber(coercedNumberToRound);
        }
      });
    }
  }, {
    key: "odd",
    value: function odd(ast, formulaAddress) {
      return this.templateWithOneCoercedToNumberArgument(ast, formulaAddress, function (coercedNumberToRound) {
        if (coercedNumberToRound < 0) {
          return -findNextOddNumber(-coercedNumberToRound);
        } else {
          return findNextOddNumber(coercedNumberToRound);
        }
      });
    }
  }, {
    key: "ceiling",
    value: function ceiling(ast, formulaAddress) {
      if (ast.args.length < 1 || ast.args.length > 3) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var value = this.getNumericArgument(ast, formulaAddress, 0);

      if (value instanceof _Cell.CellError) {
        return value;
      }

      var significance = 1;

      if (ast.args.length >= 2) {
        significance = this.getNumericArgument(ast, formulaAddress, 1);

        if (significance instanceof _Cell.CellError) {
          return significance;
        }
      }

      var mode = 0;

      if (ast.args.length === 3) {
        mode = this.getNumericArgument(ast, formulaAddress, 2);

        if (mode instanceof _Cell.CellError) {
          return mode;
        }
      }

      if (significance === 0 || value === 0) {
        return 0;
      }

      if (value > 0 != significance > 0 && ast.args.length > 1) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      if (mode === 0) {
        significance = Math.abs(significance);
      }

      return Math.ceil(value / significance) * significance;
    }
  }, {
    key: "commonArgumentsHandling2",
    value: function commonArgumentsHandling2(ast, formulaAddress, roundingFunction) {
      if (ast.args.length < 1 || ast.args.length > 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var numberToRound = this.evaluateAst(ast.args[0], formulaAddress);

      if (numberToRound instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var coercedPlaces;

      if (ast.args[1]) {
        var places = this.evaluateAst(ast.args[1], formulaAddress);

        if (places instanceof _InterpreterValue.SimpleRangeValue) {
          return new _Cell.CellError(_Cell.ErrorType.VALUE);
        }

        coercedPlaces = this.coerceScalarToNumberOrError(places);
      } else {
        coercedPlaces = 0;
      }

      var coercedNumberToRound = this.coerceScalarToNumberOrError(numberToRound);

      if (coercedNumberToRound instanceof _Cell.CellError) {
        return coercedNumberToRound;
      } else if (coercedPlaces instanceof _Cell.CellError) {
        return coercedPlaces;
      } else {
        return roundingFunction(coercedNumberToRound, coercedPlaces);
      }
    }
  }]);

  return RoundingPlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.RoundingPlugin = RoundingPlugin;
RoundingPlugin.implementedFunctions = {
  'ROUNDUP': {
    method: 'roundup'
  },
  'ROUNDDOWN': {
    method: 'rounddown'
  },
  'ROUND': {
    method: 'round'
  },
  'TRUNC': {
    method: 'trunc'
  },
  'INT': {
    method: 'intFunc'
  },
  'EVEN': {
    method: 'even'
  },
  'ODD': {
    method: 'odd'
  },
  'CEILING': {
    method: 'ceiling'
  }
};