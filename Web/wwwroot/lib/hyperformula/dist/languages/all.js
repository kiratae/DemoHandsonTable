(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("hyperformula"));
	else if(typeof define === 'function' && define.amd)
		define(["hyperformula"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("hyperformula")) : factory(root["HyperFormula"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DĚLENÍ_NULOU!',
    ERROR: '#ERROR!',
    NA: '#NENÍ_K_DISPOZICI',
    NAME: '#NÁZEV?',
    NUM: '#ČÍSLO!',
    REF: '#ODKAZ!',
    VALUE: '#HODNOTA!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    AND: 'A',
    ASIN: 'ARCSIN',
    ATAN: 'ARCTG',
    ATAN2: 'ARCTG2',
    AVERAGE: 'PRŮMĚR',
    AVERAGEA: 'AVERAGEA',
    AVERAGEIF: 'AVERAGEIF',
    BASE: 'BASE',
    BIN2DEC: 'BIN2DEC',
    BIN2HEX: 'BIN2HEX',
    BIN2OCT: 'BIN2OCT',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'ZAOKR.NAHORU',
    CHAR: 'ZNAK',
    CHOOSE: 'ZVOLIT',
    CODE: 'KÓD',
    COLUMNS: 'SLOUPCE',
    CONCATENATE: 'CONCATENATE',
    CORREL: 'CORREL',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'POČET',
    COUNTA: 'POČET2',
    COUNTBLANK: 'COUNTBLANK',
    COUNTIF: 'COUNTIF',
    COUNTIFS: 'COUNTIFS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATUM',
    DAY: 'DEN',
    DAYS: 'DAYS',
    DEC2BIN: 'DEC2BIN',
    DEC2HEX: 'DEC2HEX',
    DEC2OCT: 'DEC2OCT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'DEGREES',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'EOMONTH',
    ERF: 'ERF',
    ERFC: 'ERFC',
    EVEN: 'ZAOKROUHLIT.NA.SUDÉ',
    EXP: 'EXP',
    FALSE: 'NEPRAVDA',
    IF: 'KDYŽ',
    IFERROR: 'IFERROR',
    IFNA: 'IFNA',
    INDEX: 'INDEX',
    INT: 'CELÁ.ČÁST',
    ISBLANK: 'JE.PRÁZDNÉ',
    ISERROR: 'JE.CHYBHODN',
    ISEVEN: 'ISEVEN',
    ISLOGICAL: 'JE.LOGHODN',
    ISNONTEXT: 'JE.NETEXT',
    ISNUMBER: 'JE.ČISLO',
    ISODD: 'ISODD',
    ISTEXT: 'JE.TEXT',
    LN: 'LN',
    LOG: 'LOGZ',
    LOG10: 'LOG',
    MATCH: 'POZVYHLEDAT',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'SOUČIN.MATIC',
    MOD: 'MOD',
    MONTH: 'MĚSÍC',
    NOT: 'NE',
    ODD: 'ZAOKROUHLIT.NA.LICHÉ',
    OFFSET: 'POSUN',
    OR: 'NEBO',
    PI: 'PI',
    POWER: 'POWER',
    RADIANS: 'RADIANS',
    RAND: 'NÁHČÍSLO',
    ROUND: 'ZAOKROUHLIT',
    ROUNDDOWN: 'ROUNDDOWN',
    ROUNDUP: 'ROUNDUP',
    ROWS: 'ŘÁDKY',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'ODMOCNINA',
    SUM: 'SUMA',
    SUMIF: 'SUMIF',
    SUMIFS: 'SUMIFS',
    SUMPRODUCT: 'SOUČIN.SKALÁRNÍ',
    SUMSQ: 'SUMA.ČTVERCŮ',
    SWITCH: '',
    TAN: 'TG',
    TEXT: 'HODNOTA.NA.TEXT',
    TRANSPOSE: 'TRANSPOZICE',
    TRUE: 'PRAVDA',
    TRUNC: 'USEKNOUT',
    VLOOKUP: 'SVYHLEDAT',
    XOR: 'XOR',
    YEAR: 'ROK'
  },
  langCode: 'csCZ',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIVISION/0!',
    ERROR: '#ERROR!',
    NA: '#I/T',
    NAME: '#NAVN?',
    NUM: '#NUMMER!',
    REF: '#REFERENCE!',
    VALUE: '#VÆRDI!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    AND: 'OG',
    ASIN: 'ARCSIN',
    ATAN: 'ARCTAN',
    ATAN2: 'ARCTAN2',
    AVERAGE: 'MIDDEL',
    AVERAGEA: 'MIDDELV',
    AVERAGEIF: 'MIDDEL.HVIS',
    BASE: 'BASIS',
    BIN2DEC: 'BIN.TIL.DEC',
    BIN2HEX: 'BIN.TIL.HEX',
    BIN2OCT: 'BIN.TIL.OKT',
    BITAND: 'BITOG',
    BITLSHIFT: 'BITLSKIFT',
    BITOR: 'BITELLER',
    BITRSHIFT: 'BITRSKIFT',
    BITXOR: 'BITXELLER',
    CEILING: 'AFRUND.LOFT',
    CHAR: 'CHAR',
    CHOOSE: 'VÆLG',
    CODE: 'KODE',
    COLUMNS: 'KOLONNER',
    CONCATENATE: 'SAMMENKÆDNING',
    CORREL: 'KORRELATION',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'TÆL',
    COUNTA: 'TÆLV',
    COUNTBLANK: 'ANTAL.BLANKE',
    COUNTIF: 'TÆL.HVIS',
    COUNTIFS: 'TÆL.HVISER',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATO',
    DAY: 'DAG',
    DAYS: 'DAGE',
    DEC2BIN: 'DEC.TIL.BIN',
    DEC2HEX: 'DEC.TIL.HEX',
    DEC2OCT: 'DEC.TIL.OKT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'GRADER',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'SLUT.PÅ.MÅNED',
    ERF: 'FEJLFUNK',
    ERFC: 'FEJLFUNK.KOMP',
    EVEN: 'LIGE',
    EXP: 'EKSP',
    FALSE: 'FALSE',
    IF: 'HVIS',
    IFERROR: 'HVIS.FEJL',
    IFNA: 'HVISIT',
    INDEX: 'INDEKS',
    INT: 'HELTAL',
    ISBLANK: 'ER.TOM',
    ISERROR: 'ER.FEJL',
    ISEVEN: 'ER.LIGE',
    ISLOGICAL: 'ER.LOGISK',
    ISNONTEXT: 'ER.IKKE.TEKST',
    ISNUMBER: 'ER.TAL',
    ISODD: 'ER.ULIGE',
    ISTEXT: 'ER.TEKST',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'SAMMENLIGN',
    MAX: 'MAKS',
    MAXA: 'MAKSV',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINV',
    MMULT: 'MPRODUKT',
    MOD: 'REST',
    MONTH: 'MÅNED',
    NOT: 'IKKE',
    ODD: 'ULIGE',
    OFFSET: 'FORSKYDNING',
    OR: 'ELLER',
    PI: 'PI',
    POWER: 'POTENS',
    RADIANS: 'RADIANER',
    RAND: 'SLUMP',
    ROUND: 'AFRUND',
    ROUNDDOWN: 'RUND.NED',
    ROUNDUP: 'RUND.OP',
    ROWS: 'RÆKKER',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'KVROD',
    SUM: 'SUM',
    SUMIF: 'SUM.HVIS',
    SUMIFS: 'SUM.HVISER',
    SUMPRODUCT: 'SUMPRODUKT',
    SUMSQ: 'SUMKV',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEKST',
    TRANSPOSE: 'TRANSPONER',
    TRUE: 'TRUE',
    TRUNC: 'AFKORT',
    VLOOKUP: 'LOPSLAG',
    XOR: 'XELLER',
    YEAR: 'ÅR'
  },
  langCode: 'daDK',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIV/0!',
    ERROR: '#ERROR!',
    NA: '#NV',
    NAME: '#NAME?',
    NUM: '#ZAHL!',
    REF: '#BEZUG!',
    VALUE: '#WERT!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    AND: 'UND',
    ASIN: 'ARCSIN',
    ATAN: 'ARCTAN',
    ATAN2: 'ARCTAN2',
    AVERAGE: 'MITTELWERT',
    AVERAGEA: 'MITTELWERTA',
    AVERAGEIF: 'MITTELWERTWENN',
    BASE: 'BASIS',
    BIN2DEC: 'BININDEZ',
    BIN2HEX: 'BININHEX',
    BIN2OCT: 'BININOKT',
    BITAND: 'BITUND',
    BITLSHIFT: 'BITLVERSCHIEB',
    BITOR: 'BITODER',
    BITRSHIFT: 'BITRVERSCHIEB',
    BITXOR: 'BITXODER',
    CEILING: 'OBERGRENZE',
    CHAR: 'ZEICHEN',
    CHOOSE: 'WAHL',
    CODE: 'CODE',
    COLUMNS: 'SPALTEN',
    CONCATENATE: 'VERKETTEN',
    CORREL: 'KORREL',
    COS: 'COS',
    COT: 'COTAN',
    COUNT: 'ANZAHL',
    COUNTA: 'ANZAHL2',
    COUNTBLANK: 'ANZAHLLEEREZELLEN',
    COUNTIF: 'ZÄHLENWENN',
    COUNTIFS: 'ZÄHLENWENNS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATUM',
    DAY: 'TAG',
    DAYS: 'TAGE',
    DEC2BIN: 'DEZINBIN',
    DEC2HEX: 'DEZINHEX',
    DEC2OCT: 'DEZINOKT',
    DECIMAL: 'DEZIMAL',
    DEGREES: 'GRAD',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'MONATSENDE',
    ERF: 'GAUSSFEHLER',
    ERFC: 'GAUSSFKOMPL',
    EVEN: 'GERADE',
    EXP: 'EXP',
    FALSE: 'FALSCH',
    IF: 'WENN',
    IFERROR: 'WENNFEHLER',
    IFNA: 'WENNNV',
    INDEX: 'INDEX',
    INT: 'GANZZAHL',
    ISBLANK: 'ISTLEER',
    ISERROR: 'ISTFEHLER',
    ISEVEN: 'ISTGERADE',
    ISLOGICAL: 'ISTLOG',
    ISNONTEXT: 'ISTKTEXT',
    ISNUMBER: 'ISTZAHL',
    ISODD: 'ISTUNGERADE',
    ISTEXT: 'ISTTEXT',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'VERGLEICH',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'MMULT',
    MOD: 'REST',
    MONTH: 'MONAT',
    NOT: 'NICHT',
    ODD: 'UNGERADE',
    OFFSET: 'BEREICH.VERSCHIEBEN',
    OR: 'ODER',
    PI: 'PI',
    POWER: 'POTENZ',
    RADIANS: 'BOGENMASS',
    RAND: 'ZUFALLSZAHL',
    ROUND: 'RUNDEN',
    ROUNDDOWN: 'ABRUNDEN',
    ROUNDUP: 'AUFRUNDEN',
    ROWS: 'ZEILEN',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'WURZEL',
    SUM: 'SUMME',
    SUMIF: 'SUMMEWENN',
    SUMIFS: 'SUMMEWENNS',
    SUMPRODUCT: 'SUMMENPRODUKT',
    SUMSQ: 'QUADRATESUMME',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEXT',
    TRANSPOSE: 'MTRANS',
    TRUE: 'WAHR',
    TRUNC: 'KÜRZEN',
    VLOOKUP: 'SVERWEIS',
    XOR: 'XODER',
    YEAR: 'JAHR'
  },
  langCode: 'deDE',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIV/0!',
    ERROR: '#ERROR!',
    NA: '#N/A',
    NAME: '#NAME?',
    NUM: '#NUM!',
    REF: '#REF!',
    VALUE: '#VALUE!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ACOS',
    AND: 'AND',
    ASIN: 'ASIN',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'AVERAGE',
    AVERAGEA: 'AVERAGEA',
    AVERAGEIF: 'AVERAGEIF',
    BASE: 'BASE',
    BIN2DEC: 'BIN2DEC',
    BIN2HEX: 'BIN2HEX',
    BIN2OCT: 'BIN2OCT',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'CEILING',
    CHAR: 'CHAR',
    CHOOSE: 'CHOOSE',
    CODE: 'CODE',
    COLUMNS: 'COLUMNS',
    CONCATENATE: 'CONCATENATE',
    CORREL: 'CORREL',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'COUNT',
    COUNTA: 'COUNTA',
    COUNTBLANK: 'COUNTBLANK',
    COUNTIF: 'COUNTIF',
    COUNTIFS: 'COUNTIFS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATE',
    DAY: 'DAY',
    DAYS: 'DAYS',
    DEC2BIN: 'DEC2BIN',
    DEC2HEX: 'DEC2HEX',
    DEC2OCT: 'DEC2OCT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'DEGREES',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'EOMONTH',
    ERF: 'ERF',
    ERFC: 'ERFC',
    EVEN: 'EVEN',
    EXP: 'EXP',
    FALSE: 'FALSE',
    IF: 'IF',
    IFERROR: 'IFERROR',
    IFNA: 'IFNA',
    INDEX: 'INDEX',
    INT: 'INT',
    ISBLANK: 'ISBLANK',
    ISERROR: 'ISERROR',
    ISEVEN: 'ISEVEN',
    ISLOGICAL: 'ISLOGICAL',
    ISNONTEXT: 'ISNONTEXT',
    ISNUMBER: 'ISNUMBER',
    ISODD: 'ISODD',
    ISTEXT: 'ISTEXT',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'MATCH',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'MMULT',
    MOD: 'MOD',
    MONTH: 'MONTH',
    NOT: 'NOT',
    ODD: 'ODD',
    OFFSET: 'OFFSET',
    OR: 'OR',
    PI: 'PI',
    POWER: 'POWER',
    RADIANS: 'RADIANS',
    RAND: 'RAND',
    ROUND: 'ROUND',
    ROUNDDOWN: 'ROUNDDOWN',
    ROUNDUP: 'ROUNDUP',
    ROWS: 'ROWS',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'SQRT',
    SUM: 'SUM',
    SUMIF: 'SUMIF',
    SUMIFS: 'SUMIFS',
    SUMPRODUCT: 'SUMPRODUCT',
    SUMSQ: 'SUMSQ',
    SWITCH: 'SWITCH',
    TAN: 'TAN',
    TEXT: 'TEXT',
    TRANSPOSE: 'TRANSPOSE',
    TRUE: 'TRUE',
    TRUNC: 'TRUNC',
    VLOOKUP: 'VLOOKUP',
    XOR: 'XOR',
    YEAR: 'YEAR'
  },
  langCode: 'enGB',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.dictionary = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#¡DIV/0!',
    ERROR: '#ERROR!',
    NA: '#N/D',
    NAME: '#¿NOMBRE?',
    NUM: '#¡NUM!',
    REF: '#¡REF!',
    VALUE: '#¡VALOR!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ACOS',
    AND: 'Y',
    ASIN: 'ASENO',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'PROMEDIO',
    AVERAGEA: 'PROMEDIOA',
    AVERAGEIF: 'PROMEDIO.SI',
    BASE: 'BASE',
    BIN2DEC: 'BIN.A.DEC',
    BIN2HEX: 'BIN.A.HEX',
    BIN2OCT: 'BIN.A.OCT',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'MULTIPLO.SUPERIOR',
    CHAR: 'CARACTER',
    CHOOSE: 'ELEGIR',
    CODE: 'CODIGO',
    COLUMNS: 'COLUMNAS',
    CONCATENATE: 'CONCATENAR',
    CORREL: 'COEF.DE.CORREL',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'CONTAR',
    COUNTA: 'CONTARA',
    COUNTBLANK: 'CONTAR.BLANCO',
    COUNTIF: 'CONTAR.SI',
    COUNTIFS: 'CONTAR.SI.CONJUNTO',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'FECHA',
    DAY: 'DIA',
    DAYS: 'DÍAS',
    DEC2BIN: 'DEC.A.BIN',
    DEC2HEX: 'DEC.A.HEX',
    DEC2OCT: 'DEC.A.OCT',
    DECIMAL: 'CONV.DECIMAL',
    DEGREES: 'GRADOS',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'FIN.MES',
    ERF: 'FUN.ERROR',
    ERFC: 'FUN.ERROR.COMPL',
    EVEN: 'REDONDEA.PAR',
    EXP: 'EXP',
    FALSE: 'FALSO',
    IF: 'SI',
    IFERROR: 'SI.ERROR',
    IFNA: 'IFNA',
    INDEX: 'INDICE',
    INT: 'ENTERO',
    ISBLANK: 'ESBLANCO',
    ISERROR: 'ESERROR',
    ISEVEN: 'ES.PAR',
    ISLOGICAL: 'ESLOGICO',
    ISNONTEXT: 'ESNOTEXTO',
    ISNUMBER: 'ESNUMERO',
    ISODD: 'ES.IMPAR',
    ISTEXT: 'ESTEXTO',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'COINCIDIR',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIANA',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'MMULT',
    MOD: 'RESIDUO',
    MONTH: 'MES',
    NOT: 'NO',
    ODD: 'REDONDEA.IMPAR',
    OFFSET: 'DESREF',
    OR: 'O',
    PI: 'PI',
    POWER: 'POTENCIA',
    RADIANS: 'RADIANES',
    RAND: 'ALEATORIO',
    ROUND: 'REDONDEAR',
    ROUNDDOWN: 'REDONDEAR.MENOS',
    ROUNDUP: 'REDONDEAR.MAS',
    ROWS: 'FILAS',
    SIN: 'SENO',
    SPLIT: 'SPLIT',
    SQRT: 'RAIZ',
    SUM: 'SUMA',
    SUMIF: 'SUMAR.SI',
    SUMIFS: 'SUMAR.SI.CONJUNTO',
    SUMPRODUCT: 'SUMAPRODUCTO',
    SUMSQ: 'SUMA.CUADRADOS',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEXTO',
    TRANSPOSE: 'TRANSPONER',
    TRUE: 'VERDADERO',
    TRUNC: 'TRUNCAR',
    VLOOKUP: 'BUSCARV',
    XOR: 'XOR',
    YEAR: 'AÑO'
  },
  langCode: 'esES',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};
