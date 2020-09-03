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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 8:
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

/***/ })

/******/ })["___"];
});