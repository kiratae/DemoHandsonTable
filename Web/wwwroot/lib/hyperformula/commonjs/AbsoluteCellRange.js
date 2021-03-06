"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-finite");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.AbsoluteRowRange = exports.AbsoluteColumnRange = exports.AbsoluteCellRange = exports.WRONG_RANGE_SIZE = exports.DIFFERENT_SHEETS_ERROR = void 0;

require("regenerator-runtime/runtime");

var _Cell = require("./Cell");

var _parser = require("./parser");

var _Span = require("./Span");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DIFFERENT_SHEETS_ERROR = 'AbsoluteCellRange: Start and end are in different sheets';
exports.DIFFERENT_SHEETS_ERROR = DIFFERENT_SHEETS_ERROR;
var WRONG_RANGE_SIZE = 'AbsoluteCellRange: Wrong range size';
exports.WRONG_RANGE_SIZE = WRONG_RANGE_SIZE;

var AbsoluteCellRange = /*#__PURE__*/function () {
  function AbsoluteCellRange(start, end) {
    _classCallCheck(this, AbsoluteCellRange);

    if (start.sheet !== end.sheet) {
      throw new Error(DIFFERENT_SHEETS_ERROR);
    }

    this.start = (0, _Cell.simpleCellAddress)(start.sheet, start.col, start.row);
    this.end = (0, _Cell.simpleCellAddress)(end.sheet, end.col, end.row);
  }

  _createClass(AbsoluteCellRange, [{
    key: "isFinite",
    value: function isFinite() {
      return Number.isFinite(this.size());
    }
  }, {
    key: "doesOverlap",
    value: function doesOverlap(other) {
      if (this.start.sheet != other.start.sheet) {
        return false;
      }

      if (this.end.row < other.start.row || this.start.row > other.end.row) {
        return false;
      }

      if (this.end.col < other.start.col || this.start.col > other.end.col) {
        return false;
      }

      return true;
    }
  }, {
    key: "addressInRange",
    value: function addressInRange(address) {
      if (this.sheet !== address.sheet) {
        return false;
      }

      if (this.start.row <= address.row && this.end.row >= address.row && this.start.col <= address.col && this.end.col >= address.col) {
        return true;
      }

      return false;
    }
  }, {
    key: "columnInRange",
    value: function columnInRange(address) {
      if (this.sheet !== address.sheet) {
        return false;
      }

      return this.start.col <= address.col && this.end.col >= address.col;
    }
  }, {
    key: "rowInRange",
    value: function rowInRange(address) {
      if (this.sheet !== address.sheet) {
        return false;
      }

      return this.start.row <= address.row && this.end.row >= address.row;
    }
  }, {
    key: "containsRange",
    value: function containsRange(range) {
      return this.addressInRange(range.start) && this.addressInRange(range.end);
    }
  }, {
    key: "intersectionWith",
    value: function intersectionWith(other) {
      if (this.sheet !== other.start.sheet) {
        return null;
      }

      var startRow = Math.max(this.start.row, other.start.row);
      var endRow = Math.min(this.end.row, other.end.row);
      var startCol = Math.max(this.start.col, other.start.col);
      var endCol = Math.min(this.end.col, other.end.col);

      if (startRow > endRow || startCol > endCol) {
        return null;
      }

      return new AbsoluteCellRange((0, _Cell.simpleCellAddress)(this.sheet, startCol, startRow), (0, _Cell.simpleCellAddress)(this.sheet, endCol, endRow));
    }
  }, {
    key: "includesRow",
    value: function includesRow(row) {
      return this.start.row < row && this.end.row >= row;
    }
  }, {
    key: "includesColumn",
    value: function includesColumn(column) {
      return this.start.col < column && this.end.col >= column;
    }
  }, {
    key: "shiftByRows",
    value: function shiftByRows(numberOfRows) {
      this.start.row += numberOfRows;
      this.end.row += numberOfRows;
    }
  }, {
    key: "expandByRows",
    value: function expandByRows(numberOfRows) {
      this.end.row += numberOfRows;
    }
  }, {
    key: "shiftByColumns",
    value: function shiftByColumns(numberOfColumns) {
      this.start.col += numberOfColumns;
      this.end.col += numberOfColumns;
    }
  }, {
    key: "shifted",
    value: function shifted(byCols, byRows) {
      return AbsoluteCellRange.spanFrom((0, _Cell.simpleCellAddress)(this.sheet, this.start.col + byCols, this.start.row + byRows), this.width(), this.height());
    }
  }, {
    key: "expandByColumns",
    value: function expandByColumns(numberOfColumns) {
      this.end.col += numberOfColumns;
    }
  }, {
    key: "moveToSheet",
    value: function moveToSheet(toSheet) {
      this.start.sheet = toSheet;
      this.end.sheet = toSheet;
    }
  }, {
    key: "removeSpan",
    value: function removeSpan(span) {
      if (span instanceof _Span.RowsSpan) {
        this.removeRows(span.start, span.end);
      } else {
        this.removeColumns(span.start, span.end);
      }
    }
  }, {
    key: "removeRows",
    value: function removeRows(rowStart, rowEnd) {
      if (rowStart > this.end.row) {
        return;
      }

      if (rowEnd < this.start.row) {
        var numberOfRows = rowEnd - rowStart + 1;
        return this.shiftByRows(-numberOfRows);
      }

      if (rowStart <= this.start.row) {
        this.start.row = rowStart;
      }

      this.end.row -= Math.min(rowEnd, this.end.row) - rowStart + 1;
    }
  }, {
    key: "removeColumns",
    value: function removeColumns(columnStart, columnEnd) {
      if (columnStart > this.end.col) {
        return;
      }

      if (columnEnd < this.start.col) {
        var numberOfColumns = columnEnd - columnStart + 1;
        return this.shiftByColumns(-numberOfColumns);
      }

      if (columnStart <= this.start.col) {
        this.start.col = columnStart;
      }

      this.end.col -= Math.min(columnEnd, this.end.col) - columnStart + 1;
    }
  }, {
    key: "shouldBeRemoved",
    value: function shouldBeRemoved() {
      return this.width() <= 0 || this.height() <= 0;
    }
  }, {
    key: "rangeWithSameWidth",
    value: function rangeWithSameWidth(startRow, numberOfRows) {
      return AbsoluteCellRange.spanFrom((0, _Cell.simpleCellAddress)(this.sheet, this.start.col, startRow), this.width(), numberOfRows);
    }
  }, {
    key: "rangeWithSameHeight",
    value: function rangeWithSameHeight(startColumn, numberOfColumns) {
      return AbsoluteCellRange.spanFrom((0, _Cell.simpleCellAddress)(this.sheet, startColumn, this.start.row), numberOfColumns, this.height());
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.start.sheet, ",").concat(this.start.col, ",").concat(this.start.row, ",").concat(this.end.col, ",").concat(this.end.row);
    }
  }, {
    key: "width",
    value: function width() {
      return this.end.col - this.start.col + 1;
    }
  }, {
    key: "height",
    value: function height() {
      return this.end.row - this.start.row + 1;
    }
  }, {
    key: "size",
    value: function size() {
      return this.height() * this.width();
    }
  }, {
    key: "arrayOfAddressesInRange",
    value: function arrayOfAddressesInRange() {
      var result = [];

      for (var y = 0; y < this.height(); ++y) {
        result[y] = [];

        for (var x = 0; x < this.width(); ++x) {
          var value = (0, _Cell.simpleCellAddress)(this.sheet, this.start.col + x, this.start.row + y);
          result[y].push(value);
        }
      }

      return result;
    }
  }, {
    key: "withStart",
    value: function withStart(newStart) {
      return new AbsoluteCellRange(newStart, this.end);
    }
  }, {
    key: "sameDimensionsAs",
    value: function sameDimensionsAs(other) {
      return this.width() === other.width() && this.height() === other.height();
    }
  }, {
    key: "addresses",
    value: /*#__PURE__*/regeneratorRuntime.mark(function addresses(dependencyGraph) {
      var currentRow, currentColumn;
      return regeneratorRuntime.wrap(function addresses$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              currentRow = this.start.row;

            case 1:
              if (!(currentRow <= this.effectiveEndRow(dependencyGraph))) {
                _context.next = 12;
                break;
              }

              currentColumn = this.start.col;

            case 3:
              if (!(currentColumn <= this.effectiveEndColumn(dependencyGraph))) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return (0, _Cell.simpleCellAddress)(this.start.sheet, currentColumn, currentRow);

            case 6:
              currentColumn++;
              _context.next = 3;
              break;

            case 9:
              currentRow++;
              _context.next = 1;
              break;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, addresses, this);
    })
  }, {
    key: "addressesWithDirection",
    value: /*#__PURE__*/regeneratorRuntime.mark(function addressesWithDirection(right, bottom, dependencyGraph) {
      var currentRow, currentColumn, _currentRow, _currentColumn, _currentRow2, _currentColumn2, _currentRow3, _currentColumn3;

      return regeneratorRuntime.wrap(function addressesWithDirection$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(right > 0)) {
                _context2.next = 30;
                break;
              }

              if (!(bottom > 0)) {
                _context2.next = 16;
                break;
              }

              currentRow = this.effectiveEndRow(dependencyGraph);

            case 3:
              if (!(currentRow >= this.start.row)) {
                _context2.next = 14;
                break;
              }

              currentColumn = this.effectiveEndColumn(dependencyGraph);

            case 5:
              if (!(currentColumn >= this.start.col)) {
                _context2.next = 11;
                break;
              }

              _context2.next = 8;
              return (0, _Cell.simpleCellAddress)(this.start.sheet, currentColumn, currentRow);

            case 8:
              currentColumn -= 1;
              _context2.next = 5;
              break;

            case 11:
              currentRow -= 1;
              _context2.next = 3;
              break;

            case 14:
              _context2.next = 28;
              break;

            case 16:
              _currentRow = this.start.row;

            case 17:
              if (!(_currentRow <= this.effectiveEndRow(dependencyGraph))) {
                _context2.next = 28;
                break;
              }

              _currentColumn = this.effectiveEndColumn(dependencyGraph);

            case 19:
              if (!(_currentColumn >= this.start.col)) {
                _context2.next = 25;
                break;
              }

              _context2.next = 22;
              return (0, _Cell.simpleCellAddress)(this.start.sheet, _currentColumn, _currentRow);

            case 22:
              _currentColumn -= 1;
              _context2.next = 19;
              break;

            case 25:
              _currentRow += 1;
              _context2.next = 17;
              break;

            case 28:
              _context2.next = 57;
              break;

            case 30:
              if (!(bottom > 0)) {
                _context2.next = 45;
                break;
              }

              _currentRow2 = this.effectiveEndRow(dependencyGraph);

            case 32:
              if (!(_currentRow2 >= this.start.row)) {
                _context2.next = 43;
                break;
              }

              _currentColumn2 = this.start.col;

            case 34:
              if (!(_currentColumn2 <= this.effectiveEndColumn(dependencyGraph))) {
                _context2.next = 40;
                break;
              }

              _context2.next = 37;
              return (0, _Cell.simpleCellAddress)(this.start.sheet, _currentColumn2, _currentRow2);

            case 37:
              _currentColumn2 += 1;
              _context2.next = 34;
              break;

            case 40:
              _currentRow2 -= 1;
              _context2.next = 32;
              break;

            case 43:
              _context2.next = 57;
              break;

            case 45:
              _currentRow3 = this.start.row;

            case 46:
              if (!(_currentRow3 <= this.effectiveEndRow(dependencyGraph))) {
                _context2.next = 57;
                break;
              }

              _currentColumn3 = this.start.col;

            case 48:
              if (!(_currentColumn3 <= this.effectiveEndColumn(dependencyGraph))) {
                _context2.next = 54;
                break;
              }

              _context2.next = 51;
              return (0, _Cell.simpleCellAddress)(this.start.sheet, _currentColumn3, _currentRow3);

            case 51:
              _currentColumn3 += 1;
              _context2.next = 48;
              break;

            case 54:
              _currentRow3 += 1;
              _context2.next = 46;
              break;

            case 57:
            case "end":
              return _context2.stop();
          }
        }
      }, addressesWithDirection, this);
    })
  }, {
    key: "getAddress",
    value: function getAddress(col, row) {
      if (col < 0 || row < 0 || row > this.height() - 1 || col > this.width() - 1) {
        throw Error('Index out of bound');
      }

      return (0, _Cell.simpleCellAddress)(this.start.sheet, this.start.col + col, this.start.row + row);
    }
  }, {
    key: "exceedsSheetSizeLimits",
    value: function exceedsSheetSizeLimits(maxColumns, maxRows) {
      return this.end.col >= maxColumns || this.end.row >= maxRows;
    }
  }, {
    key: "effectiveEndColumn",
    value: function effectiveEndColumn(_dependencyGraph) {
      return this.end.col;
    }
  }, {
    key: "effectiveEndRow",
    value: function effectiveEndRow(_dependencyGraph) {
      return this.end.row;
    }
  }, {
    key: "sheet",
    get: function get() {
      return this.start.sheet;
    }
  }], [{
    key: "fromAst",
    value: function fromAst(ast, baseAddress) {
      if (ast.type === _parser.AstNodeType.CELL_RANGE) {
        return AbsoluteCellRange.fromCellRange(ast, baseAddress);
      } else if (ast.type === _parser.AstNodeType.COLUMN_RANGE) {
        return AbsoluteColumnRange.fromColumnRange(ast, baseAddress);
      } else {
        return AbsoluteRowRange.fromRowRange(ast, baseAddress);
      }
    }
  }, {
    key: "fromCellRange",
    value: function fromCellRange(x, baseAddress) {
      return new AbsoluteCellRange(new _parser.CellAddress(x.start.sheet, x.start.col, x.start.row, x.start.type).toSimpleCellAddress(baseAddress), new _parser.CellAddress(x.end.sheet, x.end.col, x.end.row, x.end.type).toSimpleCellAddress(baseAddress));
    }
  }, {
    key: "spanFrom",
    value: function spanFrom(topLeftCorner, width, height) {
      if (!Number.isFinite(width) && Number.isFinite(height)) {
        return new AbsoluteRowRange(topLeftCorner.sheet, topLeftCorner.row, topLeftCorner.row + height - 1);
      } else if (!Number.isFinite(height) && Number.isFinite(width)) {
        return new AbsoluteColumnRange(topLeftCorner.sheet, topLeftCorner.col, topLeftCorner.col + width - 1);
      } else if (Number.isFinite(height) && Number.isFinite(width)) {
        return new AbsoluteCellRange(topLeftCorner, (0, _Cell.simpleCellAddress)(topLeftCorner.sheet, topLeftCorner.col + width - 1, topLeftCorner.row + height - 1));
      }

      throw new Error(WRONG_RANGE_SIZE);
    }
  }, {
    key: "fromCoordinates",
    value: function fromCoordinates(sheet, x1, y1, x2, y2) {
      return new AbsoluteCellRange((0, _Cell.simpleCellAddress)(sheet, x1, y1), (0, _Cell.simpleCellAddress)(sheet, x2, y2));
    }
  }, {
    key: "singleRangeFromCellAddress",
    value: function singleRangeFromCellAddress(cellAddress, baseAddress) {
      var simpleCellAddress = cellAddress.toSimpleCellAddress(baseAddress);
      return new AbsoluteCellRange(simpleCellAddress, simpleCellAddress);
    }
  }]);

  return AbsoluteCellRange;
}();