exports.dictionary = dictionary;

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#JAKO/0!',
    ERROR: '#ERROR!',
    NA: '#PUUTTUU!',
    NAME: '#NIMI?',
    NUM: '#LUKU!',
    REF: '#VIITTAUS!',
    VALUE: '#ARVO!'
  },
  functions: {
    ABS: 'ITSEISARVO',
    ACOS: 'ACOS',
    AND: 'JA',
    ASIN: 'ASIN',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'KESKIARVO',
    AVERAGEA: 'KESKIARVOA',
    AVERAGEIF: 'KESKIARVO.JOS',
    BASE: 'PERUS',
    BIN2DEC: 'BINDES',
    BIN2HEX: 'BINHEKSA',
    BIN2OCT: 'BINOKT',
    BITAND: 'BITTI.JA',
    BITLSHIFT: 'BITTI.SIIRTO.V',
    BITOR: 'BITTI.TAI',
    BITRSHIFT: 'BITTI.SIIRTO.O',
    BITXOR: 'BITTI.EHDOTON.TAI',
    CEILING: 'PYÖRISTÄ.KERR.YLÖS',
    CHAR: 'MERKKI',
    CHOOSE: 'VALITSE.INDEKSI',
    CODE: 'KOODI',
    COLUMNS: 'SARAKKEET',
    CONCATENATE: 'KETJUTA',
    CORREL: 'KORRELAATIO',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'LASKE',
    COUNTA: 'LASKE.A',
    COUNTBLANK: 'LASKE.TYHJÄT',
    COUNTIF: 'LASKE.JOS',
    COUNTIFS: 'LASKE.JOS.JOUKKO',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'PÄIVÄYS',
    DAY: 'PÄIVÄ',
    DAYS: 'PV',
    DEC2BIN: 'DESBIN',
    DEC2HEX: 'DESHEKSA',
    DEC2OCT: 'DESOKT',
    DECIMAL: 'DESIMAALI',
    DEGREES: 'ASTEET',
    DELTA: 'SAMA.ARVO',
    E: 'E',
    EOMONTH: 'KUUKAUSI.LOPPU',
    ERF: 'VIRHEFUNKTIO',
    ERFC: 'VIRHEFUNKTIO.KOMPLEMENTTI',
    EVEN: 'PARILLINEN',
    EXP: 'EKSPONENTTI',
    FALSE: 'EPÄTOSI',
    IF: 'JOS',
    IFERROR: 'JOSVIRHE',
    IFNA: 'JOSPUUTTUU',
    INDEX: 'INDEKSI',
    INT: 'KOKONAISLUKU',
    ISBLANK: 'ONTYHJÄ',
    ISERROR: 'ONVIRHE',
    ISEVEN: 'ONPARILLINEN',
    ISLOGICAL: 'ONTOTUUS',
    ISNONTEXT: 'ONEI_TEKSTI',
    ISNUMBER: 'ONLUKU',
    ISODD: 'ONPARITON',
    ISTEXT: 'ONTEKSTI',
    LN: 'LUONNLOG',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'VASTINE',
    MAX: 'MAKS',
    MAXA: 'MAKSA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAANI',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'MKERRO',
    MOD: 'JAKOJ',
    MONTH: 'KUUKAUSI',
    NOT: 'EI',
    ODD: 'PARITON',
    OFFSET: 'SIIRTYMÄ',
    OR: 'TAI',
    PI: 'PII',
    POWER: 'POTENSSI',
    RADIANS: 'RADIAANIT',
    RAND: 'SATUNNAISLUKU',
    ROUND: 'PYÖRISTÄ',
    ROUNDDOWN: 'PYÖRISTÄ.DES.ALAS',
    ROUNDUP: 'PYÖRISTÄ.DES.YLÖS',
    ROWS: 'RIVIT',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'NELIÖJUURI',
    SUM: 'SUMMA',
    SUMIF: 'SUMMA.JOS',
    SUMIFS: 'SUMMA.JOS.JOUKKO',
    SUMPRODUCT: 'TULOJEN.SUMMA',
    SUMSQ: 'NELIÖSUMMA',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEKSTI',
    TRANSPOSE: 'TRANSPONOI',
    TRUE: 'TOSI',
    TRUNC: 'KATKAISE',
    VLOOKUP: 'PHAKU',
    XOR: 'EHDOTON.TAI',
    YEAR: 'VUOSI'
  },
  langCode: 'fiFI',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIV/0!',
    ERROR: '#ERROR!',
    NA: '#N/A',
    NAME: '#NOM?',
    NUM: '#NOMBRE!',
    REF: '#REF!',
    VALUE: '#VALEUR!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ACOS',
    AND: 'ET',
    ASIN: 'ASIN',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'MOYENNE',
    AVERAGEA: 'AVERAGEA',
    AVERAGEIF: 'MOYENNE.SI',
    BASE: 'BASE',
    BIN2DEC: 'BINDEC',
    BIN2HEX: 'BINHEX',
    BIN2OCT: 'BINOCT',
    BITAND: 'BITET',
    BITLSHIFT: 'BITDECALG',
    BITOR: 'BITOU',
    BITRSHIFT: 'BITDECALD',
    BITXOR: 'BITOUEXCLUSIF',
    CEILING: 'PLAFOND',
    CHAR: 'CAR',
    CHOOSE: 'CHOISIR',
    CODE: 'CODE',
    COLUMNS: 'COLONNES',
    CONCATENATE: 'CONCATENER',
    CORREL: 'COEFFICIENT.CORRELATION',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'NB',
    COUNTA: 'NBVAL',
    COUNTBLANK: 'NB.VIDE',
    COUNTIF: 'NB.SI',
    COUNTIFS: 'NB.SI.ENS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATE',
    DAY: 'JOUR',
    DAYS: 'JOURS',
    DEC2BIN: 'DECBIN',
    DEC2HEX: 'DECHEX',
    DEC2OCT: 'DECOCT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'DEGRES',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'FIN.MOIS',
    ERF: 'ERF',
    ERFC: 'ERFC',
    EVEN: 'PAIR',
    EXP: 'EXP',
    FALSE: 'FAUX',
    IF: 'SI',
    IFERROR: 'SIERREUR',
    IFNA: 'SI.NON.DISP',
    INDEX: 'INDEX',
    INT: 'ENT',
    ISBLANK: 'ESTVIDE',
    ISERROR: 'ESTERREUR',
    ISEVEN: 'EST.PAIR',
    ISLOGICAL: 'ESTLOGIQUE',
    ISNONTEXT: 'ESTNONTEXTE',
    ISNUMBER: 'ESTNUM',
    ISODD: 'EST.IMPAIR',
    ISTEXT: 'ESTTEXTE',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'EQUIV',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIANE',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'PRODUITMAT',
    MOD: 'MOD',
    MONTH: 'MOIS',
    NOT: 'NON',
    ODD: 'IMPAIR',
    OFFSET: 'DECALER',
    OR: 'OU',
    PI: 'PI',
    POWER: 'PUISSANCE',
    RADIANS: 'RADIANS',
    RAND: 'ALEA',
    ROUND: 'ARRONDI',
    ROUNDDOWN: 'ARRONDI.INF',
    ROUNDUP: 'ARRONDI.SUP',
    ROWS: 'LIGNES',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'RACINE',
    SUM: 'SOMME',
    SUMIF: 'SOMME.SI',
    SUMIFS: 'SOMME.SI.ENS',
    SUMPRODUCT: 'SOMMEPROD',
    SUMSQ: 'SOMME.CARRES',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEXTE',
    TRANSPOSE: 'TRANSPOSE',
    TRUE: 'VRAI',
    TRUNC: 'TRONQUE',
    VLOOKUP: 'RECHERCHEV',
    XOR: 'OUX',
    YEAR: 'ANNEE'
  },
  langCode: 'frFR',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#ZÉRÓOSZTÓ!',
    ERROR: '#ERROR!',
    NA: '#HIÁNYZIK',
    NAME: '#NÉV?',
    NUM: '#SZÁM!',
    REF: '#HIV!',
    VALUE: '#ÉRTÉK!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    AND: 'ÉS',
    ASIN: 'ARCSIN',
    ATAN: 'ARCTAN',
    ATAN2: 'ARCTAN2',
    AVERAGE: 'ÁTLAG',
    AVERAGEA: 'ÁTLAGA',
    AVERAGEIF: 'ÁTLAGHA',
    BASE: 'ALAP',
    BIN2DEC: 'BIN.DEC',
    BIN2HEX: 'BIN.HEX',
    BIN2OCT: 'BIN.OKT',
    BITAND: 'BIT.ÉS',
    BITLSHIFT: 'BIT.BAL.ELTOL',
    BITOR: 'BIT.VAGY',
    BITRSHIFT: 'BIT.JOBB.ELTOL',
    BITXOR: 'BIT.XVAGY',
    CEILING: 'PLAFON',
    CHAR: 'KARAKTER',
    CHOOSE: 'VÁLASZT',
    CODE: 'KÓD',
    COLUMNS: 'OSZLOPOK',
    CONCATENATE: 'ÖSSZEFŰZ',
    CORREL: 'KORREL',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'DARAB',
    COUNTA: 'DARAB2',
    COUNTBLANK: 'DARABÜRES',
    COUNTIF: 'DARABTELI',
    COUNTIFS: 'DARABHATÖBB',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DÁTUM',
    DAY: 'NAP',
    DAYS: 'NAPOK',
    DEC2BIN: 'DEC.BIN',
    DEC2HEX: 'DEC.HEX',
    DEC2OCT: 'DEC.OKT',
    DECIMAL: 'TIZEDES',
    DEGREES: 'FOK',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'HÓNAP.UTOLSÓ.NAP',
    ERF: 'HIBAF',
    ERFC: 'HIBAF.KOMPLEMENTER',
    EVEN: 'PÁROS',
    EXP: 'KITEVŐ',
    FALSE: 'HAMIS',
    IF: 'HA',
    IFERROR: 'HAHIBA',
    IFNA: 'HAHIÁNYZIK',
    INDEX: 'INDEX',
    INT: 'INT',
    ISBLANK: 'ÜRES',
    ISERROR: 'HIBÁS',
    ISEVEN: 'PÁROSE',
    ISLOGICAL: 'LOGIKAI',
    ISNONTEXT: 'NEM.SZÖVEG',
    ISNUMBER: 'SZÁM',
    ISODD: 'PÁRATLANE',
    ISTEXT: 'SZÖVEG.E',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'HOL.VAN',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIÁN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'MSZORZAT',
    MOD: 'MARADÉK',
    MONTH: 'HÓNAP',
    NOT: 'NEM',
    ODD: 'PÁRATLAN',
    OFFSET: 'ELTOLÁS',
    OR: 'VAGY',
    PI: 'PI',
    POWER: 'HATVÁNY',
    RADIANS: 'RADIÁN',
    RAND: 'VÉL',
    ROUND: 'KEREKÍTÉS',
    ROUNDDOWN: 'KEREK.LE',
    ROUNDUP: 'KEREK.FEL',
    ROWS: 'SOROK',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'GYÖK',
    SUM: 'SZUM',
    SUMIF: 'SZUMHA',
    SUMIFS: 'SZUMHATÖBB',
    SUMPRODUCT: 'SZORZATÖSSZEG',
    SUMSQ: 'NÉGYZETÖSSZEG',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'SZÖVEG',
    TRANSPOSE: 'TRANSZPONÁLÁS',
    TRUE: 'IGAZ',
    TRUNC: 'CSONK',
    VLOOKUP: 'FKERES',
    XOR: 'XVAGY',
    YEAR: 'ÉV'
  },
  langCode: 'huHU',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.trTR = exports.svSE = exports.ruRU = exports.ptPT = exports.plPL = exports.nlNL = exports.nbNO = exports.itIT = exports.huHU = exports.frFR = exports.fiFI = exports.esES = exports.enGB = exports.deDE = exports.daDK = exports.csCZ = void 0;

