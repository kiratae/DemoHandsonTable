"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.bindWhitespacesToTokens = bindWhitespacesToTokens;
exports.ParserWithCaching = void 0;

var _chevrotain = require("chevrotain");

var _Cell = require("../Cell");

var _ = require("./");

var _addressRepresentationConverters = require("./addressRepresentationConverters");

var _Ast = require("./Ast");

var _binaryOpTokenMap = require("./binaryOpTokenMap");

var _Cache = require("./Cache");

var _FormulaParser = require("./FormulaParser");

var _LexerConfig = require("./LexerConfig");

var _Unparser = require("./Unparser");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Parses formula using caching if feasible.
 */
var ParserWithCaching = /*#__PURE__*/function () {
  function ParserWithCaching(config, functionRegistry, sheetMapping) {
    _classCallCheck(this, ParserWithCaching);

    this.config = config;
    this.functionRegistry = functionRegistry;
    this.sheetMapping = sheetMapping;
    this.statsCacheUsed = 0;
    this.lexerConfig = (0, _LexerConfig.buildLexerConfig)(config);
    this.lexer = new _FormulaParser.FormulaLexer(this.lexerConfig);
    this.formulaParser = new _FormulaParser.FormulaParser(this.lexerConfig, this.sheetMapping);
    this.cache = new _Cache.Cache(this.functionRegistry);
  }
  /**
   * Parses a formula.
   *
   * @param text - formula to parse
   * @param formulaAddress - address with regard to which formula should be parsed. Impacts computed addresses in R0C0 format.
   */


  _createClass(ParserWithCaching, [{
    key: "parse",
    value: function parse(text, formulaAddress) {
      var lexerResult = this.lexer.tokenizeFormula(text);

      if (lexerResult.errors.length > 0) {
        var errors = lexerResult.errors.map(function (e) {
          return {
            type: _Ast.ParsingErrorType.LexingError,
            message: e.message
          };
        });
        return {
          ast: (0, _.buildParsingErrorAst)(),
          errors: errors,
          hasVolatileFunction: false,
          hasStructuralChangeFunction: false,
          dependencies: []
        };
      }

      var hash = this.computeHashFromTokens(lexerResult.tokens, formulaAddress);
      var cacheResult = this.cache.get(hash);

      if (cacheResult) {
        ++this.statsCacheUsed;
      } else {
        var processedTokens = bindWhitespacesToTokens(lexerResult.tokens);
        var parsingResult = this.formulaParser.parseFromTokens(processedTokens, formulaAddress);

        if (parsingResult.errors.length > 0) {
          return Object.assign(Object.assign({}, parsingResult), {
            hasVolatileFunction: false,
            hasStructuralChangeFunction: false,
            dependencies: []
          });
        } else {
          cacheResult = this.cache.set(hash, parsingResult.ast);
        }
      }

      var _cacheResult = cacheResult,
          ast = _cacheResult.ast,
          hasVolatileFunction = _cacheResult.hasVolatileFunction,
          hasStructuralChangeFunction = _cacheResult.hasStructuralChangeFunction,
          relativeDependencies = _cacheResult.relativeDependencies;
      return {
        ast: ast,
        errors: [],
        hasVolatileFunction: hasVolatileFunction,
        hasStructuralChangeFunction: hasStructuralChangeFunction,
        dependencies: relativeDependencies
      };
    }
  }, {
    key: "fetchCachedResultForAst",
    value: function fetchCachedResultForAst(ast) {
      var hash = this.computeHashFromAst(ast);
      return this.fetchCachedResult(hash);
    }
  }, {
    key: "fetchCachedResult",
    value: function fetchCachedResult(hash) {
      var cacheResult = this.cache.get(hash);

      if (cacheResult === null) {
        throw new Error('There is no AST with such key in the cache');
      } else {
        var ast = cacheResult.ast,
            hasVolatileFunction = cacheResult.hasVolatileFunction,
            hasStructuralChangeFunction = cacheResult.hasStructuralChangeFunction,
            relativeDependencies = cacheResult.relativeDependencies;
        return {
          ast: ast,
          errors: [],
          hasVolatileFunction: hasVolatileFunction,
          hasStructuralChangeFunction: hasStructuralChangeFunction,
          dependencies: relativeDependencies
        };
      }
    }
  }, {
    key: "computeHashFromTokens",
    value: function computeHashFromTokens(tokens, baseAddress) {
      var _a;

      var hash = '';
      var idx = 0;

      while (idx < tokens.length) {
        var token = tokens[idx];

        if ((0, _chevrotain.tokenMatcher)(token, _LexerConfig.CellReference)) {
          var cellAddress = (0, _addressRepresentationConverters.cellAddressFromString)(this.sheetMapping, token.image, baseAddress);

          if (cellAddress === undefined) {
            hash = hash.concat(token.image);
          } else {
            hash = hash.concat(cellAddress.hash(true));
          }
        } else if ((0, _chevrotain.tokenMatcher)(token, _LexerConfig.ProcedureName)) {
          var procedureName = token.image.toUpperCase().slice(0, -1);
          var canonicalProcedureName = (_a = this.lexerConfig.functionMapping[procedureName]) !== null && _a !== void 0 ? _a : procedureName;
          hash = hash.concat(canonicalProcedureName, '(');
        } else if ((0, _chevrotain.tokenMatcher)(token, _LexerConfig.ColumnRange)) {
          var _token$image$split = token.image.split(':'),
              _token$image$split2 = _slicedToArray(_token$image$split, 2),
              start = _token$image$split2[0],
              end = _token$image$split2[1];

          var startAddress = (0, _addressRepresentationConverters.columnAddressFromString)(this.sheetMapping, start, baseAddress);
          var endAddress = (0, _addressRepresentationConverters.columnAddressFromString)(this.sheetMapping, end, baseAddress);

          if (startAddress === undefined || endAddress === undefined) {
            hash = hash.concat('!REF');
          } else {
            hash = hash.concat(startAddress.hash(true), ':', endAddress.hash(true));
          }
        } else if ((0, _chevrotain.tokenMatcher)(token, _LexerConfig.RowRange)) {
          var _token$image$split3 = token.image.split(':'),
              _token$image$split4 = _slicedToArray(_token$image$split3, 2),
              _start = _token$image$split4[0],
              _end = _token$image$split4[1];

          var _startAddress = (0, _addressRepresentationConverters.rowAddressFromString)(this.sheetMapping, _start, baseAddress);

          var _endAddress = (0, _addressRepresentationConverters.rowAddressFromString)(this.sheetMapping, _end, baseAddress);

          if (_startAddress === undefined || _endAddress === undefined) {
            hash = hash.concat('!REF');
          } else {
            hash = hash.concat(_startAddress.hash(true), ':', _endAddress.hash(true));
          }
        } else {
          hash = hash.concat(token.image);
        }

        idx++;
      }

      return hash;
    }
  }, {
    key: "rememberNewAst",
    value: function rememberNewAst(ast) {
      var hash = this.computeHashFromAst(ast);
      return this.cache.maybeSetAndThenGet(hash, ast);
    }
  }, {
    key: "computeHashFromAst",
    value: function computeHashFromAst(ast) {
      return '=' + this.computeHashOfAstNode(ast);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cache.destroy();
    }
  }, {
    key: "computeHashOfAstNode",
    value: function computeHashOfAstNode(ast) {
      var _this = this;

      switch (ast.type) {
        case _.AstNodeType.EMPTY:
          {
            return ast.leadingWhitespace || '';
          }

        case _.AstNodeType.NUMBER:
          {
            return (0, _Ast.imageWithWhitespace)((0, _Unparser.formatNumber)(ast.value, this.config.decimalSeparator), ast.leadingWhitespace);
          }

        case _.AstNodeType.STRING:
          {
            return (0, _Ast.imageWithWhitespace)('"' + ast.value + '"', ast.leadingWhitespace);
          }

        case _.AstNodeType.NAMED_EXPRESSION:
          {
            return (0, _Ast.imageWithWhitespace)(ast.expressionName, ast.leadingWhitespace);
          }

        case _.AstNodeType.FUNCTION_CALL:
          {
            var args = ast.args.map(function (arg) {
              return _this.computeHashOfAstNode(arg);
            }).join(this.config.functionArgSeparator);
            var rightPart = ast.procedureName + '(' + args + (0, _Ast.imageWithWhitespace)(')', ast.internalWhitespace);
            return (0, _Ast.imageWithWhitespace)(rightPart, ast.leadingWhitespace);
          }

        case _.AstNodeType.CELL_REFERENCE:
          {
            return (0, _Ast.imageWithWhitespace)(ast.reference.hash(true), ast.leadingWhitespace);
          }

        case _.AstNodeType.COLUMN_RANGE:
        case _.AstNodeType.ROW_RANGE:
        case _.AstNodeType.CELL_RANGE:
          {
            var start = ast.start.hash(ast.sheetReferenceType !== _Ast.RangeSheetReferenceType.RELATIVE);
            var end = ast.end.hash(ast.sheetReferenceType === _Ast.RangeSheetReferenceType.BOTH_ABSOLUTE);
            return (0, _Ast.imageWithWhitespace)(start + ':' + end, ast.leadingWhitespace);
          }

        case _.AstNodeType.MINUS_UNARY_OP:
          {
            return (0, _Ast.imageWithWhitespace)('-' + this.computeHashOfAstNode(ast.value), ast.leadingWhitespace);
          }

        case _.AstNodeType.PLUS_UNARY_OP:
          {
            return (0, _Ast.imageWithWhitespace)('+' + this.computeHashOfAstNode(ast.value), ast.leadingWhitespace);
          }

        case _.AstNodeType.PERCENT_OP:
          {
            return this.computeHashOfAstNode(ast.value) + (0, _Ast.imageWithWhitespace)('%', ast.leadingWhitespace);
          }

        case _.AstNodeType.ERROR:
          {
            var image = this.config.translationPackage.getErrorTranslation(ast.error ? ast.error.type : _Cell.ErrorType.ERROR);
            return (0, _Ast.imageWithWhitespace)(image, ast.leadingWhitespace);
          }

        case _.AstNodeType.ERROR_WITH_RAW_INPUT:
          {
            return (0, _Ast.imageWithWhitespace)(ast.rawInput, ast.leadingWhitespace);
          }

        case _.AstNodeType.PARENTHESIS:
          {
            var expression = this.computeHashOfAstNode(ast.expression);

            var _rightPart = '(' + expression + (0, _Ast.imageWithWhitespace)(')', ast.internalWhitespace);

            return (0, _Ast.imageWithWhitespace)(_rightPart, ast.leadingWhitespace);
          }

        default:
          {
            return this.computeHashOfAstNode(ast.left) + (0, _Ast.imageWithWhitespace)(_binaryOpTokenMap.binaryOpTokenMap[ast.type], ast.leadingWhitespace) + this.computeHashOfAstNode(ast.right);
          }
      }
    }
  }]);

  return ParserWithCaching;
}();

exports.ParserWithCaching = ParserWithCaching;

function bindWhitespacesToTokens(tokens) {
  var processedTokens = [];
  var first = tokens[0];

  if (!(0, _chevrotain.tokenMatcher)(first, _LexerConfig.WhiteSpace)) {
    processedTokens.push(first);
  }

  for (var i = 1; i < tokens.length; ++i) {
    var current = tokens[i];

    if ((0, _chevrotain.tokenMatcher)(current, _LexerConfig.WhiteSpace)) {
      continue;
    }

    var previous = tokens[i - 1];

    if ((0, _chevrotain.tokenMatcher)(previous, _LexerConfig.WhiteSpace)) {
      current.leadingWhitespace = previous;
    }

    processedTokens.push(current);
  }

  return processedTokens;
}