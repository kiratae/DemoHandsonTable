"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.Config = void 0;

var _DateTimeDefault = require("./DateTimeDefault");

var _DateTimeHelper = require("./DateTimeHelper");

var _errors = require("./errors");

var _ChooseAddressMappingPolicy = require("./DependencyGraph/AddressMapping/ChooseAddressMappingPolicy");

var _format = require("./format/format");

var _HyperFormula = require("./HyperFormula");

var _licenseKeyValidator = require("./helpers/licenseKeyValidator");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var __classPrivateFieldSet = void 0 && (void 0).__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var __classPrivateFieldGet = void 0 && (void 0).__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var _licenseKeyValidityState;

var PossibleGPUModeString = ['gpu', 'cpu', 'dev'];

var Config = /*#__PURE__*/function () {
  function Config() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        accentSensitive = _ref.accentSensitive,
        caseSensitive = _ref.caseSensitive,
        caseFirst = _ref.caseFirst,
        chooseAddressMappingPolicy = _ref.chooseAddressMappingPolicy,
        dateFormats = _ref.dateFormats,
        timeFormats = _ref.timeFormats,
        functionArgSeparator = _ref.functionArgSeparator,
        decimalSeparator = _ref.decimalSeparator,
        thousandSeparator = _ref.thousandSeparator,
        language = _ref.language,
        licenseKey = _ref.licenseKey,
        functionPlugins = _ref.functionPlugins,
        gpuMode = _ref.gpuMode,
        ignorePunctuation = _ref.ignorePunctuation,
        leapYear1900 = _ref.leapYear1900,
        localeLang = _ref.localeLang,
        smartRounding = _ref.smartRounding,
        matrixDetection = _ref.matrixDetection,
        matrixDetectionThreshold = _ref.matrixDetectionThreshold,
        nullYear = _ref.nullYear,
        parseDateTime = _ref.parseDateTime,
        stringifyDateTime = _ref.stringifyDateTime,
        stringifyDuration = _ref.stringifyDuration,
        precisionEpsilon = _ref.precisionEpsilon,
        precisionRounding = _ref.precisionRounding,
        useColumnIndex = _ref.useColumnIndex,
        vlookupThreshold = _ref.vlookupThreshold,
        nullDate = _ref.nullDate,
        useStats = _ref.useStats,
        undoLimit = _ref.undoLimit,
        useRegularExpressions = _ref.useRegularExpressions,
        useWildcards = _ref.useWildcards,
        matchWholeCell = _ref.matchWholeCell,
        maxRows = _ref.maxRows,
        maxColumns = _ref.maxColumns;

    _classCallCheck(this, Config);

    /**
     * Set automatically based on licenseKey checking result.
     *
     * @internal
     */
    _licenseKeyValidityState.set(this, void 0);

    this.accentSensitive = this.valueFromParam(accentSensitive, 'boolean', 'accentSensitive');
    this.caseSensitive = this.valueFromParam(caseSensitive, 'boolean', 'caseSensitive');
    this.caseFirst = this.valueFromParam(caseFirst, ['upper', 'lower', 'false'], 'caseFirst');
    this.ignorePunctuation = this.valueFromParam(ignorePunctuation, 'boolean', 'ignorePunctuation');
    this.chooseAddressMappingPolicy = chooseAddressMappingPolicy !== null && chooseAddressMappingPolicy !== void 0 ? chooseAddressMappingPolicy : Config.defaultConfig.chooseAddressMappingPolicy;
    this.dateFormats = this.valueFromParamCheck(dateFormats, Array.isArray, 'array', 'dateFormats');
    this.timeFormats = this.valueFromParamCheck(timeFormats, Array.isArray, 'array', 'timeFormats');
    this.functionArgSeparator = this.valueFromParam(functionArgSeparator, 'string', 'functionArgSeparator');
    this.decimalSeparator = this.valueFromParam(decimalSeparator, ['.', ','], 'decimalSeparator');
    this.language = this.valueFromParam(language, 'string', 'language');
    this.licenseKey = this.valueFromParam(licenseKey, 'string', 'licenseKey');

    __classPrivateFieldSet(this, _licenseKeyValidityState, (0, _licenseKeyValidator.checkLicenseKeyValidity)(this.licenseKey));

    this.thousandSeparator = this.valueFromParam(thousandSeparator, ['', ',', ' ', '.'], 'thousandSeparator');
    this.localeLang = this.valueFromParam(localeLang, 'string', 'localeLang');
    this.functionPlugins = functionPlugins !== null && functionPlugins !== void 0 ? functionPlugins : Config.defaultConfig.functionPlugins;
    this.gpuMode = this.valueFromParam(gpuMode, PossibleGPUModeString, 'gpuMode');
    this.smartRounding = this.valueFromParam(smartRounding, 'boolean', 'smartRounding');
    this.matrixDetection = this.valueFromParam(matrixDetection, 'boolean', 'matrixDetection');
    this.matrixDetectionThreshold = this.valueFromParam(matrixDetectionThreshold, 'number', 'matrixDetectionThreshold');
    this.validateNumberToBeAtLeast(this.matrixDetectionThreshold, 'matrixDetectionThreshold', 1);
    this.nullYear = this.valueFromParam(nullYear, 'number', 'nullYear');
    this.validateNumberToBeAtLeast(this.nullYear, 'nullYear', 0);
    this.validateNumberToBeAtMost(this.nullYear, 'nullYear', 100);
    this.precisionRounding = this.valueFromParam(precisionRounding, 'number', 'precisionRounding');
    this.validateNumberToBeAtLeast(this.precisionRounding, 'precisionRounding', 0);
    this.precisionEpsilon = this.valueFromParam(precisionEpsilon, 'number', 'precisionEpsilon');
    this.validateNumberToBeAtLeast(this.precisionEpsilon, 'precisionEpsilon', 0);
    this.useColumnIndex = this.valueFromParam(useColumnIndex, 'boolean', 'useColumnIndex');
    this.useStats = this.valueFromParam(useStats, 'boolean', 'useStats');
    this.vlookupThreshold = this.valueFromParam(vlookupThreshold, 'number', 'vlookupThreshold');
    this.validateNumberToBeAtLeast(this.vlookupThreshold, 'vlookupThreshold', 1);
    this.parseDateTime = this.valueFromParam(parseDateTime, 'function', 'parseDateTime');
    this.stringifyDateTime = this.valueFromParam(stringifyDateTime, 'function', 'stringifyDateTime');
    this.stringifyDuration = this.valueFromParam(stringifyDuration, 'function', 'stringifyDuration');
    this.translationPackage = _HyperFormula.HyperFormula.getLanguage(this.language);
    this.errorMapping = this.translationPackage.buildErrorMapping();
    this.nullDate = this.valueFromParamCheck(nullDate, _DateTimeHelper.instanceOfSimpleDate, 'IDate', 'nullDate');
    this.leapYear1900 = this.valueFromParam(leapYear1900, 'boolean', 'leapYear1900');
    this.undoLimit = this.valueFromParam(undoLimit, 'number', 'undoLimit');
    this.useRegularExpressions = this.valueFromParam(useRegularExpressions, 'boolean', 'useRegularExpressions');
    this.useWildcards = this.valueFromParam(useWildcards, 'boolean', 'useWildcards');
    this.matchWholeCell = this.valueFromParam(matchWholeCell, 'boolean', 'matchWholeCell');
    this.validateNumberToBeAtLeast(this.undoLimit, 'undoLimit', 0);
    this.maxRows = this.valueFromParam(maxRows, 'number', 'maxRows');
    this.validateNumberToBeAtLeast(this.maxRows, 'maxRows', 1);
    this.maxColumns = this.valueFromParam(maxColumns, 'number', 'maxColumns');
    this.validateNumberToBeAtLeast(this.maxColumns, 'maxColumns', 1);
    this.checkIfParametersNotInConflict({
      value: this.decimalSeparator,
      name: 'decimalSeparator'
    }, {
      value: this.functionArgSeparator,
      name: 'functionArgSeparator'
    }, {
      value: this.thousandSeparator,
      name: 'thousandSeparator'
    });
  }
  /**
   * Proxied property to its private counterpart. This makes the property
   * as accessible as the other Config options but without ability to change the value.
   *
   * @internal
   */


  _createClass(Config, [{
    key: "getConfig",
    value: function getConfig() {
      return this;
    }
  }, {
    key: "mergeConfig",
    value: function mergeConfig(init) {
      var mergedConfig = Object.assign({}, this.getConfig(), init);
      return new Config(mergedConfig);
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "valueFromParam",
    value: function valueFromParam(inputValue, expectedType, paramName) {
      if (typeof inputValue === 'undefined') {
        return Config.defaultConfig[paramName];
      } else if (typeof expectedType === 'string') {
        if (_typeof(inputValue) === expectedType) {
          return inputValue;
        } else {
          throw new _errors.ExpectedValueOfTypeError(expectedType, paramName);
        }
      } else {
        if (expectedType.includes(inputValue)) {
          return inputValue;
        } else {
          throw new _errors.ExpectedOneOfValuesError(expectedType.map(function (val) {
            return '\'' + val + '\'';
          }).join(' '), paramName);
        }
      }
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any

  }, {
    key: "valueFromParamCheck",
    value: function valueFromParamCheck(inputValue, typeCheck, expectedType, paramName) {
      if (typeCheck(inputValue)) {
        return inputValue;
      } else if (typeof inputValue === 'undefined') {
        return Config.defaultConfig[paramName];
      } else {
        throw new _errors.ExpectedValueOfTypeError(expectedType, paramName);
      }
    }
  }, {
    key: "checkIfParametersNotInConflict",
    value: function checkIfParametersNotInConflict() {
      var valuesMap = new Map();

      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      params.forEach(function (param) {
        var names = valuesMap.get(param.value) || [];
        names.push(param.name);
        valuesMap.set(param.value, names);
      });
      var duplicates = [];

      var _iterator = _createForOfIteratorHelper(valuesMap.values()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;

          if (entry.length > 1) {
            duplicates.push(entry);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (duplicates.length > 0) {
        var paramNames = duplicates.map(function (entry) {
          return "[".concat(entry.sort(), "]");
        }).join('; ');
        throw new Error("Config initialization failed. Parameters in conflict: ".concat(paramNames));
      }
    }
  }, {
    key: "validateNumberToBeAtLeast",
    value: function validateNumberToBeAtLeast(value, paramName, minimum) {
      if (value < minimum) {
        throw new _errors.ConfigValueTooSmallError(paramName, minimum);
      }
    }
  }, {
    key: "validateNumberToBeAtMost",
    value: function validateNumberToBeAtMost(value, paramName, maximum) {
      if (value > maximum) {
        throw new _errors.ConfigValueTooBigError(paramName, maximum);
      }
    }
  }, {
    key: "licenseKeyValidityState",
    get: function get() {
      return __classPrivateFieldGet(this, _licenseKeyValidityState);
    }
  }]);

  return Config;
}();

exports.Config = Config;
_licenseKeyValidityState = new WeakMap();
Config.defaultConfig = {
  accentSensitive: false,
  caseSensitive: false,
  caseFirst: 'lower',
  ignorePunctuation: false,
  chooseAddressMappingPolicy: new _ChooseAddressMappingPolicy.AlwaysDense(),
  dateFormats: ['DD/MM/YYYY', 'DD/MM/YY'],
  timeFormats: ['hh:mm', 'hh:mm:ss.sss'],
  functionArgSeparator: ',',
  decimalSeparator: '.',
  thousandSeparator: '',
  language: 'enGB',
  licenseKey: '',
  functionPlugins: [],
  gpuMode: 'gpu',
  leapYear1900: false,
  smartRounding: true,
  localeLang: 'en',
  matrixDetection: true,
  matrixDetectionThreshold: 100,
  nullYear: 30,
  parseDateTime: _DateTimeDefault.defaultParseToDateTime,
  stringifyDateTime: _format.defaultStringifyDateTime,
  stringifyDuration: _format.defaultStringifyDuration,
  precisionEpsilon: 1e-13,
  precisionRounding: 14,
  useColumnIndex: false,
  useStats: false,
  vlookupThreshold: 20,
  nullDate: {
    year: 1899,
    month: 12,
    day: 30
  },
  undoLimit: 20,
  useRegularExpressions: false,
  useWildcards: true,
  matchWholeCell: true,
  maxRows: 40000,
  maxColumns: 18278
};