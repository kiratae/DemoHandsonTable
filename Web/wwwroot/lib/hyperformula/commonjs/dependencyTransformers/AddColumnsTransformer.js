"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.AddColumnsTransformer = void 0;

var _Cell = require("../Cell");

var _Transformer2 = require("./Transformer");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AddColumnsTransformer = /*#__PURE__*/function (_Transformer) {
  _inherits(AddColumnsTransformer, _Transformer);

  var _super = _createSuper(AddColumnsTransformer);

  function AddColumnsTransformer(columnsSpan) {
    var _this;

    _classCallCheck(this, AddColumnsTransformer);

    _this = _super.call(this);
    _this.columnsSpan = columnsSpan;
    return _this;
  }

  _createClass(AddColumnsTransformer, [{
    key: "isIrreversible",
    value: function isIrreversible() {
      return false;
    }
  }, {
    key: "transformRowRangeAst",
    value: function transformRowRangeAst(ast, _formulaAddress) {
      return ast;
    }
  }, {
    key: "transformCellRange",
    value: function transformCellRange(start, end, formulaAddress) {
      return this.transformRange(start, end, formulaAddress);
    }
  }, {
    key: "transformRowRange",
    value: function transformRowRange(_start, _end, _formulaAddress) {
      throw Error('Not implemented');
    }
  }, {
    key: "transformColumnRange",
    value: function transformColumnRange(start, end, formulaAddress) {
      return this.transformRange(start, end, formulaAddress);
    }
  }, {
    key: "transformCellAddress",
    value: function transformCellAddress(dependencyAddress, formulaAddress) {
      var absoluteDependencySheet = (0, _Cell.absoluteSheetReference)(dependencyAddress, formulaAddress); // Case 4 and 5

      if (absoluteDependencySheet !== this.columnsSpan.sheet && formulaAddress.sheet !== this.columnsSpan.sheet) {
        return false;
      }

      var absolutizedDependencyAddress = dependencyAddress.toSimpleColumnAddress(formulaAddress); // Case 3

      if (absoluteDependencySheet === this.columnsSpan.sheet && formulaAddress.sheet !== this.columnsSpan.sheet) {
        if (this.columnsSpan.columnStart <= absolutizedDependencyAddress.col) {
          return dependencyAddress.shiftedByColumns(this.columnsSpan.numberOfColumns);
        } else {
          return false;
        }
      } // Case 2


      if (formulaAddress.sheet === this.columnsSpan.sheet && absoluteDependencySheet !== this.columnsSpan.sheet) {
        if (dependencyAddress.isColumnAbsolute()) {
          return false;
        }

        if (formulaAddress.col < this.columnsSpan.columnStart) {
          return false;
        }

        return dependencyAddress.shiftedByColumns(-this.columnsSpan.numberOfColumns);
      } // Case 1


      if (dependencyAddress.isColumnAbsolute()) {
        if (dependencyAddress.col < this.columnsSpan.columnStart) {
          // Case Aa
          return false;
        } else {
          // Case Ab
          return dependencyAddress.shiftedByColumns(this.columnsSpan.numberOfColumns);
        }
      } else {
        var _absolutizedDependencyAddress = dependencyAddress.toSimpleColumnAddress(formulaAddress);

        if (_absolutizedDependencyAddress.col < this.columnsSpan.columnStart) {
          if (formulaAddress.col < this.columnsSpan.columnStart) {
            // Case Raa
            return false;
          } else {
            // Case Rab
            return dependencyAddress.shiftedByColumns(-this.columnsSpan.numberOfColumns);
          }
        } else {
          if (formulaAddress.col < this.columnsSpan.columnStart) {
            // Case Rba
            return dependencyAddress.shiftedByColumns(this.columnsSpan.numberOfColumns);
          } else {
            // Case Rbb
            return false;
          }
        }
      }
    }
  }, {
    key: "fixNodeAddress",
    value: function fixNodeAddress(address) {
      if (this.columnsSpan.sheet === address.sheet && this.columnsSpan.columnStart <= address.col) {
        return Object.assign(Object.assign({}, address), {
          col: address.col + this.columnsSpan.numberOfColumns
        });
      } else {
        return address;
      }
    }
  }, {
    key: "transformRange",
    value: function transformRange(start, end, formulaAddress) {
      var newStart = this.transformCellAddress(start, formulaAddress);
      var newEnd = this.transformCellAddress(end, formulaAddress);

      if (newStart === _Cell.ErrorType.REF || newEnd === _Cell.ErrorType.REF) {
        return _Cell.ErrorType.REF;
      } else if (newStart || newEnd) {
        return [newStart || start, newEnd || end];
      } else {
        return false;
      }
    }
  }, {
    key: "sheet",
    get: function get() {
      return this.columnsSpan.sheet;
    }
  }]);

  return AddColumnsTransformer;
}(_Transformer2.Transformer);

exports.AddColumnsTransformer = AddColumnsTransformer;