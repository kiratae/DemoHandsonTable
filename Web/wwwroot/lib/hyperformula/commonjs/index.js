"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-names");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.default = void 0;

var _Cell = require("./Cell");

exports.CellType = _Cell.CellType;
exports.CellValueType = _Cell.CellValueType;
exports.ErrorType = _Cell.ErrorType;

var _CellValue = require("./CellValue");

exports.DetailedCellError = _CellValue.DetailedCellError;
exports.ExportedCellChange = _CellValue.ExportedCellChange;
exports.ExportedNamedExpressionChange = _CellValue.ExportedNamedExpressionChange;

var _HyperFormula2 = require("./HyperFormula");

exports.HyperFormula = _HyperFormula2.HyperFormula;

var _Config = require("./Config");

var _enGB = _interopRequireDefault(require("./i18n/languages/enGB"));

var _errors = require("./errors");

exports.ConfigValueTooBigError = _errors.ConfigValueTooBigError;
exports.ConfigValueTooSmallError = _errors.ConfigValueTooSmallError;
exports.EvaluationSuspendedError = _errors.EvaluationSuspendedError;
exports.ExpectedOneOfValuesError = _errors.ExpectedOneOfValuesError;
exports.ExpectedValueOfTypeError = _errors.ExpectedValueOfTypeError;
exports.FunctionPluginValidationError = _errors.FunctionPluginValidationError;
exports.InvalidAddressError = _errors.InvalidAddressError;
exports.InvalidArgumentsError = _errors.InvalidArgumentsError;
exports.LanguageAlreadyRegisteredError = _errors.LanguageAlreadyRegisteredError;
exports.LanguageNotRegisteredError = _errors.LanguageNotRegisteredError;
exports.MatrixFormulasNotSupportedError = _errors.MatrixFormulasNotSupportedError;
exports.MissingTranslationError = _errors.MissingTranslationError;
exports.NamedExpressionDoesNotExistError = _errors.NamedExpressionDoesNotExistError;
exports.NamedExpressionNameIsAlreadyTakenError = _errors.NamedExpressionNameIsAlreadyTakenError;
exports.NamedExpressionNameIsInvalidError = _errors.NamedExpressionNameIsInvalidError;
exports.NoOperationToRedoError = _errors.NoOperationToRedoError;
exports.NoOperationToUndoError = _errors.NoOperationToUndoError;
exports.NoRelativeAddressesAllowedError = _errors.NoRelativeAddressesAllowedError;
exports.NoSheetWithIdError = _errors.NoSheetWithIdError;
exports.NoSheetWithNameError = _errors.NoSheetWithNameError;
exports.NotAFormulaError = _errors.NotAFormulaError;
exports.NothingToPasteError = _errors.NothingToPasteError;
exports.ProtectedFunctionTranslationError = _errors.ProtectedFunctionTranslationError;
exports.SheetNameAlreadyTakenError = _errors.SheetNameAlreadyTakenError;
exports.SheetSizeLimitExceededError = _errors.SheetSizeLimitExceededError;
exports.SourceLocationHasMatrixError = _errors.SourceLocationHasMatrixError;
exports.TargetLocationHasMatrixError = _errors.TargetLocationHasMatrixError;
exports.UnableToParseError = _errors.UnableToParseError;

var plugins = _interopRequireWildcard(require("./interpreter/plugin"));

var _interpreter = require("./interpreter");

exports.FunctionPlugin = _interpreter.FunctionPlugin;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** @internal */
var HyperFormulaNS = /*#__PURE__*/function (_HyperFormula) {
  _inherits(HyperFormulaNS, _HyperFormula);

  var _super = _createSuper(HyperFormulaNS);

  function HyperFormulaNS() {
    _classCallCheck(this, HyperFormulaNS);

    return _super.apply(this, arguments);
  }

  return HyperFormulaNS;
}(_HyperFormula2.HyperFormula);

