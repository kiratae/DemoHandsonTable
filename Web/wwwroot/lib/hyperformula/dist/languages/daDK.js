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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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

/***/ })
/******/ ])["___"];
});