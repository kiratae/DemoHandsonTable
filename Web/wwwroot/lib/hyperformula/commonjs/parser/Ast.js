"use strict";

require("core-js/modules/es.array.slice");

exports.__esModule = true;
exports.imageWithWhitespace = imageWithWhitespace;
exports.buildParsingErrorAst = exports.buildErrorWithRawInputAst = exports.buildCellErrorAst = exports.buildParenthesisAst = exports.buildNamedExpressionAst = exports.buildProcedureAst = exports.buildPercentOpAst = exports.buildPlusUnaryOpAst = exports.buildMinusUnaryOpAst = exports.buildPowerOpAst = exports.buildDivOpAst = exports.buildTimesOpAst = exports.buildMinusOpAst = exports.buildPlusOpAst = exports.buildLessThanOrEqualOpAst = exports.buildGreaterThanOrEqualOpAst = exports.buildLessThanOpAst = exports.buildGreaterThanOpAst = exports.buildNotEqualOpAst = exports.buildEqualsOpAst = exports.buildConcatenateOpAst = exports.buildRowRangeAst = exports.buildColumnRangeAst = exports.buildCellRangeAst = exports.buildCellReferenceAst = exports.buildStringAst = exports.buildNumberAst = exports.buildEmptyArgAst = exports.RangeSheetReferenceType = exports.AstNodeType = exports.ParsingErrorType = exports.parsingError = void 0;

var _Cell = require("../Cell");

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var parsingError = function parsingError(type, message) {
  return {
    type: type,
    message: message
  };
};

exports.parsingError = parsingError;
var ParsingErrorType;
exports.ParsingErrorType = ParsingErrorType;

(function (ParsingErrorType) {
  ParsingErrorType["LexingError"] = "LexingError";
  ParsingErrorType["ParserError"] = "ParsingError";
  ParsingErrorType["StaticOffsetError"] = "StaticOffsetError";
  ParsingErrorType["StaticOffsetOutOfRangeError"] = "StaticOffsetOutOfRangeError";
  ParsingErrorType["RangeOffsetNotAllowed"] = "RangeOffsetNotAllowed";
})(ParsingErrorType || (exports.ParsingErrorType = ParsingErrorType = {}));

var AstNodeType;
exports.AstNodeType = AstNodeType;

(function (AstNodeType) {
  AstNodeType["EMPTY"] = "EMPTY";
  AstNodeType["NUMBER"] = "NUMBER";
  AstNodeType["STRING"] = "STRING";
  AstNodeType["MINUS_UNARY_OP"] = "MINUS_UNARY_OP";
  AstNodeType["PLUS_UNARY_OP"] = "PLUS_UNARY_OP";
  AstNodeType["PERCENT_OP"] = "PERCENT_OP";
  AstNodeType["CONCATENATE_OP"] = "CONCATENATE_OP";
  AstNodeType["EQUALS_OP"] = "EQUALS_OP";
  AstNodeType["NOT_EQUAL_OP"] = "NOT_EQUAL_OP";
  AstNodeType["GREATER_THAN_OP"] = "GREATER_THAN_OP";
  AstNodeType["LESS_THAN_OP"] = "LESS_THAN_OP";
  AstNodeType["GREATER_THAN_OR_EQUAL_OP"] = "GREATER_THAN_OR_EQUAL_OP";
  AstNodeType["LESS_THAN_OR_EQUAL_OP"] = "LESS_THAN_OR_EQUAL_OP";
  AstNodeType["PLUS_OP"] = "PLUS_OP";
  AstNodeType["MINUS_OP"] = "MINUS_OP";
  AstNodeType["TIMES_OP"] = "TIMES_OP";
  AstNodeType["DIV_OP"] = "DIV_OP";
  AstNodeType["POWER_OP"] = "POWER_OP";
  AstNodeType["FUNCTION_CALL"] = "FUNCTION_CALL";
  AstNodeType["NAMED_EXPRESSION"] = "NAMED_EXPRESSION";
  AstNodeType["PARENTHESIS"] = "PARENTHESES";
  AstNodeType["CELL_REFERENCE"] = "CELL_REFERENCE";
  AstNodeType["CELL_RANGE"] = "CELL_RANGE";
  AstNodeType["COLUMN_RANGE"] = "COLUMN_RANGE";
  AstNodeType["ROW_RANGE"] = "ROW_RANGE";
  AstNodeType["ERROR"] = "ERROR";
  AstNodeType["ERROR_WITH_RAW_INPUT"] = "ERROR_WITH_RAW_INPUT";
})(AstNodeType || (exports.AstNodeType = AstNodeType = {}));

