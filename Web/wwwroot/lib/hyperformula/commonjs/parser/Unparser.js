"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

exports.__esModule = true;
exports.formatNumber = formatNumber;
exports.Unparser = void 0;

var _Cell = require("../Cell");

var _Ast = require("./Ast");

var _binaryOpTokenMap = require("./binaryOpTokenMap");

var _LexerConfig = require("./LexerConfig");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Unparser = /*#__PURE__*/function () {
  function Unparser(config, lexerConfig, sheetMappingFn, namedExpressions) {
    _classCallCheck(this, Unparser);

    this.config = config;
    this.lexerConfig = lexerConfig;
    this.sheetMappingFn = sheetMappingFn;
    this.namedExpressions = namedExpressions;
  }

  _createClass(Unparser, [{
    key: "unparse",
    value: function unparse(ast, address) {
      return '=' + this.unparseAst(ast, address);
    }
  }, {
    key: "unparseAst",
    value: function unparseAst(ast, address) {
      var _this = this;

      var _a;

      switch (ast.type) {
        case _Ast.AstNodeType.EMPTY:
          {
            return (0, _Ast.imageWithWhitespace)('', ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.NUMBER:
          {
            return (0, _Ast.imageWithWhitespace)(formatNumber(ast.value, this.config.decimalSeparator), ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.STRING:
          {
            return (0, _Ast.imageWithWhitespace)('"' + ast.value + '"', ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.FUNCTION_CALL:
          {
            var args = ast.args.map(function (arg) {
              return arg !== undefined ? _this.unparseAst(arg, address) : '';
            }).join(this.config.functionArgSeparator);
            var procedureName = this.config.translationPackage.isFunctionTranslated(ast.procedureName) ? this.config.translationPackage.getFunctionTranslation(ast.procedureName) : ast.procedureName;
            var rightPart = procedureName + '(' + args + (0, _Ast.imageWithWhitespace)(')', ast.internalWhitespace);
            return (0, _Ast.imageWithWhitespace)(rightPart, ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.NAMED_EXPRESSION:
          {
            var originalNamedExpressionName = (_a = this.namedExpressions.nearestNamedExpression(ast.expressionName, address.sheet)) === null || _a === void 0 ? void 0 : _a.displayName;
            return (0, _Ast.imageWithWhitespace)(originalNamedExpressionName || ast.expressionName, ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.CELL_REFERENCE:
          {
            var image;

            if (ast.reference.sheet !== null) {
              image = this.unparseSheetName(ast.reference.sheet) + '!' + ast.reference.unparse(address);
            } else {
              image = ast.reference.unparse(address);
            }

            return (0, _Ast.imageWithWhitespace)(image, ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.COLUMN_RANGE:
        case _Ast.AstNodeType.ROW_RANGE:
        case _Ast.AstNodeType.CELL_RANGE:
          {
            return (0, _Ast.imageWithWhitespace)(this.formatRange(ast, address), ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.PLUS_UNARY_OP:
          {
            var unparsedExpr = this.unparseAst(ast.value, address);
            return (0, _Ast.imageWithWhitespace)('+', ast.leadingWhitespace) + unparsedExpr;
          }

        case _Ast.AstNodeType.MINUS_UNARY_OP:
          {
            var _unparsedExpr = this.unparseAst(ast.value, address);

            return (0, _Ast.imageWithWhitespace)('-', ast.leadingWhitespace) + _unparsedExpr;
          }

        case _Ast.AstNodeType.PERCENT_OP:
          {
            return this.unparseAst(ast.value, address) + (0, _Ast.imageWithWhitespace)('%', ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.ERROR:
          {
            var _image = this.config.translationPackage.getErrorTranslation(ast.error ? ast.error.type : _Cell.ErrorType.ERROR);

            return (0, _Ast.imageWithWhitespace)(_image, ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.ERROR_WITH_RAW_INPUT:
          {
            return (0, _Ast.imageWithWhitespace)(ast.rawInput, ast.leadingWhitespace);
          }

        case _Ast.AstNodeType.PARENTHESIS:
          {
            var expression = this.unparseAst(ast.expression, address);

            var _rightPart = '(' + expression + (0, _Ast.imageWithWhitespace)(')', ast.internalWhitespace);

            return (0, _Ast.imageWithWhitespace)(_rightPart, ast.leadingWhitespace);
          }

        default:
          {
            var left = this.unparseAst(ast.left, address);
            var right = this.unparseAst(ast.right, address);
            return left + (0, _Ast.imageWithWhitespace)(_binaryOpTokenMap.binaryOpTokenMap[ast.type], ast.leadingWhitespace) + right;
          }
      }
    }
  }, {
    key: "unparseSheetName",
    value: function unparseSheetName(sheetId) {
      var sheet = this.sheetMappingFn(sheetId);

      if (new RegExp(_LexerConfig.additionalCharactersAllowedInQuotes).exec(sheet)) {
        return "'".concat(sheet, "'");
      } else {
        return sheet;
      }
    }
  }, {
    key: "formatRange",
    value: function formatRange(ast, baseAddress) {
      var startSheeet = '';
      var endSheet = '';

      if (ast.start.sheet !== null && ast.sheetReferenceType !== _Ast.RangeSheetReferenceType.RELATIVE) {
        startSheeet = this.unparseSheetName(ast.start.sheet) + '!';
      }

      if (ast.end.sheet !== null && ast.sheetReferenceType === _Ast.RangeSheetReferenceType.BOTH_ABSOLUTE) {
        endSheet = this.unparseSheetName(ast.end.sheet) + '!';
      }

      return "".concat(startSheeet).concat(ast.start.unparse(baseAddress), ":").concat(endSheet).concat(ast.end.unparse(baseAddress));
    }
  }]);

  return Unparser;
}();

exports.Unparser = Unparser;

function formatNumber(number, decimalSeparator) {
  var numericString = number.toString();
  return numericString.replace('.', decimalSeparator);
}