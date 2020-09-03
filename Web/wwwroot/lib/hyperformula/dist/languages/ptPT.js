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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 14:
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

/***/ })

/******/ })["___"];
});