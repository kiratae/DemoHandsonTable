"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.Interpreter = void 0;

var _gpu = _interopRequireDefault(require("gpu.js"));

var _AbsoluteCellRange = require("../AbsoluteCellRange");

var _Cell = require("../Cell");

var _Matrix = require("../Matrix");

var _Ast = require("../parser/Ast");

var _ArithmeticHelper = require("./ArithmeticHelper");

var _Criterion = require("./Criterion");

var _InterpreterValue = require("./InterpreterValue");

var _text = require("./text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interpreter = /*#__PURE__*/function () {
  function Interpreter(dependencyGraph, columnSearch, config, stats, dateHelper, numberLiteralsHelper, functionRegistry, namedExpressions) {
    _classCallCheck(this, Interpreter);

    this.dependencyGraph = dependencyGraph;
    this.columnSearch = columnSearch;
    this.config = config;
    this.stats = stats;
    this.dateHelper = dateHelper;
    this.numberLiteralsHelper = numberLiteralsHelper;
    this.functionRegistry = functionRegistry;
    this.namedExpressions = namedExpressions;
    this.functionRegistry.initializePlugins(this);
    this.arithmeticHelper = new _ArithmeticHelper.ArithmeticHelper(config, dateHelper, numberLiteralsHelper);
    this.criterionBuilder = new _Criterion.CriterionBuilder(config);
  }
  /**
   * Calculates cell value from formula abstract syntax tree
   *
   * @param formula - abstract syntax tree of formula
   * @param formulaAddress - address of the cell in which formula is located
   */


  _createClass(Interpreter, [{
    key: "evaluateAst",
    value: function evaluateAst(ast, formulaAddress) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

      switch (ast.type) {
        case _Ast.AstNodeType.EMPTY:
          {
            throw new Error('Empty argument should not be evaluated.');
          }

        case _Ast.AstNodeType.CELL_REFERENCE:
          {
            var address = ast.reference.toSimpleCellAddress(formulaAddress);

            if ((0, _Cell.invalidSimpleCellAddress)(address)) {
              return new _Cell.CellError(_Cell.ErrorType.REF);
            }

            return this.dependencyGraph.getCellValue(address);
          }

        case _Ast.AstNodeType.NUMBER:
        case _Ast.AstNodeType.STRING:
          {
            return ast.value;
          }

        case _Ast.AstNodeType.CONCATENATE_OP:
          {
            var left = this.evaluateAst(ast.left, formulaAddress);
            var right = this.evaluateAst(ast.right, formulaAddress);
            return (0, _text.concatenate)([left, right]);
          }

        case _Ast.AstNodeType.EQUALS_OP:
          {
            var leftResult = this.evaluateAst(ast.left, formulaAddress);
            var rightResult = this.evaluateAst(ast.right, formulaAddress);
            return (_a = this.passErrors(leftResult, rightResult)) !== null && _a !== void 0 ? _a : this.arithmeticHelper.compare(leftResult, rightResult) === 0;
          }

        case _Ast.AstNodeType.NOT_EQUAL_OP:
          {
            var _leftResult = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult = this.evaluateAst(ast.right, formulaAddress);

            return (_b = this.passErrors(_leftResult, _rightResult)) !== null && _b !== void 0 ? _b : this.arithmeticHelper.compare(_leftResult, _rightResult) !== 0;
          }

        case _Ast.AstNodeType.GREATER_THAN_OP:
          {
            var _leftResult2 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult2 = this.evaluateAst(ast.right, formulaAddress);

            return (_c = this.passErrors(_leftResult2, _rightResult2)) !== null && _c !== void 0 ? _c : this.arithmeticHelper.compare(_leftResult2, _rightResult2) > 0;
          }

        case _Ast.AstNodeType.LESS_THAN_OP:
          {
            var _leftResult3 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult3 = this.evaluateAst(ast.right, formulaAddress);

            return (_d = this.passErrors(_leftResult3, _rightResult3)) !== null && _d !== void 0 ? _d : this.arithmeticHelper.compare(_leftResult3, _rightResult3) < 0;
          }

        case _Ast.AstNodeType.GREATER_THAN_OR_EQUAL_OP:
          {
            var _leftResult4 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult4 = this.evaluateAst(ast.right, formulaAddress);

            return (_e = this.passErrors(_leftResult4, _rightResult4)) !== null && _e !== void 0 ? _e : this.arithmeticHelper.compare(_leftResult4, _rightResult4) >= 0;
          }

        case _Ast.AstNodeType.LESS_THAN_OR_EQUAL_OP:
          {
            var _leftResult5 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult5 = this.evaluateAst(ast.right, formulaAddress);

            return (_f = this.passErrors(_leftResult5, _rightResult5)) !== null && _f !== void 0 ? _f : this.arithmeticHelper.compare(_leftResult5, _rightResult5) <= 0;
          }

        case _Ast.AstNodeType.PLUS_OP:
          {
            var _leftResult6 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult6 = this.evaluateAst(ast.right, formulaAddress);

            return (_g = this.passErrors(_leftResult6, _rightResult6)) !== null && _g !== void 0 ? _g : this.arithmeticHelper.add(this.arithmeticHelper.coerceScalarToNumberOrError(_leftResult6), this.arithmeticHelper.coerceScalarToNumberOrError(_rightResult6));
          }

        case _Ast.AstNodeType.MINUS_OP:
          {
            var _leftResult7 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult7 = this.evaluateAst(ast.right, formulaAddress);

            return (_h = this.passErrors(_leftResult7, _rightResult7)) !== null && _h !== void 0 ? _h : this.arithmeticHelper.subtract(this.arithmeticHelper.coerceScalarToNumberOrError(_leftResult7), this.arithmeticHelper.coerceScalarToNumberOrError(_rightResult7));
          }

        case _Ast.AstNodeType.TIMES_OP:
          {
            var _leftResult8 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult8 = this.evaluateAst(ast.right, formulaAddress);

            return (_j = this.passErrors(_leftResult8, _rightResult8)) !== null && _j !== void 0 ? _j : (0, _ArithmeticHelper.multiply)(this.arithmeticHelper.coerceScalarToNumberOrError(_leftResult8), this.arithmeticHelper.coerceScalarToNumberOrError(_rightResult8));
          }

        case _Ast.AstNodeType.POWER_OP:
          {
            var _leftResult9 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult9 = this.evaluateAst(ast.right, formulaAddress);

            return (_k = this.passErrors(_leftResult9, _rightResult9)) !== null && _k !== void 0 ? _k : (0, _ArithmeticHelper.power)(this.arithmeticHelper.coerceScalarToNumberOrError(_leftResult9), this.arithmeticHelper.coerceScalarToNumberOrError(_rightResult9));
          }

        case _Ast.AstNodeType.DIV_OP:
          {
            var _leftResult10 = this.evaluateAst(ast.left, formulaAddress);

            var _rightResult10 = this.evaluateAst(ast.right, formulaAddress);

            return (_l = this.passErrors(_leftResult10, _rightResult10)) !== null && _l !== void 0 ? _l : (0, _ArithmeticHelper.divide)(this.arithmeticHelper.coerceScalarToNumberOrError(_leftResult10), this.arithmeticHelper.coerceScalarToNumberOrError(_rightResult10));
          }

        case _Ast.AstNodeType.PLUS_UNARY_OP:
          {
            var result = this.evaluateAst(ast.value, formulaAddress);

            if (result instanceof _InterpreterValue.SimpleRangeValue) {
              return new _Cell.CellError(_Cell.ErrorType.VALUE);
            } else {
              return result;
            }
          }

        case _Ast.AstNodeType.MINUS_UNARY_OP:
          {
            var _result = this.evaluateAst(ast.value, formulaAddress);

            if (_result instanceof _InterpreterValue.SimpleRangeValue) {
              return new _Cell.CellError(_Cell.ErrorType.VALUE);
            } else {
              return (0, _ArithmeticHelper.unaryminus)(this.arithmeticHelper.coerceScalarToNumberOrError(_result));
            }
          }

        case _Ast.AstNodeType.PERCENT_OP:
          {
            var _result2 = this.evaluateAst(ast.value, formulaAddress);

            if (_result2 instanceof _InterpreterValue.SimpleRangeValue) {
              return new _Cell.CellError(_Cell.ErrorType.VALUE);
            } else {
              return (0, _ArithmeticHelper.percent)(this.arithmeticHelper.coerceScalarToNumberOrError(_result2));
            }
          }

        case _Ast.AstNodeType.FUNCTION_CALL:
          {
            var pluginEntry = this.functionRegistry.getFunction(ast.procedureName);

            if (pluginEntry && this.config.translationPackage.isFunctionTranslated(ast.procedureName)) {
              var _pluginEntry = _slicedToArray(pluginEntry, 2),
                  pluginFunction = _pluginEntry[0],
                  pluginInstance = _pluginEntry[1];

              return pluginInstance[pluginFunction](ast, formulaAddress);
            } else {
              return new _Cell.CellError(_Cell.ErrorType.NAME);
            }
          }

        case _Ast.AstNodeType.NAMED_EXPRESSION:
          {
            var namedExpression = this.namedExpressions.nearestNamedExpression(ast.expressionName, formulaAddress.sheet);

            if (namedExpression) {
              return this.dependencyGraph.getCellValue(namedExpression.address);
            } else {
              return new _Cell.CellError(_Cell.ErrorType.NAME);
            }
          }

        case _Ast.AstNodeType.CELL_RANGE:
          {
            if (!this.rangeSpansOneSheet(ast)) {
              return new _Cell.CellError(_Cell.ErrorType.REF);
            }

            var range = _AbsoluteCellRange.AbsoluteCellRange.fromCellRange(ast, formulaAddress);

            var matrixVertex = this.dependencyGraph.getMatrix(range);

            if (matrixVertex) {
              var matrix = matrixVertex.matrix;

              if (matrix instanceof _Matrix.NotComputedMatrix) {
                throw new Error('Matrix should be already computed');
              } else if (matrix instanceof _Cell.CellError) {
                return matrix;
              } else if (matrix instanceof _Matrix.Matrix) {
                return _InterpreterValue.SimpleRangeValue.onlyNumbersDataWithRange(matrix.raw(), matrix.size, range);
              } else {
                throw new Error('Unknown matrix');
              }
            } else {
              return _InterpreterValue.SimpleRangeValue.onlyRange(range, this.dependencyGraph);
            }
          }

        case _Ast.AstNodeType.COLUMN_RANGE:
          {
            if (!this.rangeSpansOneSheet(ast)) {
              return new _Cell.CellError(_Cell.ErrorType.REF);
            }

            var _range = _AbsoluteCellRange.AbsoluteColumnRange.fromColumnRange(ast, formulaAddress);

            return _InterpreterValue.SimpleRangeValue.onlyRange(_range, this.dependencyGraph);
          }

        case _Ast.AstNodeType.ROW_RANGE:
          {
            if (!this.rangeSpansOneSheet(ast)) {
              return new _Cell.CellError(_Cell.ErrorType.REF);
            }

            var _range2 = _AbsoluteCellRange.AbsoluteRowRange.fromRowRange(ast, formulaAddress);

            return _InterpreterValue.SimpleRangeValue.onlyRange(_range2, this.dependencyGraph);
          }

        case _Ast.AstNodeType.PARENTHESIS:
          {
            return this.evaluateAst(ast.expression, formulaAddress);
          }

        case _Ast.AstNodeType.ERROR_WITH_RAW_INPUT:
        case _Ast.AstNodeType.ERROR:
          {
            return ast.error;
          }
      }
    }
  }, {
    key: "getGpuInstance",
    value: function getGpuInstance() {
      if (!this.gpu) {
        var GPUConstructor = _gpu.default.GPU || _gpu.default;
        this.gpu = new GPUConstructor({
          mode: this.config.gpuMode
        });
      }

      return this.gpu;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.gpu) {
        this.gpu.destroy();
      }
    }
  }, {
    key: "rangeSpansOneSheet",
    value: function rangeSpansOneSheet(ast) {
      return ast.start.sheet === ast.end.sheet;
    }
  }, {
    key: "passErrors",
    value: function passErrors(left, right) {
      if (left instanceof _Cell.CellError) {
        return left;
      } else if (left instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      } else if (right instanceof _Cell.CellError) {
        return right;
      } else if (right instanceof _InterpreterValue.SimpleRangeValue) {
        return new _Cell.CellError(_Cell.ErrorType.VALUE);
      } else {
        return undefined;
      }
    }
  }]);

  return Interpreter;
}();

exports.Interpreter = Interpreter;