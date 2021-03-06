"use strict";

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

exports.__esModule = true;
exports.buildLexerConfig = exports.WhiteSpace = exports.ErrorLiteral = exports.StringLiteral = exports.NamedExpression = exports.ProcedureName = exports.RParen = exports.LParen = exports.RangeSeparator = exports.RowRange = exports.ColumnRange = exports.CellReference = exports.sheetNameRegexp = exports.additionalCharactersAllowedInQuotes = exports.ConcatenateOp = exports.LessThanOrEqualOp = exports.GreaterThanOrEqualOp = exports.LessThanOp = exports.GreaterThanOp = exports.NotEqualOp = exports.EqualsOp = exports.BooleanOp = exports.PercentOp = exports.PowerOp = exports.DivOp = exports.TimesOp = exports.MultiplicationOp = exports.MinusOp = exports.PlusOp = exports.AdditionOp = void 0;

var _chevrotain = require("chevrotain");

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */

/* arithmetic */
// abstract for + -
var AdditionOp = (0, _chevrotain.createToken)({
  name: 'AdditionOp',
  pattern: _chevrotain.Lexer.NA
});
exports.AdditionOp = AdditionOp;
var PlusOp = (0, _chevrotain.createToken)({
  name: 'PlusOp',
  pattern: /\+/,
  categories: AdditionOp
});
exports.PlusOp = PlusOp;
var MinusOp = (0, _chevrotain.createToken)({
  name: 'MinusOp',
  pattern: /-/,
  categories: AdditionOp
}); // abstract for * /

exports.MinusOp = MinusOp;
var MultiplicationOp = (0, _chevrotain.createToken)({
  name: 'MultiplicationOp',
  pattern: _chevrotain.Lexer.NA
});
exports.MultiplicationOp = MultiplicationOp;
var TimesOp = (0, _chevrotain.createToken)({
  name: 'TimesOp',
  pattern: /\*/,
  categories: MultiplicationOp
});
exports.TimesOp = TimesOp;
var DivOp = (0, _chevrotain.createToken)({
  name: 'DivOp',
  pattern: /\//,
  categories: MultiplicationOp
});
exports.DivOp = DivOp;
var PowerOp = (0, _chevrotain.createToken)({
  name: 'PowerOp',
  pattern: /\^/
});
exports.PowerOp = PowerOp;
var PercentOp = (0, _chevrotain.createToken)({
  name: 'PercentOp',
  pattern: /%/
});
exports.PercentOp = PercentOp;
var BooleanOp = (0, _chevrotain.createToken)({
  name: 'BooleanOp',
  pattern: _chevrotain.Lexer.NA
});
exports.BooleanOp = BooleanOp;
var EqualsOp = (0, _chevrotain.createToken)({
  name: 'EqualsOp',
  pattern: /=/,
  categories: BooleanOp
});
exports.EqualsOp = EqualsOp;
var NotEqualOp = (0, _chevrotain.createToken)({
  name: 'NotEqualOp',
  pattern: /<>/,
  categories: BooleanOp
});
exports.NotEqualOp = NotEqualOp;
var GreaterThanOp = (0, _chevrotain.createToken)({
  name: 'GreaterThanOp',
  pattern: />/,
  categories: BooleanOp
});
exports.GreaterThanOp = GreaterThanOp;
var LessThanOp = (0, _chevrotain.createToken)({
  name: 'LessThanOp',
  pattern: /</,
  categories: BooleanOp
});
exports.LessThanOp = LessThanOp;
var GreaterThanOrEqualOp = (0, _chevrotain.createToken)({
  name: 'GreaterThanOrEqualOp',
  pattern: />=/,
  categories: BooleanOp
});
exports.GreaterThanOrEqualOp = GreaterThanOrEqualOp;
var LessThanOrEqualOp = (0, _chevrotain.createToken)({
  name: 'LessThanOrEqualOp',
  pattern: /<=/,
  categories: BooleanOp
});
exports.LessThanOrEqualOp = LessThanOrEqualOp;
var ConcatenateOp = (0, _chevrotain.createToken)({
  name: 'ConcatenateOp',
  pattern: /&/
});
/* addresses */

exports.ConcatenateOp = ConcatenateOp;
var additionalCharactersAllowedInQuotes = ' '; // It's included in regexps, so escape characters which have special regexp semantics

