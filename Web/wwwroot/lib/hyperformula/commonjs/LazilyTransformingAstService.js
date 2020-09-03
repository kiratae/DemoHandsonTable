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
exports.LazilyTransformingAstService = void 0;

require("regenerator-runtime/runtime");

var _statistics = require("./statistics");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LazilyTransformingAstService = /*#__PURE__*/function () {
  function LazilyTransformingAstService(stats) {
    _classCallCheck(this, LazilyTransformingAstService);

    this.stats = stats;
    this.transformations = [];
  }

  _createClass(LazilyTransformingAstService, [{
    key: "version",
    value: function version() {
      return this.transformations.length;
    }
  }, {
    key: "addTransformation",
    value: function addTransformation(transformation) {
      this.transformations.push(transformation);
      return this.version();
    }
  }, {
    key: "applyTransformations",
    value: function applyTransformations(ast, address, version) {
      this.stats.start(_statistics.StatType.TRANSFORM_ASTS_POSTPONED);

      for (var v = version; v < this.transformations.length; v++) {
        var transformation = this.transformations[v];

        if (transformation.isIrreversible()) {
          this.undoRedo.storeDataForVersion(v, address, this.parser.computeHashFromAst(ast));
        }

        var _transformation$trans = transformation.transformSingleAst(ast, address),
            _transformation$trans2 = _slicedToArray(_transformation$trans, 2),
            newAst = _transformation$trans2[0],
            newAddress = _transformation$trans2[1];

        ast = newAst;
        address = newAddress;
      }

      var cachedAst = this.parser.rememberNewAst(ast);
      this.stats.end(_statistics.StatType.TRANSFORM_ASTS_POSTPONED);
      return [cachedAst, address, this.transformations.length];
    }
  }, {
    key: "getTransformationsFrom",
    value: /*#__PURE__*/regeneratorRuntime.mark(function getTransformationsFrom(version, filter) {
      var v, transformation;
      return regeneratorRuntime.wrap(function getTransformationsFrom$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              v = version;

            case 1:
              if (!(v < this.transformations.length)) {
                _context.next = 9;
                break;
              }

              transformation = this.transformations[v];

              if (!(!filter || filter(transformation))) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return transformation;

            case 6:
              v++;
              _context.next = 1;
              break;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, getTransformationsFrom, this);
    })
  }, {
    key: "destroy",
    value: function destroy() {
      this.parser = undefined;
      this.transformations = [];
    }
  }]);

  return LazilyTransformingAstService;
}();

exports.LazilyTransformingAstService = LazilyTransformingAstService;