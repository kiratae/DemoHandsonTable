"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.reverse");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.buildMatrixVertex = buildMatrixVertex;
exports.MatrixDetectionStrategy = exports.SimpleStrategy = exports.GraphBuilder = void 0;

var _absolutizeDependencies = require("./absolutizeDependencies");

var _Cell = require("./Cell");

var _CellContentParser = require("./CellContentParser");

var _DependencyGraph = require("./DependencyGraph");

var _GraphBuilderMatrixHeuristic = require("./GraphBuilderMatrixHeuristic");

var _Matrix = require("./Matrix");

var _statistics = require("./statistics");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Service building the graph and mappings.
 */
var GraphBuilder = /*#__PURE__*/function () {
  /**
   * Configures the building service.
   *
   * @param graph - graph instance in which we want to add vertices and edges
   * @param addressMapping - mapping from addresses to vertices
   * @param rangeMapping - mapping from ranges to range vertices
   * @param stats - dependency tracking building performance
   * @param config - configuration of the sheet
   */
  function GraphBuilder(dependencyGraph, columnSearch, parser, cellContentParser, config, stats) {
    _classCallCheck(this, GraphBuilder);

    this.dependencyGraph = dependencyGraph;
    this.columnSearch = columnSearch;
    this.parser = parser;
    this.cellContentParser = cellContentParser;
    this.config = config;
    this.stats = stats;

    if (this.config.matrixDetection) {
      this.buildStrategy = new MatrixDetectionStrategy(this.dependencyGraph, this.columnSearch, this.parser, this.stats, config.matrixDetectionThreshold, this.cellContentParser);
    } else {
      this.buildStrategy = new SimpleStrategy(this.dependencyGraph, this.columnSearch, this.parser, this.stats, this.cellContentParser);
    }
  }
  /**
   * Builds graph.
   *
   * @param sheet - two-dimensional array representation of sheet
   */


  _createClass(GraphBuilder, [{
    key: "buildGraph",
    value: function buildGraph(sheets) {
      var dependencies = this.buildStrategy.run(sheets);
      this.processDependencies(dependencies);
    }
  }, {
    key: "processDependencies",
    value: function processDependencies(dependencies) {
      var _this = this;

      dependencies.forEach(function (cellDependencies, endVertex) {
        _this.dependencyGraph.processCellDependencies(cellDependencies, endVertex);
      });
    }
  }]);

  return GraphBuilder;
}();

exports.GraphBuilder = GraphBuilder;

var SimpleStrategy = /*#__PURE__*/function () {
  function SimpleStrategy(dependencyGraph, columnIndex, parser, stats, cellContentParser) {
    _classCallCheck(this, SimpleStrategy);

    this.dependencyGraph = dependencyGraph;
    this.columnIndex = columnIndex;
    this.parser = parser;
    this.stats = stats;
    this.cellContentParser = cellContentParser;
  }

  _createClass(SimpleStrategy, [{
    key: "run",
    value: function run(sheets) {
      var _this2 = this;

      var dependencies = new Map();

      for (var sheetName in sheets) {
        var sheetId = this.dependencyGraph.getSheetId(sheetName);
        var sheet = sheets[sheetName];

        for (var i = 0; i < sheet.length; ++i) {
          var row = sheet[i];

          var _loop = function _loop(j) {
            var cellContent = row[j];
            var address = (0, _Cell.simpleCellAddress)(sheetId, j, i);

            var parsedCellContent = _this2.cellContentParser.parse(cellContent);

            if (parsedCellContent instanceof _CellContentParser.CellContent.MatrixFormula) {
              if (_this2.dependencyGraph.existsVertex(address)) {
                return "continue";
              }

              var parseResult = _this2.stats.measure(_statistics.StatType.PARSER, function () {
                return _this2.parser.parse(parsedCellContent.formula, address);
              });

              if (parseResult.errors.length > 0) {
                var vertex = new _DependencyGraph.ParsingErrorVertex(parseResult.errors, parsedCellContent.formulaWithBraces());

                _this2.dependencyGraph.addVertex(address, vertex);
              } else {
                var _vertex = buildMatrixVertex(parseResult.ast, address);

                dependencies.set(_vertex, (0, _absolutizeDependencies.absolutizeDependencies)(parseResult.dependencies, address));

                _this2.dependencyGraph.addMatrixVertex(address, _vertex);
              }
            } else if (parsedCellContent instanceof _CellContentParser.CellContent.Formula) {
              var _parseResult = _this2.stats.measure(_statistics.StatType.PARSER, function () {
                return _this2.parser.parse(parsedCellContent.formula, address);
              });

              if (_parseResult.errors.length > 0) {
                var _vertex2 = new _DependencyGraph.ParsingErrorVertex(_parseResult.errors, parsedCellContent.formula);

                _this2.dependencyGraph.addVertex(address, _vertex2);
              } else {
                var _vertex3 = new _DependencyGraph.FormulaCellVertex(_parseResult.ast, address, 0);

                dependencies.set(_vertex3, (0, _absolutizeDependencies.absolutizeDependencies)(_parseResult.dependencies, address));

                _this2.dependencyGraph.addVertex(address, _vertex3);

                if (_parseResult.hasVolatileFunction) {
                  _this2.dependencyGraph.markAsVolatile(_vertex3);
                }

                if (_parseResult.hasStructuralChangeFunction) {
                  _this2.dependencyGraph.markAsDependentOnStructureChange(_vertex3);
                }
              }
            } else if (parsedCellContent instanceof _CellContentParser.CellContent.Empty) {
              /* we don't care about empty cells here */
            } else {
              var _vertex4 = new _DependencyGraph.ValueCellVertex(parsedCellContent.value);

              _this2.columnIndex.add(parsedCellContent.value, address);

              _this2.dependencyGraph.addVertex(address, _vertex4);
            }
          };

          for (var j = 0; j < row.length; ++j) {
            var _ret = _loop(j);

            if (_ret === "continue") continue;
          }
        }
      }

      return dependencies;
    }
  }]);

  return SimpleStrategy;
}();

