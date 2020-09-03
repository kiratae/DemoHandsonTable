"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.some");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-finite");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.NumericAggregationPlugin = void 0;

var _assert = _interopRequireDefault(require("assert"));

var _AbsoluteCellRange = require("../../AbsoluteCellRange");

var _Cell = require("../../Cell");

var _parser = require("../../parser");

var _ArithmeticHelper = require("../ArithmeticHelper");

var _InterpreterValue = require("../InterpreterValue");

var _FunctionPlugin2 = require("./FunctionPlugin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function idMap(arg) {
  return arg;
}

function square(arg) {
  if (arg instanceof _Cell.CellError) {
    return arg;
  } else if (typeof arg === 'number') {
    return arg * arg;
  } else {
    return 0;
  }
}

function zeroForInfinite(value) {
  if (typeof value === 'number' && !Number.isFinite(value)) {
    return 0;
  } else {
    return value;
  }
}

var AverageResult = /*#__PURE__*/function () {
  function AverageResult(sum, count) {
    _classCallCheck(this, AverageResult);

    this.sum = sum;
    this.count = count;
  }

  _createClass(AverageResult, [{
    key: "compose",
    value: function compose(other) {
      return new AverageResult(this.sum + other.sum, this.count + other.count);
    }
  }, {
    key: "averageValue",
    value: function averageValue() {
      if (this.count > 0) {
        return this.sum / this.count;
      } else {
        return undefined;
      }
    }
  }], [{
    key: "single",
    value: function single(arg) {
      return new AverageResult(arg, 1);
    }
  }]);

  return AverageResult;
}();

AverageResult.empty = new AverageResult(0, 0);