var RangeSheetReferenceType;
exports.RangeSheetReferenceType = RangeSheetReferenceType;

(function (RangeSheetReferenceType) {
  RangeSheetReferenceType[RangeSheetReferenceType["RELATIVE"] = 0] = "RELATIVE";
  RangeSheetReferenceType[RangeSheetReferenceType["START_ABSOLUTE"] = 1] = "START_ABSOLUTE";
  RangeSheetReferenceType[RangeSheetReferenceType["BOTH_ABSOLUTE"] = 2] = "BOTH_ABSOLUTE";
})(RangeSheetReferenceType || (exports.RangeSheetReferenceType = RangeSheetReferenceType = {}));

var buildEmptyArgAst = function buildEmptyArgAst(leadingWhitespace) {
  return {
    type: AstNodeType.EMPTY,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildEmptyArgAst = buildEmptyArgAst;

var buildNumberAst = function buildNumberAst(value, leadingWhitespace) {
  return {
    type: AstNodeType.NUMBER,
    value: value,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildNumberAst = buildNumberAst;

var buildStringAst = function buildStringAst(token) {
  var _a;

  return {
    type: AstNodeType.STRING,
    value: token.image.slice(1, -1),
    leadingWhitespace: (_a = token.leadingWhitespace) === null || _a === void 0 ? void 0 : _a.image
  };
};

exports.buildStringAst = buildStringAst;

var buildCellReferenceAst = function buildCellReferenceAst(reference, leadingWhitespace) {
  return {
    type: AstNodeType.CELL_REFERENCE,
    reference: reference,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildCellReferenceAst = buildCellReferenceAst;

var buildCellRangeAst = function buildCellRangeAst(start, end, sheetReferenceType, leadingWhitespace) {
  assertRangeConsistency(start, end, sheetReferenceType);
  return {
    type: AstNodeType.CELL_RANGE,
    start: start,
    end: end,
    sheetReferenceType: sheetReferenceType,
    leadingWhitespace: leadingWhitespace
  };
};

exports.buildCellRangeAst = buildCellRangeAst;

var buildColumnRangeAst = function buildColumnRangeAst(start, end, sheetReferenceType, leadingWhitespace) {
  assertRangeConsistency(start, end, sheetReferenceType);
  return {
    type: AstNodeType.COLUMN_RANGE,
    start: start,
    end: end,
    sheetReferenceType: sheetReferenceType,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildColumnRangeAst = buildColumnRangeAst;

var buildRowRangeAst = function buildRowRangeAst(start, end, sheetReferenceType, leadingWhitespace) {
  assertRangeConsistency(start, end, sheetReferenceType);
  return {
    type: AstNodeType.ROW_RANGE,
    start: start,
    end: end,
    sheetReferenceType: sheetReferenceType,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildRowRangeAst = buildRowRangeAst;

var buildConcatenateOpAst = function buildConcatenateOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.CONCATENATE_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildConcatenateOpAst = buildConcatenateOpAst;

var buildEqualsOpAst = function buildEqualsOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.EQUALS_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildEqualsOpAst = buildEqualsOpAst;

var buildNotEqualOpAst = function buildNotEqualOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.NOT_EQUAL_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildNotEqualOpAst = buildNotEqualOpAst;

var buildGreaterThanOpAst = function buildGreaterThanOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.GREATER_THAN_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildGreaterThanOpAst = buildGreaterThanOpAst;

var buildLessThanOpAst = function buildLessThanOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.LESS_THAN_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildLessThanOpAst = buildLessThanOpAst;

var buildGreaterThanOrEqualOpAst = function buildGreaterThanOrEqualOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.GREATER_THAN_OR_EQUAL_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildGreaterThanOrEqualOpAst = buildGreaterThanOrEqualOpAst;

var buildLessThanOrEqualOpAst = function buildLessThanOrEqualOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.LESS_THAN_OR_EQUAL_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildLessThanOrEqualOpAst = buildLessThanOrEqualOpAst;

var buildPlusOpAst = function buildPlusOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.PLUS_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildPlusOpAst = buildPlusOpAst;

var buildMinusOpAst = function buildMinusOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.MINUS_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildMinusOpAst = buildMinusOpAst;

var buildTimesOpAst = function buildTimesOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.TIMES_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildTimesOpAst = buildTimesOpAst;

var buildDivOpAst = function buildDivOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.DIV_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildDivOpAst = buildDivOpAst;

var buildPowerOpAst = function buildPowerOpAst(left, right, leadingWhitespace) {
  return {
    type: AstNodeType.POWER_OP,
    left: left,
    right: right,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildPowerOpAst = buildPowerOpAst;

var buildMinusUnaryOpAst = function buildMinusUnaryOpAst(value, leadingWhitespace) {
  return {
    type: AstNodeType.MINUS_UNARY_OP,
    value: value,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildMinusUnaryOpAst = buildMinusUnaryOpAst;

var buildPlusUnaryOpAst = function buildPlusUnaryOpAst(value, leadingWhitespace) {
  return {
    type: AstNodeType.PLUS_UNARY_OP,
    value: value,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildPlusUnaryOpAst = buildPlusUnaryOpAst;

var buildPercentOpAst = function buildPercentOpAst(value, leadingWhitespace) {
  return {
    type: AstNodeType.PERCENT_OP,
    value: value,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildPercentOpAst = buildPercentOpAst;

var buildProcedureAst = function buildProcedureAst(procedureName, args, leadingWhitespace, internalWhitespace) {
  return {
    type: AstNodeType.FUNCTION_CALL,
    procedureName: procedureName,
    args: args,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image,
    internalWhitespace: internalWhitespace === null || internalWhitespace === void 0 ? void 0 : internalWhitespace.image
  };
};

exports.buildProcedureAst = buildProcedureAst;

var buildNamedExpressionAst = function buildNamedExpressionAst(expressionName, leadingWhitespace) {
  return {
    type: AstNodeType.NAMED_EXPRESSION,
    expressionName: expressionName,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildNamedExpressionAst = buildNamedExpressionAst;

var buildParenthesisAst = function buildParenthesisAst(expression, leadingWhitespace, internalWhitespace) {
  return {
    type: AstNodeType.PARENTHESIS,
    expression: expression,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image,
    internalWhitespace: internalWhitespace === null || internalWhitespace === void 0 ? void 0 : internalWhitespace.image
  };
};

exports.buildParenthesisAst = buildParenthesisAst;

var buildCellErrorAst = function buildCellErrorAst(error, leadingWhitespace) {
  return {
    type: AstNodeType.ERROR,
    error: error,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildCellErrorAst = buildCellErrorAst;

var buildErrorWithRawInputAst = function buildErrorWithRawInputAst(rawInput, error, leadingWhitespace) {
  return {
    type: AstNodeType.ERROR_WITH_RAW_INPUT,
    error: error,
    rawInput: rawInput,
    leadingWhitespace: leadingWhitespace === null || leadingWhitespace === void 0 ? void 0 : leadingWhitespace.image
  };
};

exports.buildErrorWithRawInputAst = buildErrorWithRawInputAst;

var buildParsingErrorAst = function buildParsingErrorAst() {
  return {
    type: AstNodeType.ERROR,
    error: _Cell.CellError.parsingError()
  };
};

exports.buildParsingErrorAst = buildParsingErrorAst;

function assertRangeConsistency(start, end, sheetReferenceType) {
  if (start.sheet !== null && end.sheet === null || start.sheet === null && end.sheet !== null) {
    throw new Error('Start address inconsistent with end address');
  }

  if (start.sheet === null && sheetReferenceType !== RangeSheetReferenceType.RELATIVE || start.sheet !== null && sheetReferenceType === RangeSheetReferenceType.RELATIVE) {
    throw new Error('Sheet address inconsistent with sheet reference type');
  }
}

function imageWithWhitespace(image, leadingWhitespace) {
  return (leadingWhitespace !== null && leadingWhitespace !== void 0 ? leadingWhitespace : '') + image;
}