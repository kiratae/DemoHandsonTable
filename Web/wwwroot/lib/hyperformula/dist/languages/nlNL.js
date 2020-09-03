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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 12:
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

/***/ })

/******/ })["___"];
});