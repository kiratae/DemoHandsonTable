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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */,
/* 3 */,
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

/***/ })
/******/ ])["___"];
});