exports.SimpleStrategy = SimpleStrategy;

var MatrixDetectionStrategy = /*#__PURE__*/function () {
  function MatrixDetectionStrategy(dependencyGraph, columnSearch, parser, stats, threshold, cellContentParser) {
    _classCallCheck(this, MatrixDetectionStrategy);

    this.dependencyGraph = dependencyGraph;
    this.columnSearch = columnSearch;
    this.parser = parser;
    this.stats = stats;
    this.threshold = threshold;
    this.cellContentParser = cellContentParser;
  }

  _createClass(MatrixDetectionStrategy, [{
    key: "run",
    value: function run(sheets) {
      var _this3 = this;

      var dependencies = new Map();
      var matrixHeuristic = new _GraphBuilderMatrixHeuristic.GraphBuilderMatrixHeuristic(this.dependencyGraph, this.columnSearch, this.threshold, this.cellContentParser);

      for (var sheetName in sheets) {
        var sheetId = this.dependencyGraph.getSheetId(sheetName);
        var sheet = sheets[sheetName];
        matrixHeuristic.addSheet(sheetId, {
          width: this.dependencyGraph.getSheetWidth(sheetId),
          height: this.dependencyGraph.getSheetHeight(sheetId)
        });

        for (var i = 0; i < sheet.length; ++i) {
          var row = sheet[i];

          var _loop2 = function _loop2(j) {
            var cellContent = row[j];
            var address = (0, _Cell.simpleCellAddress)(sheetId, j, i);

            var parsedCellContent = _this3.cellContentParser.parse(cellContent);

            if (parsedCellContent instanceof _CellContentParser.CellContent.MatrixFormula) {
              if (_this3.dependencyGraph.existsVertex(address)) {
                return "continue";
              }

              var parseResult = _this3.stats.measure(_statistics.StatType.PARSER, function () {
                return _this3.parser.parse(parsedCellContent.formula, address);
              });

              if (parseResult.errors.length > 0) {
                var vertex = new _DependencyGraph.ParsingErrorVertex(parseResult.errors, parsedCellContent.formulaWithBraces());

                _this3.dependencyGraph.addVertex(address, vertex);
              } else {
                var _vertex5 = buildMatrixVertex(parseResult.ast, address);

                dependencies.set(_vertex5, (0, _absolutizeDependencies.absolutizeDependencies)(parseResult.dependencies, address));

                _this3.dependencyGraph.addMatrixVertex(address, _vertex5);
              }
            } else if (parsedCellContent instanceof _CellContentParser.CellContent.Formula) {
              var _parseResult2 = _this3.stats.measure(_statistics.StatType.PARSER, function () {
                return _this3.parser.parse(parsedCellContent.formula, address);
              });

              if (_parseResult2.errors.length > 0) {
                var _vertex6 = new _DependencyGraph.ParsingErrorVertex(_parseResult2.errors, parsedCellContent.formula);

                _this3.dependencyGraph.addVertex(address, _vertex6);
              } else {
                var _vertex7 = new _DependencyGraph.FormulaCellVertex(_parseResult2.ast, address, 0);

                dependencies.set(_vertex7, (0, _absolutizeDependencies.absolutizeDependencies)(_parseResult2.dependencies, address));

                _this3.dependencyGraph.addVertex(address, _vertex7);
              }
            } else if (parsedCellContent instanceof _CellContentParser.CellContent.Empty) {
              /* we don't care about empty cells here */
            } else if (parsedCellContent instanceof _CellContentParser.CellContent.Number) {
              matrixHeuristic.add(address);
            } else {
              var _vertex8 = new _DependencyGraph.ValueCellVertex(parsedCellContent.value);

              _this3.columnSearch.add(parsedCellContent.value, address);

              _this3.dependencyGraph.addVertex(address, _vertex8);
            }
          };

          for (var j = 0; j < row.length; ++j) {
            var _ret2 = _loop2(j);

            if (_ret2 === "continue") continue;
          }
        }
      }

      this.stats.start(_statistics.StatType.MATRIX_DETECTION);
      var notMatrices = matrixHeuristic.run(sheets);

      for (var _i = notMatrices.length - 1; _i >= 0; --_i) {
        var elem = notMatrices[_i];

        var _iterator = _createForOfIteratorHelper(elem.cells.reverse()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var address = _step.value;
            var value = sheets[this.dependencyGraph.getSheetName(address.sheet)][address.row][address.col];
            var vertex = new _DependencyGraph.ValueCellVertex(Number(value));
            this.columnSearch.add(Number(value), address);
            this.dependencyGraph.addVertex(address, vertex);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.stats.end(_statistics.StatType.MATRIX_DETECTION);
      return dependencies;
    }
  }]);

  return MatrixDetectionStrategy;
}();

exports.MatrixDetectionStrategy = MatrixDetectionStrategy;

function buildMatrixVertex(ast, formulaAddress) {
  var size = (0, _Matrix.checkMatrixSize)(ast, formulaAddress);

  if (size instanceof _Cell.CellError) {
    return new _DependencyGraph.ValueCellVertex(size);
  }

  return new _DependencyGraph.MatrixVertex(formulaAddress, size.width, size.height, ast);
}