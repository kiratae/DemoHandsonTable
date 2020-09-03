"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.SimpleRangeValue = exports.OnlyRangeData = exports.ArrayData = void 0;

require("regenerator-runtime/runtime");

var _Cell = require("../Cell");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArrayData = /*#__PURE__*/function () {
  function ArrayData(size, data, _hasOnlyNumbers) {
    _classCallCheck(this, ArrayData);

    this.size = size;
    this.data = data;
    this._hasOnlyNumbers = _hasOnlyNumbers;
  }

  _createClass(ArrayData, [{
    key: "range",
    value: function range() {
      return undefined;
    }
  }, {
    key: "hasOnlyNumbers",
    value: function hasOnlyNumbers() {
      return this._hasOnlyNumbers;
    }
  }, {
    key: "valuesFromTopLeftCorner",
    value: /*#__PURE__*/regeneratorRuntime.mark(function valuesFromTopLeftCorner() {
      var i, j;
      return regeneratorRuntime.wrap(function valuesFromTopLeftCorner$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < this.size.height)) {
                _context.next = 12;
                break;
              }

              j = 0;

            case 3:
              if (!(j < this.size.width)) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return this.data[i][j];

            case 6:
              j++;
              _context.next = 3;
              break;

            case 9:
              i++;
              _context.next = 1;
              break;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, valuesFromTopLeftCorner, this);
    })
  }, {
    key: "raw",
    value: function raw() {
      return this.data;
    }
  }, {
    key: "rawNumbers",
    value: function rawNumbers() {
      if (this.hasOnlyNumbers()) {
        return this.data;
      } else {
        throw new Error('Data is not only numbers');
      }
    }
  }]);

  return ArrayData;
}();

exports.ArrayData = ArrayData;

var OnlyRangeData = /*#__PURE__*/function () {
  function OnlyRangeData(size, _range, dependencyGraph) {
    _classCallCheck(this, OnlyRangeData);

    this.size = size;
    this._range = _range;
    this.dependencyGraph = dependencyGraph;
  }

  _createClass(OnlyRangeData, [{
    key: "raw",
    value: function raw() {
      this.ensureThatComputed(); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      return this.data;
    }
  }, {
    key: "rawNumbers",
    value: function rawNumbers() {
      if (this.hasOnlyNumbers()) {
        return this.data;
      } else {
        throw new Error('Data is not only numbers');
      }
    }
  }, {
    key: "hasOnlyNumbers",
    value: function hasOnlyNumbers() {
      this.ensureThatComputed();

      if (this._hasOnlyNumbers === undefined) {
        var _iterator = _createForOfIteratorHelper(this.valuesFromTopLeftCorner()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var v = _step.value;

            if (typeof v !== 'number') {
              this._hasOnlyNumbers = false;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this._hasOnlyNumbers = true;
      }

      return this._hasOnlyNumbers;
    }
  }, {
    key: "range",
    value: function range() {
      return this._range;
    }
  }, {
    key: "valuesFromTopLeftCorner",
    value: /*#__PURE__*/regeneratorRuntime.mark(function valuesFromTopLeftCorner() {
      var i, j;
      return regeneratorRuntime.wrap(function valuesFromTopLeftCorner$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.ensureThatComputed();
              i = 0;

            case 2:
              if (!(i < this.data.length)) {
                _context2.next = 13;
                break;
              }

              j = 0;

            case 4:
              if (!(j < this.data[0].length)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 7;
              return this.data[i][j];

            case 7:
              j++;
              _context2.next = 4;
              break;

            case 10:
              i++;
              _context2.next = 2;
              break;

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, valuesFromTopLeftCorner, this);
    })
  }, {
    key: "ensureThatComputed",
    value: function ensureThatComputed() {
      if (this.data === undefined) {
        this.data = this.computeDataFromDependencyGraph();
      }
    }
  }, {
    key: "computeDataFromDependencyGraph",
    value: function computeDataFromDependencyGraph() {
      var result = [];
      var i = 0;
      var row = [];

      var _iterator2 = _createForOfIteratorHelper(this._range.addresses(this.dependencyGraph)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var cellFromRange = _step2.value;
          var value = this.dependencyGraph.getCellValue(cellFromRange);

          if (value instanceof SimpleRangeValue) {
            row.push(new _Cell.CellError(_Cell.ErrorType.VALUE));
          } else if (typeof value === 'number') {
            row.push(value);
          } else {
            row.push(value);
            this._hasOnlyNumbers = false;
          }

          ++i;

          if (i % this.size.width === 0) {
            i = 0;
            result.push(_toConsumableArray(row));
            row = [];
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return result;
    }
  }]);

  return OnlyRangeData;
}();

exports.OnlyRangeData = OnlyRangeData;

var SimpleRangeValue = /*#__PURE__*/function () {
  function SimpleRangeValue(data) {
    _classCallCheck(this, SimpleRangeValue);

    this.data = data;
  }

  _createClass(SimpleRangeValue, [{
    key: "width",
    value: function width() {
      return this.data.size.width;
    }
  }, {
    key: "height",
    value: function height() {
      return this.data.size.height;
    }
  }, {
    key: "raw",
    value: function raw() {
      return this.data.raw();
    }
  }, {
    key: "valuesFromTopLeftCorner",
    value: /*#__PURE__*/regeneratorRuntime.mark(function valuesFromTopLeftCorner() {
      return regeneratorRuntime.wrap(function valuesFromTopLeftCorner$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.delegateYield(this.data.valuesFromTopLeftCorner(), "t0", 1);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, valuesFromTopLeftCorner, this);
    })
  }, {
    key: "numberOfElements",
    value: function numberOfElements() {
      return this.data.size.width * this.data.size.height;
    }
  }, {
    key: "hasOnlyNumbers",
    value: function hasOnlyNumbers() {
      return this.data.hasOnlyNumbers();
    }
  }, {
    key: "rawNumbers",
    value: function rawNumbers() {
      return this.data.rawNumbers();
    }
  }, {
    key: "range",
    value: function range() {
      return this.data.range();
    }
  }, {
    key: "sameDimensionsAs",
    value: function sameDimensionsAs(other) {
      return this.width() === other.width() && this.height() === other.height();
    }
  }, {
    key: "size",
    get: function get() {
      return this.data.size;
    }
  }], [{
    key: "onlyNumbersDataWithRange",
    value: function onlyNumbersDataWithRange(data, size, _range) {
      return new SimpleRangeValue(new ArrayData(size, data, true));
    }
  }, {
    key: "onlyNumbersDataWithoutRange",
    value: function onlyNumbersDataWithoutRange(data, size) {
      return new SimpleRangeValue(new ArrayData(size, data, true));
    }
  }, {
    key: "onlyRange",
    value: function onlyRange(range, dependencyGraph) {
      return new SimpleRangeValue(new OnlyRangeData({
        width: range.width(),
        height: range.height()
      }, range, dependencyGraph));
    }
  }, {
    key: "fromScalar",
    value: function fromScalar(scalar) {
      var hasOnlyNumbers = typeof scalar === 'number';
      return new SimpleRangeValue(new ArrayData({
        width: 1,
        height: 1
      }, [[scalar]], hasOnlyNumbers));
    }
  }]);

  return SimpleRangeValue;
}();

exports.SimpleRangeValue = SimpleRangeValue;