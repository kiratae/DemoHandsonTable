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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 6:
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

/***/ })

/******/ })["___"];
});