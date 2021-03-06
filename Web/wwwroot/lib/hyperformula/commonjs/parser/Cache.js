"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.some");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.doesContainFunctions = exports.Cache = void 0;

var _ = require("./");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var buildCacheEntry = function buildCacheEntry(ast, relativeDependencies, hasVolatileFunction, hasStructuralChangeFunction) {
  return {
    ast: ast,
    relativeDependencies: relativeDependencies,
    hasVolatileFunction: hasVolatileFunction,
    hasStructuralChangeFunction: hasStructuralChangeFunction
  };
};

var Cache = /*#__PURE__*/function () {
  function Cache(functionRegistry) {
    _classCallCheck(this, Cache);

    this.functionRegistry = functionRegistry;
    this.cache = new Map();
  }

  _createClass(Cache, [{
    key: "set",
    value: function set(hash, ast) {
      var astRelativeDependencies = (0, _.collectDependencies)(ast, this.functionRegistry);
      var cacheEntry = buildCacheEntry(ast, astRelativeDependencies, doesContainFunctions(ast, this.functionRegistry.isFunctionVolatile), doesContainFunctions(ast, this.functionRegistry.isFunctionDependentOnSheetStructureChange));
      this.cache.set(hash, cacheEntry);
      return cacheEntry;
    }
  }, {
    key: "get",
    value: function get(hash) {
      return this.cache.get(hash) || null;
    }
  }, {
    key: "maybeSetAndThenGet",
    value: function maybeSetAndThenGet(hash, ast) {
      var entryFromCache = this.cache.get(hash);

      if (entryFromCache) {
        return entryFromCache.ast;
      } else {
        this.set(hash, ast);
        return ast;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cache.clear();
    }
  }]);

  return Cache;
}();

exports.Cache = Cache;

var doesContainFunctions = function doesContainFunctions(ast, functionCriterion) {
  switch (ast.type) {
    case _.AstNodeType.EMPTY:
    case _.AstNodeType.NUMBER:
    case _.AstNodeType.STRING:
    case _.AstNodeType.ERROR:
    case _.AstNodeType.ERROR_WITH_RAW_INPUT:
    case _.AstNodeType.CELL_REFERENCE:
    case _.AstNodeType.CELL_RANGE:
    case _.AstNodeType.COLUMN_RANGE:
    case _.AstNodeType.ROW_RANGE:
    case _.AstNodeType.NAMED_EXPRESSION:
      return false;

    case _.AstNodeType.PERCENT_OP:
    case _.AstNodeType.PLUS_UNARY_OP:
    case _.AstNodeType.MINUS_UNARY_OP:
      {
        return doesContainFunctions(ast.value, functionCriterion);
      }

    case _.AstNodeType.CONCATENATE_OP:
    case _.AstNodeType.EQUALS_OP:
    case _.AstNodeType.NOT_EQUAL_OP:
    case _.AstNodeType.LESS_THAN_OP:
    case _.AstNodeType.GREATER_THAN_OP:
    case _.AstNodeType.LESS_THAN_OR_EQUAL_OP:
    case _.AstNodeType.GREATER_THAN_OR_EQUAL_OP:
    case _.AstNodeType.MINUS_OP:
    case _.AstNodeType.PLUS_OP:
    case _.AstNodeType.TIMES_OP:
    case _.AstNodeType.DIV_OP:
    case _.AstNodeType.POWER_OP:
      return doesContainFunctions(ast.left, functionCriterion) || doesContainFunctions(ast.right, functionCriterion);

    case _.AstNodeType.PARENTHESIS:
      return doesContainFunctions(ast.expression, functionCriterion);

    case _.AstNodeType.FUNCTION_CALL:
      {
        if (functionCriterion(ast.procedureName)) {
          return true;
        }

        return ast.args.some(function (arg) {
          return doesContainFunctions(arg, functionCriterion);
        });
      }
  }
};

exports.doesContainFunctions = doesContainFunctions;