var _csCZ = _interopRequireDefault(__webpack_require__(0));

exports.csCZ = _csCZ.default;

var _daDK = _interopRequireDefault(__webpack_require__(2));

exports.daDK = _daDK.default;

var _deDE = _interopRequireDefault(__webpack_require__(3));

exports.deDE = _deDE.default;

var _enGB = _interopRequireDefault(__webpack_require__(4));

exports.enGB = _enGB.default;

var _esES = _interopRequireDefault(__webpack_require__(5));

exports.esES = _esES.default;

var _fiFI = _interopRequireDefault(__webpack_require__(6));

exports.fiFI = _fiFI.default;

var _frFR = _interopRequireDefault(__webpack_require__(7));

exports.frFR = _frFR.default;

var _huHU = _interopRequireDefault(__webpack_require__(8));

exports.huHU = _huHU.default;

var _itIT = _interopRequireDefault(__webpack_require__(10));

exports.itIT = _itIT.default;

var _nbNO = _interopRequireDefault(__webpack_require__(11));

exports.nbNO = _nbNO.default;

var _nlNL = _interopRequireDefault(__webpack_require__(12));

exports.nlNL = _nlNL.default;

var _plPL = _interopRequireDefault(__webpack_require__(13));

exports.plPL = _plPL.default;

