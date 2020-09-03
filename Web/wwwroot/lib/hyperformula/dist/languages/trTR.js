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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 17:
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

/******/ })["___"];
});