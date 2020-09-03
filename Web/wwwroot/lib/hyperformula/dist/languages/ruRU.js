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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 15:
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

/***/ })

/******/ })["___"];
});