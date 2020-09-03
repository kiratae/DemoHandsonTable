"use strict";

require("core-js/modules/es.function.name");

require("core-js/modules/es.math.log10");

exports.__esModule = true;
exports.Exporter = exports.DetailedCellError = exports.ExportedNamedExpressionChange = exports.ExportedCellChange = void 0;

var _Cell = require("./Cell");

var _NamedExpressions = require("./NamedExpressions");

var _InterpreterValue = require("./interpreter/InterpreterValue");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A list of cells which values changed after the operation, their absolute addresses and new values.
 */
var ExportedCellChange = /*#__PURE__*/function () {
  function ExportedCellChange(address, newValue) {
    _classCallCheck(this, ExportedCellChange);

    this.address = address;
    this.newValue = newValue;
  }

  _createClass(ExportedCellChange, [{
    key: "col",
    get: function get() {
      return this.address.col;
    }
  }, {
    key: "row",
    get: function get() {
      return this.address.row;
    }
  }, {
    key: "sheet",
    get: function get() {
      return this.address.sheet;
    }
  }, {
    key: "value",
    get: function get() {
      return this.newValue;
    }
  }]);

  return ExportedCellChange;
}();

exports.ExportedCellChange = ExportedCellChange;

var ExportedNamedExpressionChange = function ExportedNamedExpressionChange(name, newValue) {
  _classCallCheck(this, ExportedNamedExpressionChange);

  this.name = name;
  this.newValue = newValue;
};

exports.ExportedNamedExpressionChange = ExportedNamedExpressionChange;

var DetailedCellError = function DetailedCellError(error, value) {
  _classCallCheck(this, DetailedCellError);

  this.value = value;
  this.type = error.type;
  this.message = error.message || '';
};

exports.DetailedCellError = DetailedCellError;

var Exporter = /*#__PURE__*/function () {
  function Exporter(config, namedExpressions) {
    _classCallCheck(this, Exporter);

    this.config = config;
    this.namedExpressions = namedExpressions;
  }

  _createClass(Exporter, [{
    key: "exportChange",
    value: function exportChange(change) {
      if (change.sheet === _NamedExpressions.NamedExpressions.SHEET_FOR_WORKBOOK_EXPRESSIONS) {
        var namedExpression = this.namedExpressions.namedExpressionInAddress(change.row);

        if (!namedExpression) {
          throw 'Missing named expression';
        }

        return new ExportedNamedExpressionChange(namedExpression.displayName, this.exportValue(change.value));
      } else {
        return new ExportedCellChange((0, _Cell.simpleCellAddress)(change.sheet, change.col, change.row), this.exportValue(change.value));
      }
    }
  }, {
    key: "exportValue",
    value: function exportValue(value) {
      if (value instanceof _InterpreterValue.SimpleRangeValue) {
        return this.detailedError(new _Cell.CellError(_Cell.ErrorType.VALUE));
      } else if (this.config.smartRounding && typeof value == 'number') {
        return this.cellValueRounding(value);
      } else if (value instanceof _Cell.CellError) {
        return this.detailedError(value);
      } else if (value === _Cell.EmptyValue) {
        return null;
      } else {
        return value;
      }
    }
  }, {
    key: "detailedError",
    value: function detailedError(error) {
      return new DetailedCellError(error, this.config.translationPackage.getErrorTranslation(error.type));
    }
  }, {
    key: "cellValueRounding",
    value: function cellValueRounding(value) {
      if (value === 0) {
        return value;
      }

      var magnitudeMultiplierExponent = Math.floor(Math.log10(Math.abs(value)));
      var placesMultiplier = Math.pow(10, this.config.precisionRounding - magnitudeMultiplierExponent);

      if (value < 0) {
        return -Math.round(-value * placesMultiplier) / placesMultiplier;
      } else {
        return Math.round(value * placesMultiplier) / placesMultiplier;
      }
    }
  }]);

  return Exporter;
}();

exports.Exporter = Exporter;