"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.some");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.RadixConversionPlugin = void 0;

var _Cell = require("../../Cell");

var _format = require("../../format/format");

var _parser = require("../../parser");

var _ArithmeticHelper = require("../ArithmeticHelper");

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

var NUMBER_OF_BITS = 10;
var DECIMAL_NUMBER_OF_BITS = 255;
var MIN_BASE = 2;
var MAX_BASE = 36;
var ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var RadixConversionPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(RadixConversionPlugin, _FunctionPlugin);

  var _super = _createSuper(RadixConversionPlugin);

  function RadixConversionPlugin() {
    _classCallCheck(this, RadixConversionPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(RadixConversionPlugin, [{
    key: "dec2bin",
    value: function dec2bin(ast, formulaAddress) {
      return this.dec2base(ast, formulaAddress, 2);
    }
  }, {
    key: "dec2oct",
    value: function dec2oct(ast, formulaAddress) {
      return this.dec2base(ast, formulaAddress, 8);
    }
  }, {
    key: "dec2hex",
    value: function dec2hex(ast, formulaAddress) {
      return this.dec2base(ast, formulaAddress, 16);
    }
  }, {
    key: "bin2dec",
    value: function bin2dec(ast, formulaAddress) {
      if (ast.args.length !== 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      var binaryWithSign = this.getFirstArgumentAsNumberInBase(ast, formulaAddress, 2, NUMBER_OF_BITS);

      if (binaryWithSign instanceof _Cell.CellError) {
        return binaryWithSign;
      }

      return twoComplementToDecimal(binaryWithSign);
    }
  }, {
    key: "bin2oct",
    value: function bin2oct(ast, formulaAddress) {
      return this.bin2base(ast, formulaAddress, 8);
    }
  }, {
    key: "bin2hex",
    value: function bin2hex(ast, formulaAddress) {
      return this.bin2base(ast, formulaAddress, 16);
    }
  }, {
    key: "base",
    value: function base(ast, formulaAddress) {
      if (ast.args.length < 2 || ast.args.length > 3) {
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

      var base = this.getNumericArgument(ast, formulaAddress, 1, MIN_BASE, MAX_BASE);

      if (base instanceof _Cell.CellError) {
        return base;
      }

      var padding;

      if (ast.args.length === 3) {
        padding = this.getNumericArgument(ast, formulaAddress, 2, 0, DECIMAL_NUMBER_OF_BITS);

        if (padding instanceof _Cell.CellError) {
          return padding;
        }
      }

      if (value < 0) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      return decimalToBaseWithMinimumPadding(value, base, padding);
    }
  }, {
    key: "decimal",
    value: function decimal(ast, formulaAddress) {
      if (ast.args.length !== 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var base = this.getNumericArgument(ast, formulaAddress, 1, MIN_BASE, MAX_BASE);

      if (base instanceof _Cell.CellError) {
        return base;
      }

      var input = this.getFirstArgumentAsNumberInBase(ast, formulaAddress, base, DECIMAL_NUMBER_OF_BITS);

      if (input instanceof _Cell.CellError) {
        return input;
      }

      return parseInt(input, base);
    }
  }, {
    key: "bin2base",
    value: function bin2base(ast, formulaAddress, base) {
      if (ast.args.length < 1 || ast.args.length > 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var binaryWithSign = this.getFirstArgumentAsNumberInBase(ast, formulaAddress, 2, NUMBER_OF_BITS);

      if (binaryWithSign instanceof _Cell.CellError) {
        return binaryWithSign;
      }

      var places;

      if (ast.args.length === 2) {
        places = this.getNumericArgument(ast, formulaAddress, 1, 1, 10);

        if (places instanceof _Cell.CellError) {
          return places;
        }
      }

      var decimal = twoComplementToDecimal(binaryWithSign);
      return decimalToBaseWithExactPadding(decimal, base, places);
    }
  }, {
    key: "dec2base",
    value: function dec2base(ast, formulaAddress, base) {
      if (ast.args.length < 1 || ast.args.length > 2) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var places;

      if (ast.args.length === 2) {
        places = this.getNumericArgument(ast, formulaAddress, 1, 1, 10);

        if (places instanceof _Cell.CellError) {
          return places;
        }
      }

      var min = -Math.pow(base, NUMBER_OF_BITS) / 2;
      var max = -min - 1;
      var value = this.getNumericArgument(ast, formulaAddress, 0, min, max);

      if (value instanceof _Cell.CellError) {
        return value;
      }

      return decimalToBaseWithExactPadding(value, base, places);
    }
  }, {
    key: "getFirstArgumentAsNumberInBase",
    value: function getFirstArgumentAsNumberInBase(ast, formulaAddress, base, maxLength) {
      var arg = this.evaluateAst(ast.args[0], formulaAddress);

      if (arg instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }

      var value = (0, _ArithmeticHelper.coerceScalarToString)(arg);

      if (typeof value === 'string') {
        var baseAlphabet = ALPHABET.substr(0, base);
        var regex = new RegExp("^[".concat(baseAlphabet, "]+$"));

        if (value.length > maxLength || !regex.test(value)) {
          return new _Cell.CellError(_Cell.ErrorType.NUM);
        }
      }

      return value;
    }
  }]);

  return RadixConversionPlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.RadixConversionPlugin = RadixConversionPlugin;
RadixConversionPlugin.implementedFunctions = {
  'DEC2BIN': {
    method: 'dec2bin'
  },
  'DEC2OCT': {
    method: 'dec2oct'
  },
  'DEC2HEX': {
    method: 'dec2hex'
  },
  'BIN2DEC': {
    method: 'bin2dec'
  },
  'BIN2OCT': {
    method: 'bin2oct'
  },
  'BIN2HEX': {
    method: 'bin2hex'
  },
  'DECIMAL': {
    method: 'decimal'
  },
  'BASE': {
    method: 'base'
  }
};

function decimalToBaseWithExactPadding(value, base, places) {
  var result = decimalToRadixComplement(value, base);

  if (places === undefined || value < 0) {
    return result;
  } else if (result.length > places) {
    return new _Cell.CellError(_Cell.ErrorType.NUM);
  } else {
    return (0, _format.padLeft)(result, places);
  }
}

function decimalToBaseWithMinimumPadding(value, base, places) {
  var result = decimalToRadixComplement(value, base);

  if (places !== undefined && places > result.length) {
    return (0, _format.padLeft)(result, places);
  } else {
    return result;
  }
}

function decimalToRadixComplement(value, base) {
  var offset = value < 0 ? Math.pow(base, NUMBER_OF_BITS) : 0;
  return (value + offset).toString(base).toUpperCase();
}

function twoComplementToDecimal(value) {
  var offset = value.length == NUMBER_OF_BITS && value.startsWith('1') ? Math.pow(2, NUMBER_OF_BITS) : 0;
  return parseInt(value, 2) - offset;
}