exports.additionalCharactersAllowedInQuotes = additionalCharactersAllowedInQuotes;
var sheetNameRegexp = "([A-Za-z0-9_\xC0-\u02AF]+|'[A-Za-z0-9".concat(additionalCharactersAllowedInQuotes, "_\xC0-\u02AF]+')!");
exports.sheetNameRegexp = sheetNameRegexp;
var CellReference = (0, _chevrotain.createToken)({
  name: 'CellReference',
  pattern: new RegExp("(".concat(sheetNameRegexp, ")?\\$?[A-Za-z]+\\$?[0-9]+"))
});
exports.CellReference = CellReference;
var ColumnRange = (0, _chevrotain.createToken)({
  name: 'ColumnRange',
  pattern: new RegExp("(".concat(sheetNameRegexp, ")?\\$?[A-Za-z]+:(").concat(sheetNameRegexp, ")?\\$?[A-Za-z]+"))
});
exports.ColumnRange = ColumnRange;
var RowRange = (0, _chevrotain.createToken)({
  name: 'RowRange',
  pattern: new RegExp("(".concat(sheetNameRegexp, ")?\\$?[0-9]+:(").concat(sheetNameRegexp, ")?\\$?[0-9]+"))
});
exports.RowRange = RowRange;
var RangeSeparator = (0, _chevrotain.createToken)({
  name: 'RangeSeparator',
  pattern: /:/
});
/* parenthesis */

exports.RangeSeparator = RangeSeparator;
var LParen = (0, _chevrotain.createToken)({
  name: 'LParen',
  pattern: /\(/
});
exports.LParen = LParen;
var RParen = (0, _chevrotain.createToken)({
  name: 'RParen',
  pattern: /\)/
});
/* prcoedures */

exports.RParen = RParen;
var ProcedureName = (0, _chevrotain.createToken)({
  name: 'ProcedureName',
  pattern: /(\.?[0-9A-Za-z\u00C0-\u02AF]+)+\(/
});
/* named expressions */

exports.ProcedureName = ProcedureName;
var NamedExpression = (0, _chevrotain.createToken)({
  name: 'NamedExpression',
  pattern: /[A-Za-z\u00C0-\u02AF_][0-9\.A-Za-z_\u00C0-\u02AF_]+/
});
/* string literal */

exports.NamedExpression = NamedExpression;
var StringLiteral = (0, _chevrotain.createToken)({
  name: 'StringLiteral',
  pattern: /"([^"\\]*(\\.[^"\\]*)*)"/
});
/* error literal */

exports.StringLiteral = StringLiteral;
var ErrorLiteral = (0, _chevrotain.createToken)({
  name: 'ErrorLiteral',
  pattern: /#[A-Za-z0-9\/]+[?!]?/
});
/* skipping whitespaces */

exports.ErrorLiteral = ErrorLiteral;
var WhiteSpace = (0, _chevrotain.createToken)({
  name: 'WhiteSpace',
  pattern: /[ \t\n\r]+/
});
exports.WhiteSpace = WhiteSpace;

var buildLexerConfig = function buildLexerConfig(config) {
  var offsetProcedureNameLiteral = config.translationPackage.getFunctionTranslation('OFFSET');
  var errorMapping = config.errorMapping;
  var functionMapping = config.translationPackage.buildFunctionMapping();
  /* configurable tokens */

  var ArgSeparator = (0, _chevrotain.createToken)({
    name: 'ArgSeparator',
    pattern: config.functionArgSeparator
  });
  var NumberLiteral = (0, _chevrotain.createToken)({
    name: 'NumberLiteral',
    pattern: new RegExp("[\\d]*[".concat(config.decimalSeparator, "]?[\\d]+"))
  });
  var OffsetProcedureName = (0, _chevrotain.createToken)({
    name: 'OffsetProcedureName',
    pattern: new RegExp(offsetProcedureNameLiteral, 'i')
  });
  /* order is important, first pattern is used */

  var allTokens = [WhiteSpace, PlusOp, MinusOp, TimesOp, DivOp, PowerOp, EqualsOp, NotEqualOp, PercentOp, GreaterThanOrEqualOp, LessThanOrEqualOp, GreaterThanOp, LessThanOp, LParen, RParen, OffsetProcedureName, ProcedureName, RangeSeparator, ArgSeparator, ColumnRange, RowRange, NumberLiteral, StringLiteral, ErrorLiteral, ConcatenateOp, BooleanOp, AdditionOp, MultiplicationOp, CellReference, NamedExpression];
  return {
    ArgSeparator: ArgSeparator,
    NumberLiteral: NumberLiteral,
    OffsetProcedureName: OffsetProcedureName,
    allTokens: allTokens,
    errorMapping: errorMapping,
    functionMapping: functionMapping,
    decimalSeparator: config.decimalSeparator,
    maxColumns: config.maxColumns,
    maxRows: config.maxRows
  };
};

exports.buildLexerConfig = buildLexerConfig;