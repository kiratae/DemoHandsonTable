"use strict";

require("core-js/modules/es.array.every");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.starts-with");

exports.__esModule = true;
exports.formatToken = formatToken;
exports.parseForDateTimeFormat = parseForDateTimeFormat;
exports.parseForNumberFormat = parseForNumberFormat;
exports.parse = parse;
exports.isEscapeToken = isEscapeToken;
exports.FormatExpressionType = exports.TokenType = void 0;

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dateFormatRegex = /(\\.|dd|DD|d|D|mm|MM|m|M|YYYY|YY|yyyy|yy|HH|hh|H|h|ss(\.(0+|s+))?|s|AM\/PM|am\/pm|A\/P|a\/p|\[mm]|\[MM]|\[hh]|\[HH])/g;
var numberFormatRegex = /(\\.|[#0]+(\.[#0]*)?)/g;
var TokenType;
exports.TokenType = TokenType;

(function (TokenType) {
  TokenType["FORMAT"] = "FORMAT";
  TokenType["FREE_TEXT"] = "FREE_TEXT";
})(TokenType || (exports.TokenType = TokenType = {}));

function formatToken(type, value) {
  return {
    type: type,
    value: value
  };
}

var FormatExpressionType;
exports.FormatExpressionType = FormatExpressionType;

(function (FormatExpressionType) {
  FormatExpressionType["DATE"] = "DATE";
  FormatExpressionType["NUMBER"] = "NUMBER";
  FormatExpressionType["STRING"] = "STRING";
})(FormatExpressionType || (exports.FormatExpressionType = FormatExpressionType = {}));

function matchDateFormat(str) {
  dateFormatRegex.lastIndex = 0;
  var tokens = [];
  var m;

  do {
    m = dateFormatRegex.exec(str);

    if (m !== null) {
      tokens.push(m);
    }
  } while (m);

  return tokens;
}

function matchNumberFormat(str) {
  numberFormatRegex.lastIndex = 0;
  var numberFormatToken = numberFormatRegex.exec(str);

  if (numberFormatToken !== null) {
    return [numberFormatToken];
  } else {
    return [];
  }
}

function createTokens(regexTokens, str) {
  var tokens = [];
  var start = 0;

  for (var i = 0; i < regexTokens.length; ++i) {
    var token = regexTokens[i];

    if (token.index !== start) {
      var beforeToken = str.substr(start, token.index - start);
      tokens.push(formatToken(TokenType.FREE_TEXT, beforeToken));
    }

    if (token[0].startsWith('\\')) {
      tokens.push(formatToken(TokenType.FREE_TEXT, token[0]));
    } else {
      tokens.push(formatToken(TokenType.FORMAT, token[0]));
    }

    start = token.index + token[0].length;
  }

  var lastToken = regexTokens[regexTokens.length - 1];

  if (lastToken.index + lastToken[0].length < str.length) {
    var afterLastToken = str.substr(lastToken.index + lastToken[0].length, str.length);
    tokens.push(formatToken(TokenType.FREE_TEXT, afterLastToken));
  }

  return tokens;
}

function parseForDateTimeFormat(str) {
  var dateFormatTokens = matchDateFormat(str);

  if (dateFormatTokens.every(function (elem) {
    return isEscapeToken(elem);
  })) {
    return undefined;
  } else {
    return {
      type: FormatExpressionType.DATE,
      tokens: createTokens(dateFormatTokens, str)
    };
  }
}

function parseForNumberFormat(str) {
  var numberFormatTokens = matchNumberFormat(str);

  if (numberFormatTokens.every(function (elem) {
    return isEscapeToken(elem);
  })) {
    return undefined;
  } else {
    return {
      type: FormatExpressionType.NUMBER,
      tokens: createTokens(numberFormatTokens, str)
    };
  }
}

function parse(str) {
  var _a, _b;

  return (_b = (_a = parseForDateTimeFormat(str)) !== null && _a !== void 0 ? _a : parseForNumberFormat(str)) !== null && _b !== void 0 ? _b : {
    type: FormatExpressionType.STRING,
    tokens: [{
      type: TokenType.FREE_TEXT,
      value: str
    }]
  };
}

function isEscapeToken(token) {
  return token[0].startsWith('\\');
}