HyperFormulaNS.HyperFormula = _HyperFormula2.HyperFormula;
HyperFormulaNS.ErrorType = _Cell.ErrorType;
HyperFormulaNS.CellType = _Cell.CellType;
HyperFormulaNS.CellValueType = _Cell.CellValueType;
HyperFormulaNS.DetailedCellError = _CellValue.DetailedCellError;
HyperFormulaNS.ExportedCellChange = _CellValue.ExportedCellChange;
HyperFormulaNS.ExportedNamedExpressionChange = _CellValue.ExportedNamedExpressionChange;
HyperFormulaNS.ConfigValueTooBigError = _errors.ConfigValueTooBigError;
HyperFormulaNS.ConfigValueTooSmallError = _errors.ConfigValueTooSmallError;
HyperFormulaNS.EvaluationSuspendedError = _errors.EvaluationSuspendedError;
HyperFormulaNS.ExpectedOneOfValuesError = _errors.ExpectedOneOfValuesError;
HyperFormulaNS.ExpectedValueOfTypeError = _errors.ExpectedValueOfTypeError;
HyperFormulaNS.FunctionPlugin = _interpreter.FunctionPlugin;
HyperFormulaNS.FunctionPluginValidationError = _errors.FunctionPluginValidationError;
HyperFormulaNS.InvalidAddressError = _errors.InvalidAddressError;
HyperFormulaNS.InvalidArgumentsError = _errors.InvalidArgumentsError;
HyperFormulaNS.LanguageNotRegisteredError = _errors.LanguageNotRegisteredError;
HyperFormulaNS.LanguageAlreadyRegisteredError = _errors.LanguageAlreadyRegisteredError;
HyperFormulaNS.MatrixFormulasNotSupportedError = _errors.MatrixFormulasNotSupportedError;
HyperFormulaNS.MissingTranslationError = _errors.MissingTranslationError;
HyperFormulaNS.NamedExpressionDoesNotExistError = _errors.NamedExpressionDoesNotExistError;
HyperFormulaNS.NamedExpressionNameIsAlreadyTakenError = _errors.NamedExpressionNameIsAlreadyTakenError;
HyperFormulaNS.NamedExpressionNameIsInvalidError = _errors.NamedExpressionNameIsInvalidError;
HyperFormulaNS.NoOperationToRedoError = _errors.NoOperationToRedoError;
HyperFormulaNS.NoOperationToUndoError = _errors.NoOperationToUndoError;
HyperFormulaNS.NoRelativeAddressesAllowedError = _errors.NoRelativeAddressesAllowedError;
HyperFormulaNS.NoSheetWithIdError = _errors.NoSheetWithIdError;
HyperFormulaNS.NoSheetWithNameError = _errors.NoSheetWithNameError;
HyperFormulaNS.NotAFormulaError = _errors.NotAFormulaError;
HyperFormulaNS.NothingToPasteError = _errors.NothingToPasteError;
HyperFormulaNS.ProtectedFunctionTranslationError = _errors.ProtectedFunctionTranslationError;
HyperFormulaNS.SheetNameAlreadyTakenError = _errors.SheetNameAlreadyTakenError;
HyperFormulaNS.SheetSizeLimitExceededError = _errors.SheetSizeLimitExceededError;
HyperFormulaNS.SourceLocationHasMatrixError = _errors.SourceLocationHasMatrixError;
HyperFormulaNS.TargetLocationHasMatrixError = _errors.TargetLocationHasMatrixError;
HyperFormulaNS.UnableToParseError = _errors.UnableToParseError;
var defaultLanguage = _Config.Config.defaultConfig.language;

_HyperFormula2.HyperFormula.registerLanguage(defaultLanguage, _enGB.default);

_HyperFormula2.HyperFormula.languages[_enGB.default.langCode] = _enGB.default;

var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(plugins)),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var pluginName = _step.value;

    if (!pluginName.startsWith('_')) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      _HyperFormula2.HyperFormula.registerFunctionPlugin(plugins[pluginName]);
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _default = HyperFormulaNS;
exports.default = _default;