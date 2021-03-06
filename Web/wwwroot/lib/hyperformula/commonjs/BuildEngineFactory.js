"use strict";

exports.__esModule = true;
exports.BuildEngineFactory = void 0;

var _LazilyTransformingAstService = require("./LazilyTransformingAstService");

var _CellContentParser = require("./CellContentParser");

var _CellValue = require("./CellValue");

var _ColumnSearchStrategy = require("./ColumnSearch/ColumnSearchStrategy");

var _Config = require("./Config");

var _DateTimeHelper = require("./DateTimeHelper");

var _CrudOperations = require("./CrudOperations");

var _DependencyGraph = require("./DependencyGraph");

var _Evaluator = require("./Evaluator");

var _GraphBuilder = require("./GraphBuilder");

var _i18n = require("./i18n");

var _NamedExpressions = require("./NamedExpressions");

var _NumberLiteralHelper = require("./NumberLiteralHelper");

var _parser = require("./parser");

var _Serialization = require("./Serialization");

var _statistics = require("./statistics");

var _errors = require("./errors");

var _Sheet = require("./Sheet");

var _FunctionRegistry = require("./interpreter/FunctionRegistry");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BuildEngineFactory = /*#__PURE__*/function () {
  function BuildEngineFactory() {
    _classCallCheck(this, BuildEngineFactory);
  }

  _createClass(BuildEngineFactory, null, [{
    key: "buildEngine",
    value: function buildEngine(config) {
      var sheets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var stats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config.useStats ? new _statistics.Statistics() : new _statistics.EmptyStatistics();
      stats.start(_statistics.StatType.BUILD_ENGINE_TOTAL);
      var namedExpressions = new _NamedExpressions.NamedExpressions();
      var functionRegistry = new _FunctionRegistry.FunctionRegistry(config);
      var lazilyTransformingAstService = new _LazilyTransformingAstService.LazilyTransformingAstService(stats);

      var dependencyGraph = _DependencyGraph.DependencyGraph.buildEmpty(lazilyTransformingAstService, config, functionRegistry, namedExpressions, stats);

      var columnSearch = (0, _ColumnSearchStrategy.buildColumnSearchStrategy)(dependencyGraph, config, stats);
      var sheetMapping = dependencyGraph.sheetMapping;
      var addressMapping = dependencyGraph.addressMapping;

      for (var sheetName in sheets) {
        if (Object.prototype.hasOwnProperty.call(sheets, sheetName)) {
          var sheet = sheets[sheetName];
          (0, _Sheet.validateAsSheet)(sheet);
          var boundaries = (0, _Sheet.findBoundaries)(sheet);

          if (boundaries.height > config.maxRows || boundaries.width > config.maxColumns) {
            throw new _errors.SheetSizeLimitExceededError();
          }

          var sheetId = sheetMapping.addSheet(sheetName);
          addressMapping.autoAddSheet(sheetId, sheet, boundaries);
        }
      }

      var parser = new _parser.ParserWithCaching(config, functionRegistry, sheetMapping.get);
      var unparser = new _parser.Unparser(config, (0, _parser.buildLexerConfig)(config), sheetMapping.fetchDisplayName, namedExpressions);
      var dateHelper = new _DateTimeHelper.DateTimeHelper(config);
      var numberLiteralHelper = new _NumberLiteralHelper.NumberLiteralHelper(config);
      var cellContentParser = new _CellContentParser.CellContentParser(config, dateHelper, numberLiteralHelper);
      var crudOperations = new _CrudOperations.CrudOperations(config, stats, dependencyGraph, columnSearch, parser, cellContentParser, lazilyTransformingAstService, namedExpressions);
      stats.measure(_statistics.StatType.GRAPH_BUILD, function () {
        var graphBuilder = new _GraphBuilder.GraphBuilder(dependencyGraph, columnSearch, parser, cellContentParser, config, stats);
        graphBuilder.buildGraph(sheets);
      });
      lazilyTransformingAstService.undoRedo = crudOperations.undoRedo;
      lazilyTransformingAstService.parser = parser;
      var evaluator = new _Evaluator.Evaluator(dependencyGraph, columnSearch, config, stats, dateHelper, numberLiteralHelper, functionRegistry, namedExpressions);
      evaluator.run();
      var exporter = new _CellValue.Exporter(config, namedExpressions);
      var serialization = new _Serialization.Serialization(dependencyGraph, unparser, config, exporter);
      stats.end(_statistics.StatType.BUILD_ENGINE_TOTAL);
      return {
        config: config,
        stats: stats,
        dependencyGraph: dependencyGraph,
        columnSearch: columnSearch,
        parser: parser,
        unparser: unparser,
        cellContentParser: cellContentParser,
        evaluator: evaluator,
        lazilyTransformingAstService: lazilyTransformingAstService,
        crudOperations: crudOperations,
        exporter: exporter,
        namedExpressions: namedExpressions,
        serialization: serialization,
        functionRegistry: functionRegistry
      };
    }
  }, {
    key: "buildFromSheets",
    value: function buildFromSheets(sheets, configInput) {
      var config = new _Config.Config(configInput);
      return this.buildEngine(config, sheets);
    }
  }, {
    key: "buildFromSheet",
    value: function buildFromSheet(sheet, configInput) {
      var config = new _Config.Config(configInput);
      var newsheetprefix = config.translationPackage.getUITranslation(_i18n.UIElement.NEW_SHEET_PREFIX) + '1';
      return this.buildEngine(config, _defineProperty({}, newsheetprefix, sheet));
    }
  }, {
    key: "buildEmpty",
    value: function buildEmpty(configInput) {
      return this.buildEngine(new _Config.Config(configInput));
    }
  }, {
    key: "rebuildWithConfig",
    value: function rebuildWithConfig(config, sheets, stats) {
      return this.buildEngine(config, sheets, stats);
    }
  }]);

  return BuildEngineFactory;
}();

exports.BuildEngineFactory = BuildEngineFactory;