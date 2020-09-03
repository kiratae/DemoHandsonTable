"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.Evaluator = void 0;

var _AbsoluteCellRange = require("./AbsoluteCellRange");

var _absolutizeDependencies = require("./absolutizeDependencies");

var _Cell = require("./Cell");

var _ContentChanges = require("./ContentChanges");

var _DependencyGraph = require("./DependencyGraph");

var _ArithmeticHelper = require("./interpreter/ArithmeticHelper");

var _Interpreter = require("./interpreter/Interpreter");

var _InterpreterValue = require("./interpreter/InterpreterValue");

var _Matrix = require("./Matrix");

var _statistics = require("./statistics");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Evaluator = /*#__PURE__*/function () {
  function Evaluator(dependencyGraph, columnSearch, config, stats, dateHelper, numberLiteralsHelper, functionRegistry, namedExpressions) {
    _classCallCheck(this, Evaluator);

    this.dependencyGraph = dependencyGraph;
    this.columnSearch = columnSearch;
    this.config = config;
    this.stats = stats;
    this.dateHelper = dateHelper;
    this.numberLiteralsHelper = numberLiteralsHelper;
    this.functionRegistry = functionRegistry;
    this.namedExpressions = namedExpressions;
    this.interpreter = new _Interpreter.Interpreter(this.dependencyGraph, this.columnSearch, this.config, this.stats, this.dateHelper, this.numberLiteralsHelper, this.functionRegistry, this.namedExpressions);
  }

  _createClass(Evaluator, [{
    key: "run",
    value: function run() {
      var _this = this;

      this.stats.start(_statistics.StatType.TOP_SORT);

      var _this$dependencyGraph = this.dependencyGraph.topSortWithScc(),
          sorted = _this$dependencyGraph.sorted,
          cycled = _this$dependencyGraph.cycled;

      this.stats.end(_statistics.StatType.TOP_SORT);
      this.stats.measure(_statistics.StatType.EVALUATION, function () {
        _this.recomputeFormulas(cycled, sorted);
      });
    }
  }, {
    key: "partialRun",
    value: function partialRun(vertices) {
      var _this2 = this;

      var changes = new _ContentChanges.ContentChanges();
      this.stats.measure(_statistics.StatType.EVALUATION, function () {
        _this2.dependencyGraph.graph.getTopSortedWithSccSubgraphFrom(vertices, function (vertex) {
          if (vertex instanceof _DependencyGraph.FormulaCellVertex) {
            var address = vertex.getAddress(_this2.dependencyGraph.lazilyTransformingAstService);
            var formula = vertex.getFormula(_this2.dependencyGraph.lazilyTransformingAstService);
            var currentValue = vertex.isComputed() ? vertex.getCellValue() : null;

            var newCellValue = _this2.evaluateAstToCellValue(formula, address);

            vertex.setCellValue(newCellValue);

            if (newCellValue !== currentValue) {
              changes.addChange(newCellValue, address);

              _this2.columnSearch.change(currentValue, newCellValue, address);

              return true;
            }

            return false;
          } else if (vertex instanceof _DependencyGraph.MatrixVertex && vertex.isFormula()) {
            var _address = vertex.getAddress();

            var _formula = vertex.getFormula();

            var _currentValue = vertex.isComputed() ? vertex.getCellValue() : null;

            var _newCellValue = _this2.evaluateAstToRangeValue(_formula, _address);

            if (_newCellValue instanceof _InterpreterValue.SimpleRangeValue) {
              var newCellMatrix = new _Matrix.Matrix(_newCellValue.rawNumbers());
              vertex.setCellValue(newCellMatrix);
              changes.addMatrixChange(newCellMatrix, _address);

              _this2.columnSearch.change(_currentValue, newCellMatrix, _address);
            } else {
              vertex.setErrorValue(_newCellValue);
              changes.addChange(_newCellValue, _address);

              _this2.columnSearch.change(_currentValue, _newCellValue, _address);
            }

            return true;
          } else if (vertex instanceof _DependencyGraph.RangeVertex) {
            vertex.clearCache();
            return true;
          } else {
            return true;
          }
        }, function (vertex) {
          if (vertex instanceof _DependencyGraph.RangeVertex) {
            vertex.clearCache();
          } else if (vertex instanceof _DependencyGraph.FormulaCellVertex) {
            var error = new _Cell.CellError(_Cell.ErrorType.CYCLE);
            vertex.setCellValue(error);
            changes.addChange(error, vertex.address);
          }
        });
      });
      return changes;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.interpreter.destroy();
    }
  }, {
    key: "runAndForget",
    value: function runAndForget(ast, address, dependencies) {
      var _this3 = this;

      var tmpRanges = [];

      var _iterator = _createForOfIteratorHelper((0, _absolutizeDependencies.absolutizeDependencies)(dependencies, address)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dep = _step.value;

          if (dep instanceof _AbsoluteCellRange.AbsoluteCellRange) {
            var range = dep;

            if (this.dependencyGraph.getRange(range.start, range.end) === undefined) {
              var rangeVertex = new _DependencyGraph.RangeVertex(range);
              this.dependencyGraph.rangeMapping.setRange(rangeVertex);
              tmpRanges.push(rangeVertex);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var ret = this.evaluateAstToCellValue(ast, address);
      tmpRanges.forEach(function (rangeVertex) {
        _this3.dependencyGraph.rangeMapping.removeRange(rangeVertex);
      });
      return ret;
    }
    /**
     * Recalculates formulas in the topological sort order
     */

  }, {
    key: "recomputeFormulas",
    value: function recomputeFormulas(cycled, sorted) {
      var _this4 = this;

      cycled.forEach(function (vertex) {
        if (vertex instanceof _DependencyGraph.FormulaCellVertex) {
          vertex.setCellValue(new _Cell.CellError(_Cell.ErrorType.CYCLE));
        }
      });
      sorted.forEach(function (vertex) {
        if (vertex instanceof _DependencyGraph.FormulaCellVertex) {
          var address = vertex.getAddress(_this4.dependencyGraph.lazilyTransformingAstService);
          var formula = vertex.getFormula(_this4.dependencyGraph.lazilyTransformingAstService);

          var newCellValue = _this4.evaluateAstToCellValue(formula, address);

          vertex.setCellValue(newCellValue);

          _this4.columnSearch.add(newCellValue, address);
        } else if (vertex instanceof _DependencyGraph.MatrixVertex && vertex.isFormula()) {
          var _address2 = vertex.getAddress();

          var _formula2 = vertex.getFormula();

          var _newCellValue2 = _this4.evaluateAstToRangeValue(_formula2, _address2);

          if (_newCellValue2 instanceof _InterpreterValue.SimpleRangeValue) {
            var newCellMatrix = new _Matrix.Matrix(_newCellValue2.rawNumbers());
            vertex.setCellValue(newCellMatrix);

            _this4.columnSearch.add(newCellMatrix, _address2);
          } else {
            vertex.setErrorValue(_newCellValue2);

            _this4.columnSearch.add(_newCellValue2, _address2);
          }
        } else if (vertex instanceof _DependencyGraph.RangeVertex) {
          vertex.clearCache();
        }
      });
    }
  }, {
    key: "evaluateAstToCellValue",
    value: function evaluateAstToCellValue(ast, formulaAddress) {
      var interpreterValue = this.interpreter.evaluateAst(ast, formulaAddress);

      if (interpreterValue instanceof _InterpreterValue.SimpleRangeValue) {
        return interpreterValue;
      } else if (typeof interpreterValue === 'number') {
        if ((0, _ArithmeticHelper.isNumberOverflow)(interpreterValue)) {
          return new _Cell.CellError(_Cell.ErrorType.NUM);
        } else {
          return (0, _ArithmeticHelper.fixNegativeZero)(interpreterValue);
        }
      } else {
        return interpreterValue;
      }
    }
  }, {
    key: "evaluateAstToRangeValue",
    value: function evaluateAstToRangeValue(ast, formulaAddress) {
      var interpreterValue = this.interpreter.evaluateAst(ast, formulaAddress);

      if (interpreterValue instanceof _Cell.CellError) {
        return interpreterValue;
      } else if (interpreterValue instanceof _InterpreterValue.SimpleRangeValue && interpreterValue.hasOnlyNumbers()) {
        return interpreterValue;
      } else {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      }
    }
  }]);

  return Evaluator;
}();

exports.Evaluator = Evaluator;