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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 5:
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

/***/ })

/******/ })["___"];
});