var NumericAggregationPlugin = /*#__PURE__*/function (_FunctionPlugin) {
  _inherits(NumericAggregationPlugin, _FunctionPlugin);

  var _super = _createSuper(NumericAggregationPlugin);

  function NumericAggregationPlugin() {
    _classCallCheck(this, NumericAggregationPlugin);

    return _super.apply(this, arguments);
  }

  _createClass(NumericAggregationPlugin, [{
    key: "sum",

    /**
     * Corresponds to SUM(Number1, Number2, ...).
     *
     * Returns a sum of given numbers.
     *
     * @param ast
     * @param formulaAddress
     */
    value: function sum(ast, formulaAddress) {
      var _this = this;

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      return this.reduce(ast, formulaAddress, 0, 'SUM', this.interpreter.arithmeticHelper.nonstrictadd, idMap, function (arg) {
        return _this.coerceScalarToNumberOrError(arg);
      });
    }
  }, {
    key: "sumsq",
    value: function sumsq(ast, formulaAddress) {
      var _this2 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      return this.reduce(ast, formulaAddress, 0, 'SUMSQ', this.interpreter.arithmeticHelper.nonstrictadd, square, function (arg) {
        return _this2.coerceScalarToNumberOrError(arg);
      });
    }
  }, {
    key: "countblank",
    value: function countblank(ast, formulaAddress) {
      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var counter = 0;

      var _iterator = _createForOfIteratorHelper(ast.args),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var arg = _step.value;
          var rangeValue = (0, _ArithmeticHelper.coerceToRange)(this.evaluateAst(arg, formulaAddress));

          var _iterator2 = _createForOfIteratorHelper(rangeValue.valuesFromTopLeftCorner()),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var value = _step2.value;

              if (value === _Cell.EmptyValue) {
                counter++;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return counter;
    }
    /**
     * Corresponds to MAX(Number1, Number2, ...).
     *
     * Returns a max of given numbers.
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "max",
    value: function max(ast, formulaAddress) {
      var _this3 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var value = this.reduce(ast, formulaAddress, Number.NEGATIVE_INFINITY, 'MAX', _ArithmeticHelper.max, idMap, function (arg) {
        return _this3.coerceScalarToNumberOrError(arg);
      });
      return zeroForInfinite(value);
    }
  }, {
    key: "maxa",
    value: function maxa(ast, formulaAddress) {
      var _this4 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var value = this.reduce(ast, formulaAddress, Number.NEGATIVE_INFINITY, 'MAXA', _ArithmeticHelper.maxa, idMap, function (arg) {
        return _this4.coerceScalarToNumberOrError(arg);
      });
      return zeroForInfinite(value);
    }
    /**
     * Corresponds to MIN(Number1, Number2, ...).
     *
     * Returns a min of given numbers.
     *
     * @param ast
     * @param formulaAddress
     */

  }, {
    key: "min",
    value: function min(ast, formulaAddress) {
      var _this5 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var value = this.reduce(ast, formulaAddress, Number.POSITIVE_INFINITY, 'MIN', _ArithmeticHelper.min, idMap, function (arg) {
        return _this5.coerceScalarToNumberOrError(arg);
      });
      return zeroForInfinite(value);
    }
  }, {
    key: "mina",
    value: function mina(ast, formulaAddress) {
      var _this6 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var value = this.reduce(ast, formulaAddress, Number.POSITIVE_INFINITY, 'MINA', _ArithmeticHelper.mina, idMap, function (arg) {
        return _this6.coerceScalarToNumberOrError(arg);
      });
      return zeroForInfinite(value);
    }
  }, {
    key: "count",
    value: function count(ast, formulaAddress) {
      var _this7 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var value = this.reduce(ast, formulaAddress, 0, 'COUNT', function (left, right) {
        return left + right;
      }, function (arg) {
        return typeof arg === 'number' ? 1 : 0;
      }, function (arg) {
        return _this7.coerceScalarToNumberOrError(arg);
      });
      return value;
    }
  }, {
    key: "counta",
    value: function counta(ast, formulaAddress) {
      var _this8 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var value = this.reduce(ast, formulaAddress, 0, 'COUNTA', function (left, right) {
        return left + right;
      }, function (arg) {
        return arg === _Cell.EmptyValue ? 0 : 1;
      }, function (arg) {
        return _this8.coerceScalarToNumberOrError(arg);
      });
      return value;
    }
  }, {
    key: "average",
    value: function average(ast, formulaAddress) {
      var _this9 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var result = this.reduce(ast, formulaAddress, AverageResult.empty, 'AVERAGE', function (left, right) {
        if (left instanceof _Cell.CellError) {
          return left;
        } else if (right instanceof _Cell.CellError) {
          return right;
        } else {
          return left.compose(right);
        }
      }, function (arg) {
        if (arg instanceof _Cell.CellError) {
          return arg;
        } else if (typeof arg === 'number') {
          return AverageResult.single(arg);
        } else {
          return AverageResult.empty;
        }
      }, function (arg) {
        return _this9.coerceScalarToNumberOrError(arg);
      });

      if (result instanceof _Cell.CellError) {
        return result;
      } else {
        return result.averageValue() || new _Cell.CellError(_Cell.ErrorType.DIV_BY_ZERO);
      }
    }
  }, {
    key: "averagea",
    value: function averagea(ast, formulaAddress) {
      var _this10 = this;

      if (ast.args.length < 1) {
        return new _Cell.CellError(_Cell.ErrorType.NA);
      }

      if (ast.args.some(function (ast) {
        return ast.type === _parser.AstNodeType.EMPTY;
      })) {
        return new _Cell.CellError(_Cell.ErrorType.NUM);
      }

      var result = this.reduce(ast, formulaAddress, AverageResult.empty, 'AVERAGE', function (left, right) {
        if (left instanceof _Cell.CellError) {
          return left;
        } else if (right instanceof _Cell.CellError) {
          return right;
        } else {
          return left.compose(right);
        }
      }, function (arg) {
        if (arg === _Cell.EmptyValue) {
          return AverageResult.empty;
        } else if (arg instanceof _Cell.CellError) {
          return arg;
        } else {
          var coercedArg = _this10.interpreter.arithmeticHelper.coerceNonDateScalarToMaybeNumber(arg);

          if (coercedArg === undefined) {
            return AverageResult.empty;
          } else {
            return AverageResult.single(coercedArg);
          }
        }
      }, function (arg) {
        return _this10.coerceScalarToNumberOrError(arg);
      });

      if (result instanceof _Cell.CellError) {
        return result;
      } else {
        return result.averageValue() || new _Cell.CellError(_Cell.ErrorType.DIV_BY_ZERO);
      }
    }
    /**
     * Reduces procedure arguments with given reducing function
     *
     * @param ast - cell range ast
     * @param formulaAddress - address of the cell in which formula is located
     * @param initialAccValue - initial accumulator value for reducing function
     * @param functionName - function name to use as cache key
     * @param reducingFunction - reducing function
     * @param mapFunction
     * @param coerceFunction
     * */

  }, {
    key: "reduce",
    value: function reduce(ast, formulaAddress, initialAccValue, functionName, reducingFunction, mapFunction, coerceFunction) {
      var _this11 = this;

      return ast.args.reduce(function (acc, arg) {
        var value;

        if (arg.type === _parser.AstNodeType.CELL_RANGE || arg.type === _parser.AstNodeType.COLUMN_RANGE || arg.type === _parser.AstNodeType.ROW_RANGE) {
          value = _this11.evaluateRange(arg, formulaAddress, acc, functionName, reducingFunction, mapFunction);
        } else {
          value = _this11.evaluateAst(arg, formulaAddress);

          if (value instanceof _InterpreterValue.SimpleRangeValue) {
            value = _this11.reduceRange(Array.from(value.valuesFromTopLeftCorner()).map(mapFunction), initialAccValue, reducingFunction);
          } else if (arg.type === _parser.AstNodeType.CELL_REFERENCE) {
            value = mapFunction(value);
            value = reducingFunction(initialAccValue, value);
          } else {
            value = coerceFunction(value);
            value = mapFunction(value);
          }
        }

        return reducingFunction(acc, value);
      }, initialAccValue);
    }
    /**
     * Reduces list of cell values with given reducing function
     *
     * @param rangeValues - list of values to reduce
     * @param initialAccValue - initial accumulator value for reducing function
     * @param reducingFunction - reducing function
     */

  }, {
    key: "reduceRange",
    value: function reduceRange(rangeValues, initialAccValue, reducingFunction) {
      var acc = initialAccValue;

      var _iterator3 = _createForOfIteratorHelper(rangeValues),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var val = _step3.value;
          acc = reducingFunction(acc, val);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return acc;
    }
    /**
     * Performs range operation on given range
     *
     * @param ast - cell range ast
     * @param formulaAddress - address of the cell in which formula is located
     * @param initialAccValue - initial accumulator value for reducing function
     * @param functionName - function name to use as cache key
     * @param reducingFunction - reducing function
     */

  }, {
    key: "evaluateRange",
    value: function evaluateRange(ast, formulaAddress, initialAccValue, functionName, reducingFunction, mapFunction) {
      var range;

      try {
        range = _AbsoluteCellRange.AbsoluteCellRange.fromAst(ast, formulaAddress);
      } catch (err) {
        if (err.message === _AbsoluteCellRange.DIFFERENT_SHEETS_ERROR) {
          return mapFunction(new _Cell.CellError(_Cell.ErrorType.REF));
        } else {
          throw err;
        }
      }

      var rangeStart = range.start;
      var rangeEnd = range.end;
      var rangeVertex = this.dependencyGraph.getRange(rangeStart, rangeEnd);

      _assert.default.ok(rangeVertex, 'Range does not exists in graph');

      var value = rangeVertex.getFunctionValue(functionName);

      if (!value) {
        var rangeValues = this.getRangeValues(functionName, range, mapFunction);
        value = this.reduceRange(rangeValues, initialAccValue, reducingFunction);
        rangeVertex.setFunctionValue(functionName, value);
      }

      return value;
    }
    /**
     * Returns list of values for given range and function name
     *
     * If range is dependent on smaller range, list will contain value of smaller range for this function
     * and values of cells that are not present in smaller range
     *
     * @param functionName - function name (e.g. SUM)
     * @param range - cell range
     */

  }, {
    key: "getRangeValues",
    value: function getRangeValues(functionName, range, mapFunction) {
      var rangeResult = [];

      var _this$dependencyGraph = this.dependencyGraph.rangeMapping.findSmallerRange(range),
          smallerRangeVertex = _this$dependencyGraph.smallerRangeVertex,
          restRange = _this$dependencyGraph.restRange;

      var currentRangeVertex = this.dependencyGraph.getRange(range.start, range.end);
      var actualRange;

      if (smallerRangeVertex && this.dependencyGraph.existsEdge(smallerRangeVertex, currentRangeVertex)) {
        var cachedValue = smallerRangeVertex.getFunctionValue(functionName);

        if (cachedValue) {
          rangeResult.push(cachedValue);
        } else {
          var _iterator4 = _createForOfIteratorHelper(smallerRangeVertex.range.addresses(this.dependencyGraph)),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var cellFromRange = _step4.value;
              rangeResult.push(mapFunction(this.dependencyGraph.getScalarValue(cellFromRange)));
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        actualRange = restRange;
      } else {
        actualRange = range;
      }

      var _iterator5 = _createForOfIteratorHelper(actualRange.addresses(this.dependencyGraph)),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _cellFromRange = _step5.value;
          rangeResult.push(mapFunction(this.dependencyGraph.getScalarValue(_cellFromRange)));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return rangeResult;
    }
  }]);

  return NumericAggregationPlugin;
}(_FunctionPlugin2.FunctionPlugin);

exports.NumericAggregationPlugin = NumericAggregationPlugin;
NumericAggregationPlugin.implementedFunctions = {
  'SUM': {
    method: 'sum'
  },
  'SUMSQ': {
    method: 'sumsq'
  },
  'MAX': {
    method: 'max'
  },
  'MIN': {
    method: 'min'
  },
  'MAXA': {
    method: 'maxa'
  },
  'MINA': {
    method: 'mina'
  },
  'COUNTBLANK': {
    method: 'countblank'
  },
  'COUNT': {
    method: 'count'
  },
  'COUNTA': {
    method: 'counta'
  },
  'AVERAGE': {
    method: 'average'
  },
  'AVERAGEA': {
    method: 'averagea'
  }
};