var _ptPT = _interopRequireDefault(__webpack_require__(14));

exports.ptPT = _ptPT.default;

var _ruRU = _interopRequireDefault(__webpack_require__(15));

exports.ruRU = _ruRU.default;

var _svSE = _interopRequireDefault(__webpack_require__(16));

exports.svSE = _svSE.default;

var _trTR = _interopRequireDefault(__webpack_require__(17));

exports.trTR = _trTR.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIV/0!',
    ERROR: '#ERROR!',
    NA: '#N/D',
    NAME: '#NOME?',
    NUM: '#NUM!',
    REF: '#RIF!',
    VALUE: '#VALORE!'
  },
  functions: {
    ABS: 'ASS',
    ACOS: 'ARCCOS',
    AND: 'E',
    ASIN: 'ARCSEN',
    ATAN: 'ARCTAN',
    ATAN2: 'ARCTAN.2',
    AVERAGE: 'MEDIA',
    AVERAGEA: 'MEDIA.VALORI',
    AVERAGEIF: 'MEDIA.SE',
    BASE: 'BASE',
    BIN2DEC: 'BINARIO.DECIMALE',
    BIN2HEX: 'BINARIO.HEX',
    BIN2OCT: 'BINARIO.OCT',
    BITAND: 'BITAND',
    BITLSHIFT: 'BIT.SPOSTA.SX',
    BITOR: 'BITOR',
    BITRSHIFT: 'BIT.SPOSTA.DX',
    BITXOR: 'BITXOR',
    CEILING: 'ARROTONDA.ECCESSO',
    CHAR: 'CODICE.CARATT',
    CHOOSE: 'SCEGLI',
    CODE: 'CODICE',
    COLUMNS: 'COLONNE',
    CONCATENATE: 'CONCATENA',
    CORREL: 'CORRELAZIONE',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'CONTA.NUMERI',
    COUNTA: 'CONTA.VALORI',
    COUNTBLANK: 'CONTA.VUOTE',
    COUNTIF: 'CONTA.SE',
    COUNTIFS: 'CONTA.PIÙ.SE',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATA',
    DAY: 'GIORNO',
    DAYS: 'GIORNI',
    DEC2BIN: 'DECIMALE.BINARIO',
    DEC2HEX: 'DECIMALE.HEX',
    DEC2OCT: 'DECIMALE.OCT',
    DECIMAL: 'DECIMALE',
    DEGREES: 'GRADI',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'FINE.MESE',
    ERF: 'FUNZ.ERRORE',
    ERFC: 'FUNZ.ERRORE.COMP',
    EVEN: 'PARI',
    EXP: 'EXP',
    FALSE: 'FALSO',
    IF: 'SE',
    IFERROR: 'SE.ERRORE',
    IFNA: 'SE.NON.DISP.',
    INDEX: 'INDICE',
    INT: 'INT',
    ISBLANK: 'VAL.VUOTO',
    ISERROR: 'VAL.ERRORE',
    ISEVEN: 'VAL.PARI',
    ISLOGICAL: 'VAL.LOGICO',
    ISNONTEXT: 'VAL.NON.TESTO',
    ISNUMBER: 'VAL.NUMERO',
    ISODD: 'VAL.DISPARI',
    ISTEXT: 'VAL.TESTO',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'CONFRONTA',
    MAX: 'MAX',
    MAXA: 'MAX.VALORI',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIANA',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MIN.VALORI',
    MMULT: 'MATR.PRODOTTO',
    MOD: 'RESTO',
    MONTH: 'MESE',
    NOT: 'NON',
    ODD: 'DISPARI',
    OFFSET: 'SCARTO',
    OR: 'O',
    PI: 'PI.GRECO',
    POWER: 'POTENZA',
    RADIANS: 'RADIANTI',
    RAND: 'CASUALE',
    ROUND: 'ARROTONDA',
    ROUNDDOWN: 'ARROTONDA.PER.DIF',
    ROUNDUP: 'ARROTONDA.PER.ECC',
    ROWS: 'RIGHE',
    SIN: 'SEN',
    SPLIT: 'SPLIT',
    SQRT: 'RADQ',
    SUM: 'SOMMA',
    SUMIF: 'SOMMA.SE',
    SUMIFS: 'SOMMA.PIÙ.SE',
    SUMPRODUCT: 'MATR.SOMMA.PRODOTTO',
    SUMSQ: 'SOMMA.Q',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TESTO',
    TRANSPOSE: 'MATR.TRASPOSTA',
    TRUE: 'VERO',
    TRUNC: 'TRONCA',
    VLOOKUP: 'CERCA.VERT',
    XOR: 'XOR',
    YEAR: 'ANNO'
  },
  langCode: 'itIT',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIV/0!',
    ERROR: '#ERROR!',
    NA: '#I/T',
    NAME: '#NAVN?',
    NUM: '#NUM!',
    REF: '#REF!',
    VALUE: '#VERDI!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    AND: 'OG',
    ASIN: 'ARCSIN',
    ATAN: 'ARCTAN',
    ATAN2: 'ARCTAN2',
    AVERAGE: 'GJENNOMSNITT',
    AVERAGEA: 'GJENNOMSNITTA',
    AVERAGEIF: 'GJENNOMSNITTHVIS',
    BASE: 'BASE',
    BIN2DEC: 'BINTILDES',
    BIN2HEX: 'BINTILHEKS',
    BIN2OCT: 'BINTILOKT',
    BITAND: 'BITOG',
    BITLSHIFT: 'BITVFORSKYV',
    BITOR: 'BITELLER',
    BITRSHIFT: 'BITHFORSKYV',
    BITXOR: 'BITEKSKLUSIVELLER',
    CEILING: 'AVRUND.GJELDENDE.MULTIPLUM',
    CHAR: 'TEGNKODE',
    CHOOSE: 'VELG',
    CODE: 'KODE',
    COLUMNS: 'KOLONNER',
    CONCATENATE: 'KJEDE.SAMMEN',
    CORREL: 'KORRELASJON',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'ANTALL',
    COUNTA: 'ANTALLA',
    COUNTBLANK: 'TELLBLANKE',
    COUNTIF: 'ANTALL.HVIS',
    COUNTIFS: 'ANTALL.HVIS.SETT',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATO',
    DAY: 'DAG',
    DAYS: 'DAGER',
    DEC2BIN: 'DESTILBIN',
    DEC2HEX: 'DESTILHEKS',
    DEC2OCT: 'DESTILOKT',
    DECIMAL: 'DESIMAL',
    DEGREES: 'GRADER',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'MÅNEDSSLUTT',
    ERF: 'FEILF',
    ERFC: 'FEILFK',
    EVEN: 'AVRUND.TIL.PARTALL',
    EXP: 'EKSP',
    FALSE: 'USANN',
    IF: 'HVIS',
    IFERROR: 'HVISFEIL',
    IFNA: 'HVIS.IT',
    INDEX: 'INDEKS',
    INT: 'HELTALL',
    ISBLANK: 'ERTOM',
    ISERROR: 'ERFEIL',
    ISEVEN: 'ERPARTALL',
    ISLOGICAL: 'ERLOGISK',
    ISNONTEXT: 'ERIKKETEKST',
    ISNUMBER: 'ERTALL',
    ISODD: 'ERODDE',
    ISTEXT: 'ERTEKST',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'SAMMENLIGNE',
    MAX: 'STØRST',
    MAXA: 'MAKSA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'MMULT',
    MOD: 'REST',
    MONTH: 'MÅNED',
    NOT: 'IKKE',
    ODD: 'AVRUND.TIL.ODDETALL',
    OFFSET: 'FORSKYVNING',
    OR: 'ELLER',
    PI: 'PI',
    POWER: 'OPPHØYD.I',
    RADIANS: 'RADIANER',
    RAND: 'TILFELDIG',
    ROUND: 'AVRUND',
    ROUNDDOWN: 'AVRUND.NED',
    ROUNDUP: 'AVRUND.OPP',
    ROWS: 'RADER',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'ROT',
    SUM: 'SUMMER',
    SUMIF: 'SUMMERHVIS',
    SUMIFS: 'SUMMER.HVIS.SETT',
    SUMPRODUCT: 'SUMMERPRODUKT',
    SUMSQ: 'SUMMERKVADRAT',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEKST',
    TRANSPOSE: 'TRANSPONER',
    TRUE: 'SANN',
    TRUNC: 'AVKORT',
    VLOOKUP: 'FINN.RAD',
    XOR: 'EKSKLUSIVELLER',
    YEAR: 'ÅR'
  },
  langCode: 'nbNO',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DELING.DOOR.0!',
    ERROR: '#ERROR!',
    NA: '#N/B',
    NAME: '#NAAM?',
    NUM: '#GETAL!',
    REF: '#VERW!',
    VALUE: '#WAARDE!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'BOOGCOS',
    AND: 'EN',
    ASIN: 'BOOGSIN',
    ATAN: 'BOOGTAN',
    ATAN2: 'BOOGTAN2',
    AVERAGE: 'GEMIDDELDE',
    AVERAGEA: 'GEMIDDELDEA',
    AVERAGEIF: 'GEMIDDELDE.ALS',
    BASE: 'BASIS',
    BIN2DEC: 'BIN.N.DEC',
    BIN2HEX: 'BIN.N.HEX',
    BIN2OCT: 'BIN.N.OCT',
    BITAND: 'BIT.EN',
    BITLSHIFT: 'BIT.VERSCHUIF.LINKS',
    BITOR: 'BIT.OF',
    BITRSHIFT: 'BIT.VERSCHUIF.RECHTS',
    BITXOR: 'BIT.EX.OF',
    CEILING: 'AFRONDEN.BOVEN',
    CHAR: 'TEKEN',
    CHOOSE: 'KIEZEN',
    CODE: 'CODE',
    COLUMNS: 'KOLOMMEN',
    CONCATENATE: 'TEKST.SAMENVOEGEN',
    CORREL: 'CORRELATIE',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'AANTAL',
    COUNTA: 'AANTALARG',
    COUNTBLANK: 'AANTAL.LEGE.CELLEN',
    COUNTIF: 'AANTAL.ALS',
    COUNTIFS: 'AANTALLEN.ALS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATUM',
    DAY: 'DAG',
    DAYS: 'DAGEN',
    DEC2BIN: 'DEC.N.BIN',
    DEC2HEX: 'DEC.N.HEX',
    DEC2OCT: 'DEC.N.OCT',
    DECIMAL: 'DECIMAAL',
    DEGREES: 'GRADEN',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'LAATSTE.DAG',
    ERF: 'FOUTFUNCTIE',
    ERFC: 'FOUT.COMPLEMENT',
    EVEN: 'EVEN',
    EXP: 'EXP',
    FALSE: 'ONWAAR',
    IF: 'ALS',
    IFERROR: 'ALS.FOUT',
    IFNA: 'ALS.NB',
    INDEX: 'INDEX',
    INT: 'INTEGER',
    ISBLANK: 'ISLEEG',
    ISERROR: 'ISFOUT',
    ISEVEN: 'IS.EVEN',
    ISLOGICAL: 'ISLOGISCH',
    ISNONTEXT: 'ISGEENTEKST',
    ISNUMBER: 'ISGETAL',
    ISODD: 'IS.ONEVEN',
    ISTEXT: 'ISTEKST',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'VERGELIJKEN',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'PRODUCTMAT',
    MOD: 'REST',
    MONTH: 'MAAND',
    NOT: 'NIET',
    ODD: 'ONEVEN',
    OFFSET: 'VERSCHUIVING',
    OR: 'OF',
    PI: 'PI',
    POWER: 'MACHT',
    RADIANS: 'RADIALEN',
    RAND: 'ASELECT',
    ROUND: 'AFRONDEN',
    ROUNDDOWN: 'AFRONDEN.NAAR.BENEDEN',
    ROUNDUP: 'AFRONDEN.NAAR.BOVEN',
    ROWS: 'RIJEN',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'WORTEL',
    SUM: 'SOM',
    SUMIF: 'SOM.ALS',
    SUMIFS: 'SOMMEN.ALS',
    SUMPRODUCT: 'SOMPRODUCT',
    SUMSQ: 'KWADRATENSOM',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEKST',
    TRANSPOSE: 'TRANSPONEREN',
    TRUE: 'WAAR',
    TRUNC: 'GEHEEL',
    VLOOKUP: 'VERT.ZOEKEN',
    XOR: 'EX.OF',
    YEAR: 'JAAR'
  },
  langCode: 'nlNL',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYKL!',
    DIV_BY_ZERO: '#DZIEL/0!',
    ERROR: '#BŁĄD!',
    NA: '#N/A',
    NAME: '#NAZWA?',
    NUM: '#LICZBA!',
    REF: '#ADR!',
    VALUE: '#ARG!'
  },
  functions: {
    ABS: 'WART.BEZWGL',
    ACOS: 'ACOS',
    AND: 'ORAZ',
    ASIN: 'ASIN',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'ŚREDNIA',
    AVERAGEA: 'ŚREDNIA.A',
    AVERAGEIF: 'ŚREDNIA.JEŻELI',
    BASE: 'PODSTAWA',
    BIN2DEC: 'DWÓJK.NA.DZIES',
    BIN2HEX: 'DWÓJK.NA.SZESN',
    BIN2OCT: 'DWÓJK.NA.ÓSM',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'ZAOKR.W.GÓRĘ',
    CHAR: 'ZNAK',
    CHOOSE: 'WYBIERZ',
    CODE: 'KOD',
    COLUMNS: 'LICZBA.KOLUMN',
    CONCATENATE: 'ZŁĄCZ.TEKST',
    CORREL: 'WSP.KORELACJI',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'COUNT',
    COUNTA: 'COUNTA',
    COUNTBLANK: 'LICZ.PUSTE',
    COUNTIF: 'LICZ.JEŻELI',
    COUNTIFS: 'LICZ.WARUNKI',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATA',
    DAY: 'DZIEŃ',
    DAYS: 'DNI',
    DEC2BIN: 'DZIES.NA.DWÓJK',
    DEC2HEX: 'DZIES.NA.SZESN',
    DEC2OCT: 'DZIES.NA.ÓSM',
    DECIMAL: 'DZIESIĘTNA',
    DEGREES: 'STOPNIE',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'NR.SER.OST.DN.MIEŚ',
    ERF: 'FUNKCJA.BŁ',
    ERFC: 'KOMP.FUNKCJA.BŁ',
    EVEN: 'ZAOKR.DO.PARZ',
    EXP: 'EXP',
    FALSE: 'FAŁSZ',
    IF: 'JEŻELI',
    IFERROR: 'JEŻELI.BŁĄD',
    IFNA: 'JEŻELI.ND',
    INDEX: 'INDEKS',
    INT: 'ZAOKR.DO.CAŁK',
    ISBLANK: 'CZY.PUSTA',
    ISERROR: 'CZY.BŁĄD',
    ISEVEN: 'CZY.PARZYSTE',
    ISLOGICAL: 'CZY.LOGICZNA',
    ISNONTEXT: 'CZY.NIE.TEKST',
    ISNUMBER: 'CZY.LICZBA',
    ISODD: 'CZY.NIEPARZYSTE',
    ISTEXT: 'CZY.TEKST',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'PODAJ.POZYCJĘ',
    MAX: 'MAKS',
    MAXA: 'MAX.A',
    MAXPOOL: 'MAKS.Z.PULI',
    MEDIAN: 'MEDIANA',
    MEDIANPOOL: 'MEDIANA.Z.PULI',
    MIN: 'MIN',
    MINA: 'MIN.A',
    MMULT: 'MACIERZ.ILOCZYN',
    MOD: 'MOD',
    MONTH: 'MIESIĄC',
    NOT: 'NIE',
    ODD: 'ZAOKR.DO.NPARZ',
    OFFSET: 'PRZESUNIĘCIE',
    OR: 'LUB',
    PI: 'PI',
    POWER: 'POTĘGA',
    RADIANS: 'RADIANY',
    RAND: 'LOSUJ',
    ROUND: 'ZAOKR',
    ROUNDDOWN: 'ZAOKR.DÓŁ',
    ROUNDUP: 'ZAOKR.GÓRA',
    ROWS: 'ILE.WIERSZY',
    SIN: 'SIN',
    SPLIT: 'PODZIEL.TEKST',
    SQRT: 'PIERWIASTEK',
    SUM: 'SUMA',
    SUMIF: 'SUMA.JEŻELI',
    SUMIFS: 'SUMY.JEŻELI',
    SUMPRODUCT: 'SUMA.ILOCZYNÓW',
    SUMSQ: 'SUMSQ',
    SWITCH: 'PRZEŁĄCZ',
    TAN: 'TAN',
    TEXT: 'TEKST',
    TRANSPOSE: 'TRANSPONUJ',
    TRUE: 'PRAWDA',
    TRUNC: 'LICZBA.CAŁK',
    VLOOKUP: 'WYSZUKAJ.PIONOWO',
    XOR: 'XOR',
    YEAR: 'ROK'
  },
  langCode: 'plPL',
  ui: {
    NEW_SHEET_PREFIX: 'Arkusz'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIV/0!',
    ERROR: '#ERROR!',
    NA: '#N/D',
    NAME: '#NOME?',
    NUM: '#NÚM!',
    REF: '#REF!',
    VALUE: '#VALOR!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ACOS',
    AND: 'E',
    ASIN: 'ASEN',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'MÉDIA',
    AVERAGEA: 'MÉDIAA',
    AVERAGEIF: 'MÉDIASE',
    BASE: 'BASE',
    BIN2DEC: 'BINADEC',
    BIN2HEX: 'BINAHEX',
    BIN2OCT: 'BINAOCT',
    BITAND: 'ELÓGICO',
    BITLSHIFT: 'DESLOCESQBIT',
    BITOR: 'OULÓGICO',
    BITRSHIFT: 'DESLOCDIRBIT',
    BITXOR: 'OUEXCLLÓGICO',
    CEILING: 'TETO',
    CHAR: 'CARACT',
    CHOOSE: 'ESCOLHER',
    CODE: 'CÓDIGO',
    COLUMNS: 'COLS',
    CONCATENATE: 'CONCATENAR',
    CORREL: 'CORREL',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'CONT.NÚM',
    COUNTA: 'CONT.VALORES',
    COUNTBLANK: 'CONTAR.VAZIO',
    COUNTIF: 'CONT.SE',
    COUNTIFS: 'CONT.SES',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATA',
    DAY: 'DIA',
    DAYS: 'DIAS',
    DEC2BIN: 'DECABIN',
    DEC2HEX: 'DECAHEX',
    DEC2OCT: 'DECAOCT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'GRAUS',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'FIMMÊS',
    ERF: 'FUNERRO',
    ERFC: 'FUNERROCOMPL',
    EVEN: 'PAR',
    EXP: 'EXP',
    FALSE: 'FALSO',
    IF: 'SE',
    IFERROR: 'SEERRO',
    IFNA: 'SENA',
    INDEX: 'ÍNDICE',
    INT: 'INT',
    ISBLANK: 'ÉCÉL.VAZIA',
    ISERROR: 'ÉERROS',
    ISEVEN: 'ÉPAR',
    ISLOGICAL: 'ÉLÓGICO',
    ISNONTEXT: 'É.NÃO.TEXTO',
    ISNUMBER: 'ÉNÚM',
    ISODD: 'ÉIMPAR',
    ISTEXT: 'ÉTEXTO',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'CORRESP',
    MAX: 'MÁXIMO',
    MAXA: 'MÁXIMOA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MED',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MÍNIMO',
    MINA: 'MÍNIMOA',
    MMULT: 'MATRIZ.MULT',
    MOD: 'MOD',
    MONTH: 'MÊS',
    NOT: 'NÃO',
    ODD: 'ÍMPAR',
    OFFSET: 'DESLOC',
    OR: 'OU',
    PI: 'PI',
    POWER: 'POTÊNCIA',
    RADIANS: 'RADIANOS',
    RAND: 'ALEATÓRIO',
    ROUND: 'ARRED',
    ROUNDDOWN: 'ARREDONDAR.PARA.BAIXO',
    ROUNDUP: 'ARREDONDAR.PARA.CIMA',
    ROWS: 'LINS',
    SIN: 'SEN',
    SPLIT: 'SPLIT',
    SQRT: 'RAIZ',
    SUM: 'SOMA',
    SUMIF: 'SOMASE',
    SUMIFS: 'SOMASES',
    SUMPRODUCT: 'SOMARPRODUTO',
    SUMSQ: 'SOMAQUAD',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEXTO',
    TRANSPOSE: 'TRANSPOR',
    TRUE: 'VERDADEIRO',
    TRUNC: 'TRUNCAR',
    VLOOKUP: 'PROCV',
    XOR: 'OUEXCL',
    YEAR: 'ANO'
  },
  langCode: 'ptPT',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#ДЕЛ/0!',
    ERROR: '#ERROR!',
    NA: '#Н/Д',
    NAME: '#ИМЯ?',
    NUM: '#ЧИСЛО!',
    REF: '#ССЫЛКА!',
    VALUE: '#ЗНАЧ!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ACOS',
    AND: 'И',
    ASIN: 'ASIN',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'СРЗНАЧ',
    AVERAGEA: 'СРЗНАЧА',
    AVERAGEIF: 'СРЗНАЧЕСЛИ',
    BASE: 'ОСНОВАНИЕ',
    BIN2DEC: 'ДВ.В.ДЕС',
    BIN2HEX: 'ДВ.В.ШЕСТН',
    BIN2OCT: 'ДВ.В.ВОСЬМ',
    BITAND: 'БИТ.И',
    BITLSHIFT: 'БИТ.СДВИГЛ',
    BITOR: 'БИТ.ИЛИ',
    BITRSHIFT: 'БИТ.СДВИГП',
    BITXOR: 'БИТ.ИСКЛИЛИ',
    CEILING: 'ОКРВВЕРХ',
    CHAR: 'СИМВОЛ',
    CHOOSE: 'ВЫБОР',
    CODE: 'КОДСИМВ',
    COLUMNS: 'ЧИСЛСТОЛБ',
    CONCATENATE: 'СЦЕПИТЬ',
    CORREL: 'КОРРЕЛ',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'СЧЁТ',
    COUNTA: 'СЧЁТЗ',
    COUNTBLANK: 'СЧИТАТЬПУСТОТЫ',
    COUNTIF: 'СЧЁТЕСЛИ',
    COUNTIFS: 'СЧЁТЕСЛИМН',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'ДАТА',
    DAY: 'ДЕНЬ',
    DAYS: 'ДНИ',
    DEC2BIN: 'ДЕС.В.ДВ',
    DEC2HEX: 'ДЕС.В.ШЕСТН',
    DEC2OCT: 'ДЕС.В.ВОСЬМ',
    DECIMAL: 'ДЕС',
    DEGREES: 'ГРАДУСЫ',
    DELTA: 'ДЕЛЬТА',
    E: 'E',
    EOMONTH: 'КОНМЕСЯЦА',
    ERF: 'ФОШ',
    ERFC: 'ДФОШ',
    EVEN: 'ЧЁТН',
    EXP: 'EXP',
    FALSE: 'ЛОЖЬ',
    IF: 'ЕСЛИ',
    IFERROR: 'ЕСЛИОШИБКА',
    IFNA: 'ЕСНД',
    INDEX: 'ИНДЕКС',
    INT: 'ЦЕЛОЕ',
    ISBLANK: 'ЕПУСТО',
    ISERROR: 'ЕОШИБКА',
    ISEVEN: 'ЕЧЁТН',
    ISLOGICAL: 'ЕЛОГИЧ',
    ISNONTEXT: 'ЕНЕТЕКСТ',
    ISNUMBER: 'ЕЧИСЛО',
    ISODD: 'ЕНЕЧЁТ',
    ISTEXT: 'ЕТЕКСТ',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'ПОИСКПОЗ',
    MAX: 'МАКС',
    MAXA: 'МАКСА',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'МЕДИАНА',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'МИН',
    MINA: 'МИНА',
    MMULT: 'МУМНОЖ',
    MOD: 'ОСТАТ',
    MONTH: 'МЕСЯЦ',
    NOT: 'НЕ',
    ODD: 'НЕЧЁТ',
    OFFSET: 'СМЕЩ',
    OR: 'ИЛИ',
    PI: 'ПИ',
    POWER: 'СТЕПЕНЬ',
    RADIANS: 'РАДИАНЫ',
    RAND: 'СЛЧИС',
    ROUND: 'ОКРУГЛ',
    ROUNDDOWN: 'ОКРУГЛВНИЗ',
    ROUNDUP: 'ОКРУГЛВВЕРХ',
    ROWS: 'ЧСТРОК',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'КОРЕНЬ',
    SUM: 'СУММ',
    SUMIF: 'СУММЕСЛИ',
    SUMIFS: 'СУММЕСЛИМН',
    SUMPRODUCT: 'СУММПРОИЗВ',
    SUMSQ: 'СУММКВ',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'ТЕКСТ',
    TRANSPOSE: 'ТРАНСП',
    TRUE: 'ИСТИНА',
    TRUNC: 'ОТБР',
    VLOOKUP: 'ВПР',
    XOR: 'ИСКЛИЛИ',
    YEAR: 'ГОД'
  },
  langCode: 'ruRU',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DIVISION/0!',
    ERROR: '#ERROR!',
    NA: '#SAKNAS!',
    NAME: '#NAMN?',
    NUM: '#OGILTIGT!',
    REF: '#REFERENS!',
    VALUE: '#VÄRDEFEL!'
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    AND: 'OCH',
    ASIN: 'ARCSIN',
    ATAN: 'ARCTAN',
    ATAN2: 'ARCTAN2',
    AVERAGE: 'MEDEL',
    AVERAGEA: 'AVERAGEA',
    AVERAGEIF: 'MEDEL.OM',
    BASE: 'BASE',
    BIN2DEC: 'BIN.TILL.DEC',
    BIN2HEX: 'BIN.TILL.HEX',
    BIN2OCT: 'BIN.TILL.OKT',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'RUNDA.UPP',
    CHAR: 'TECKENKOD',
    CHOOSE: 'VÄLJ',
    CODE: 'KOD',
    COLUMNS: 'KOLUMNER',
    CONCATENATE: 'SAMMANFOGA',
    CORREL: 'KORREL',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'ANTAL',
    COUNTA: 'ANTALV',
    COUNTBLANK: 'ANTAL.TOMMA',
    COUNTIF: 'ANTAL.OM',
    COUNTIFS: 'ANTAL.OMF',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'DATUM',
    DAY: 'DAG',
    DAYS: 'DAYS',
    DEC2BIN: 'DEC.TILL.BIN',
    DEC2HEX: 'DEC.TILL.HEX',
    DEC2OCT: 'DEC.TILL.OKT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'GRADER',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'SLUTMÅNAD',
    ERF: 'FELF',
    ERFC: 'FELFK',
    EVEN: 'JÄMN',
    EXP: 'EXP',
    FALSE: 'FALSKT',
    IF: 'OM',
    IFERROR: 'OMFEL',
    IFNA: 'IFNA',
    INDEX: 'INDEX',
    INT: 'HELTAL',
    ISBLANK: 'ÄRTOM',
    ISERROR: 'ÄRFEL',
    ISEVEN: 'ÄRJÄMN',
    ISLOGICAL: 'ÄRLOGISK',
    ISNONTEXT: 'ÄREJTEXT',
    ISNUMBER: 'ÄRTAL',
    ISODD: 'ÄRUDDA',
    ISTEXT: 'ÄRTEXT',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'PASSA',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MMULT: 'MMULT',
    MOD: 'REST',
    MONTH: 'MÅNAD',
    NOT: 'ICKE',
    ODD: 'UDDA',
    OFFSET: 'FÖRSKJUTNING',
    OR: 'ELLER',
    PI: 'PI',
    POWER: 'UPPHÖJT.TILL',
    RADIANS: 'RADIANER',
    RAND: 'SLUMP',
    ROUND: 'AVRUNDA',
    ROUNDDOWN: 'AVRUNDA.NEDÅT',
    ROUNDUP: 'AVRUNDA.UPPÅT',
    ROWS: 'RADER',
    SIN: 'SIN',
    SPLIT: 'SPLIT',
    SQRT: 'ROT',
    SUM: 'SUMMA',
    SUMIF: 'SUMMA.OM',
    SUMIFS: 'SUMMA.OMF',
    SUMPRODUCT: 'PRODUKTSUMMA',
    SUMSQ: 'KVADRATSUMMA',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'TEXT',
    TRANSPOSE: 'TRANSPONERA',
    TRUE: 'SANT',
    TRUNC: 'AVKORTA',
    VLOOKUP: 'LETARAD',
    XOR: 'XOR',
    YEAR: 'ÅR'
  },
  langCode: 'svSE',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var dictionary = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#SAYI/0!',
    ERROR: '#ERROR!',
    NA: '#YOK',
    NAME: '#AD?',
    NUM: '#SAYI!',
    REF: '#BAŞV!',
    VALUE: '#DEĞER!'
  },
  functions: {
    ABS: 'MUTLAK',
    ACOS: 'ACOS',
    AND: 'VE',
    ASIN: 'ASİN',
    ATAN: 'ATAN',
    ATAN2: 'ATAN2',
    AVERAGE: 'ORTALAMA',
    AVERAGEA: 'ORTALAMAA',
    AVERAGEIF: 'EĞERORTALAMA',
    BASE: 'TABAN',
    BIN2DEC: 'BIN2DEC',
    BIN2HEX: 'BIN2HEX',
    BIN2OCT: 'BIN2OCT',
    BITAND: 'BİTVE',
    BITLSHIFT: 'BİTSOLAKAYDIR',
    BITOR: 'BİTVEYA',
    BITRSHIFT: 'BİTSAĞAKAYDIR',
    BITXOR: 'BİTÖZELVEYA',
    CEILING: 'TAVANAYUVARLA',
    CHAR: 'DAMGA',
    CHOOSE: 'ELEMAN',
    CODE: 'KOD',
    COLUMNS: 'SÜTUNSAY',
    CONCATENATE: 'BİRLEŞTİR',
    CORREL: 'KORELASYON',
    COS: 'COS',
    COT: 'COT',
    COUNT: 'SAY',
    COUNTA: 'BAĞ_DEĞ_DOLU_SAY',
    COUNTBLANK: 'BOŞLUKSAY',
    COUNTIF: 'EĞERSAY',
    COUNTIFS: 'ÇOKEĞERSAY',
    COUNTUNIQUE: 'COUNTUNIQUE',
    DATE: 'TARİH',
    DAY: 'GÜN',
    DAYS: 'GÜNSAY',
    DEC2BIN: 'DEC2BIN',
    DEC2HEX: 'DEC2HEX',
    DEC2OCT: 'DEC2OCT',
    DECIMAL: 'ONDALIK',
    DEGREES: 'DERECE',
    DELTA: 'DELTA',
    E: 'E',
    EOMONTH: 'SERİAY',
    ERF: 'HATAİŞLEV',
    ERFC: 'TÜMHATAİŞLEV',
    EVEN: 'ÇİFT',
    EXP: 'ÜS',
    FALSE: 'YANLIŞ',
    IF: 'EĞER',
    IFERROR: 'EĞERHATA',
    IFNA: 'EĞERYOKSA',
    INDEX: 'İNDİS',
    INT: 'TAMSAYI',
    ISBLANK: 'EBOŞSA',
    ISERROR: 'EHATALIYSA',
    ISEVEN: 'ÇİFTMİ',
    ISLOGICAL: 'EMANTIKSALSA',
    ISNONTEXT: 'EMETİNDEĞİLSE',
    ISNUMBER: 'ESAYIYSA',
    ISODD: 'TEKMİ',
    ISTEXT: 'EMETİNSE',
    LN: 'LN',
    LOG: 'LOG',
    LOG10: 'LOG10',
    MATCH: 'KAÇINCI',
    MAX: 'MAK',
    MAXA: 'MAKA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'ORTANCA',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MİN',
    MINA: 'MİNA',
    MMULT: 'DÇARP',
    MOD: 'MOD',
    MONTH: 'AY',
    NOT: 'DEĞİL',
    ODD: 'TEK',
    OFFSET: 'KAYDIR',
    OR: 'VEYA',
    PI: 'Pİ',
    POWER: 'KUVVET',
    RADIANS: 'RADYAN',
    RAND: 'S_SAYI_ÜRET',
    ROUND: 'YUVARLA',
    ROUNDDOWN: 'AŞAĞIYUVARLA',
    ROUNDUP: 'YUKARIYUVARLA',
    ROWS: 'SATIRSAY',
    SIN: 'SİN',
    SPLIT: 'SPLIT',
    SQRT: 'KAREKÖK',
    SUM: 'TOPLA',
    SUMIF: 'ETOPLA',
    SUMIFS: 'ÇOKETOPLA',
    SUMPRODUCT: 'TOPLA.ÇARPIM',
    SUMSQ: 'TOPKARE',
    SWITCH: '',
    TAN: 'TAN',
    TEXT: 'METNEÇEVİR',
    TRANSPOSE: 'DEVRİK_DÖNÜŞÜM',
    TRUE: 'DOĞRU',
    TRUNC: 'NSAT',
    VLOOKUP: 'DÜŞEYARA',
    XOR: 'ÖZELVEYA',
    YEAR: 'YIL'
  },
  langCode: 'trTR',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet'
  }
};

if (!_.default.languages) {
  _.default.languages = {};
}

_.default.languages[dictionary.langCode] = dictionary;
var _default = dictionary;
exports.default = _default;

/***/ })
/******/ ])["___"];
});