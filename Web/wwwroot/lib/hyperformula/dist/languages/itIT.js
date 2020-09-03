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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 10:
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

/***/ })

/******/ })["___"];
});