exports.AbsoluteCellRange = AbsoluteCellRange;

var AbsoluteColumnRange = /*#__PURE__*/function (_AbsoluteCellRange) {
  _inherits(AbsoluteColumnRange, _AbsoluteCellRange);

  var _super = _createSuper(AbsoluteColumnRange);

  _createClass(AbsoluteColumnRange, null, [{
    key: "fromColumnRange",
    value: function fromColumnRange(x, baseAddress) {
      var start = x.start.toSimpleColumnAddress(baseAddress);
      var end = x.end.toSimpleColumnAddress(baseAddress);

      if (start.sheet !== end.sheet) {
        throw new Error(DIFFERENT_SHEETS_ERROR);
      }

      return new AbsoluteColumnRange(start.sheet, start.col, end.col);
    }
  }]);

  function AbsoluteColumnRange(sheet, columnStart, columnEnd) {
    _classCallCheck(this, AbsoluteColumnRange);

    return _super.call(this, (0, _Cell.simpleCellAddress)(sheet, columnStart, 0), (0, _Cell.simpleCellAddress)(sheet, columnEnd, Number.POSITIVE_INFINITY));
  }

  _createClass(AbsoluteColumnRange, [{
    key: "shouldBeRemoved",
    value: function shouldBeRemoved() {
      return this.width() <= 0;
    }
  }, {
    key: "shiftByRows",
    value: function shiftByRows(_numberOfRows) {
      return;
    }
  }, {
    key: "expandByRows",
    value: function expandByRows(_numberOfRows) {
      return;
    }
  }, {
    key: "shifted",
    value: function shifted(byCols, _byRows) {
      return new AbsoluteColumnRange(this.sheet, this.start.col + byCols, this.end.col + byCols);
    }
  }, {
    key: "removeRows",
    value: function removeRows(_rowStart, _rowEnd) {
      return;
    }
  }, {
    key: "rangeWithSameHeight",
    value: function rangeWithSameHeight(startColumn, numberOfColumns) {
      return new AbsoluteColumnRange(this.sheet, startColumn, startColumn + numberOfColumns - 1);
    }
  }, {
    key: "exceedsSheetSizeLimits",
    value: function exceedsSheetSizeLimits(maxColumns, _maxRows) {
      return this.end.col >= maxColumns;
    }
  }, {
    key: "effectiveEndRow",
    value: function effectiveEndRow(dependencyGraph) {
      return dependencyGraph.getSheetHeight(this.sheet) - 1;
    }
  }]);

  return AbsoluteColumnRange;
}(AbsoluteCellRange);

exports.AbsoluteColumnRange = AbsoluteColumnRange;

var AbsoluteRowRange = /*#__PURE__*/function (_AbsoluteCellRange2) {
  _inherits(AbsoluteRowRange, _AbsoluteCellRange2);

  var _super2 = _createSuper(AbsoluteRowRange);

  _createClass(AbsoluteRowRange, null, [{
    key: "fromRowRange",
    value: function fromRowRange(x, baseAddress) {
      var start = x.start.toSimpleRowAddress(baseAddress);
      var end = x.end.toSimpleRowAddress(baseAddress);

      if (start.sheet !== end.sheet) {
        throw new Error(DIFFERENT_SHEETS_ERROR);
      }

      return new AbsoluteRowRange(start.sheet, start.row, end.row);
    }
  }]);

  function AbsoluteRowRange(sheet, rowStart, rowEnd) {
    _classCallCheck(this, AbsoluteRowRange);

    return _super2.call(this, (0, _Cell.simpleCellAddress)(sheet, 0, rowStart), (0, _Cell.simpleCellAddress)(sheet, Number.POSITIVE_INFINITY, rowEnd));
  }

  _createClass(AbsoluteRowRange, [{
    key: "shouldBeRemoved",
    value: function shouldBeRemoved() {
      return this.height() <= 0;
    }
  }, {
    key: "shiftByColumns",
    value: function shiftByColumns(_numberOfColumns) {
      return;
    }
  }, {
    key: "expandByColumns",
    value: function expandByColumns(_numberOfColumns) {
      return;
    }
  }, {
    key: "shifted",
    value: function shifted(byCols, byRows) {
      return new AbsoluteRowRange(this.sheet, this.start.row + byRows, this.end.row + byRows);
    }
  }, {
    key: "removeColumns",
    value: function removeColumns(_columnStart, _columnEnd) {
      return;
    }
  }, {
    key: "rangeWithSameWidth",
    value: function rangeWithSameWidth(startRow, numberOfRows) {
      return new AbsoluteRowRange(this.sheet, startRow, startRow + numberOfRows - 1);
    }
  }, {
    key: "exceedsSheetSizeLimits",
    value: function exceedsSheetSizeLimits(_maxColumns, maxRows) {
      return this.end.row >= maxRows;
    }
  }, {
    key: "effectiveEndColumn",
    value: function effectiveEndColumn(dependencyGraph) {
      return dependencyGraph.getSheetWidth(this.sheet) - 1;
    }
  }]);

  return AbsoluteRowRange;
}(AbsoluteCellRange);

exports.AbsoluteRowRange = AbsoluteRowRange;