"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.some");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.doesContainRelativeReferences = exports.NamedExpressions = exports.InternalNamedExpression = void 0;

var _Cell = require("./Cell");

var _parser = require("./parser");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InternalNamedExpression = /*#__PURE__*/function () {
  function InternalNamedExpression(displayName, address, added, options) {
    _classCallCheck(this, InternalNamedExpression);

    this.displayName = displayName;
    this.address = address;
    this.added = added;
    this.options = options;
  }

  _createClass(InternalNamedExpression, [{
    key: "normalizeExpressionName",
    value: function normalizeExpressionName() {
      return this.displayName.toLowerCase();
    }
  }, {
    key: "copy",
    value: function copy() {
      return new InternalNamedExpression(this.displayName, this.address, this.added, this.options);
    }
  }]);

  return InternalNamedExpression;
}();

exports.InternalNamedExpression = InternalNamedExpression;

var WorkbookStore = /*#__PURE__*/function () {
  function WorkbookStore() {
    _classCallCheck(this, WorkbookStore);

    this.mapping = new Map();
  }

  _createClass(WorkbookStore, [{
    key: "has",
    value: function has(expressionName) {
      return this.mapping.has(this.normalizeExpressionName(expressionName));
    }
  }, {
    key: "isNameAvailable",
    value: function isNameAvailable(expressionName) {
      var normalizedExpressionName = this.normalizeExpressionName(expressionName);
      var namedExpression = this.mapping.get(normalizedExpressionName);
      return !(namedExpression && namedExpression.added);
    }
  }, {
    key: "add",
    value: function add(namedExpression) {
      this.mapping.set(namedExpression.normalizeExpressionName(), namedExpression);
    }
  }, {
    key: "get",
    value: function get(expressionName) {
      return this.mapping.get(this.normalizeExpressionName(expressionName));
    }
  }, {
    key: "getExisting",
    value: function getExisting(expressionName) {
      var namedExpression = this.mapping.get(this.normalizeExpressionName(expressionName));

      if (namedExpression && namedExpression.added) {
        return namedExpression;
      } else {
        return undefined;
      }
    }
  }, {
    key: "remove",
    value: function remove(expressionName) {
      var normalizedExpressionName = this.normalizeExpressionName(expressionName);
      var namedExpression = this.mapping.get(normalizedExpressionName);

      if (namedExpression) {
        namedExpression.added = false;
      }
    }
  }, {
    key: "getAllNamedExpressions",
    value: function getAllNamedExpressions() {
      return Array.from(this.mapping.values()).filter(function (ne) {
        return ne.added;
      });
    }
  }, {
    key: "normalizeExpressionName",
    value: function normalizeExpressionName(expressionName) {
      return expressionName.toLowerCase();
    }
  }]);

  return WorkbookStore;
}();

var WorksheetStore = /*#__PURE__*/function () {
  function WorksheetStore() {
    _classCallCheck(this, WorksheetStore);

    this.mapping = new Map();
  }

  _createClass(WorksheetStore, [{
    key: "add",
    value: function add(namedExpression) {
      this.mapping.set(this.normalizeExpressionName(namedExpression.displayName), namedExpression);
    }
  }, {
    key: "get",
    value: function get(expressionName) {
      return this.mapping.get(this.normalizeExpressionName(expressionName));
    }
  }, {
    key: "has",
    value: function has(expressionName) {
      return this.mapping.has(this.normalizeExpressionName(expressionName));
    }
  }, {
    key: "normalizeExpressionName",
    value: function normalizeExpressionName(expressionName) {
      return expressionName.toLowerCase();
    }
  }, {
    key: "isNameAvailable",
    value: function isNameAvailable(expressionName) {
      var normalizedExpressionName = this.normalizeExpressionName(expressionName);
      return !this.mapping.has(normalizedExpressionName);
    }
  }, {
    key: "remove",
    value: function remove(expressionName) {
      var normalizedExpressionName = this.normalizeExpressionName(expressionName);
      var namedExpression = this.mapping.get(normalizedExpressionName);

      if (namedExpression) {
        this.mapping.delete(normalizedExpressionName);
      }
    }
  }]);

  return WorksheetStore;
}();

var NamedExpressions = /*#__PURE__*/function () {
  function NamedExpressions() {
    _classCallCheck(this, NamedExpressions);

    this.nextNamedExpressionRow = 0;
    this.workbookStore = new WorkbookStore();
    this.worksheetStores = new Map();
    this.addressCache = new Map();
  }

  _createClass(NamedExpressions, [{
    key: "isNameAvailable",
    value: function isNameAvailable(expressionName, sheetId) {
      if (sheetId === undefined) {
        return this.workbookStore.isNameAvailable(expressionName);
      } else {
        return this.worksheetStore(sheetId).isNameAvailable(expressionName);
      }
    }
  }, {
    key: "namedExpressionInAddress",
    value: function namedExpressionInAddress(row) {
      var namedExpression = this.addressCache.get(row);

      if (namedExpression && namedExpression.added) {
        return namedExpression;
      } else {
        return undefined;
      }
    }
  }, {
    key: "namedExpressionForScope",
    value: function namedExpressionForScope(expressionName, sheetId) {
      if (sheetId === undefined) {
        return this.workbookStore.getExisting(expressionName);
      } else {
        return this.worksheetStore(sheetId).get(expressionName);
      }
    }
  }, {
    key: "nearestNamedExpression",
    value: function nearestNamedExpression(expressionName, sheetId) {
      return this.worksheetStore(sheetId).get(expressionName) || this.workbookStore.getExisting(expressionName);
    }
  }, {
    key: "isExpressionInScope",
    value: function isExpressionInScope(expressionName, sheetId) {
      return this.worksheetStore(sheetId).has(expressionName);
    }
  }, {
    key: "isNameValid",
    value: function isNameValid(expressionName) {
      if (/^[A-Za-z]+[0-9]+$/.test(expressionName)) {
        return false;
      }

      return /^[A-Za-z\u00C0-\u02AF_][A-Za-z0-9\u00C0-\u02AF\._]*$/.test(expressionName);
    }
  }, {
    key: "addNamedExpression",
    value: function addNamedExpression(expressionName, sheetId, options) {
      if (sheetId === undefined) {
        var namedExpression = this.workbookStore.get(expressionName);

        if (namedExpression) {
          namedExpression.added = true;
          namedExpression.displayName = expressionName;
          namedExpression.options = options;
        } else {
          namedExpression = new InternalNamedExpression(expressionName, this.nextAddress(), true, options);
          this.workbookStore.add(namedExpression);
        }

        this.addressCache.set(namedExpression.address.row, namedExpression);
        return namedExpression;
      } else {
        var store = this.worksheetStore(sheetId);

        var _namedExpression = new InternalNamedExpression(expressionName, this.nextAddress(), true, options);

        store.add(_namedExpression);
        this.addressCache.set(_namedExpression.address.row, _namedExpression);
        return _namedExpression;
      }
    }
  }, {
    key: "worksheetStore",
    value: function worksheetStore(sheetId) {
      var store = this.worksheetStores.get(sheetId);

      if (!store) {
        store = new WorksheetStore();
        this.worksheetStores.set(sheetId, store);
      }

      return store;
    }
  }, {
    key: "namedExpressionOrPlaceholder",
    value: function namedExpressionOrPlaceholder(expressionName, sheetId) {
      var namedExpression = this.worksheetStore(sheetId).get(expressionName);

      if (namedExpression) {
        return namedExpression;
      } else {
        var _namedExpression2 = this.workbookStore.get(expressionName);

        if (_namedExpression2 === undefined) {
          _namedExpression2 = new InternalNamedExpression(expressionName, this.nextAddress(), false);
          this.workbookStore.add(_namedExpression2);
        }

        return _namedExpression2;
      }
    }
  }, {
    key: "workbookNamedExpressionOrPlaceholder",
    value: function workbookNamedExpressionOrPlaceholder(expressionName) {
      var namedExpression = this.workbookStore.get(expressionName);

      if (namedExpression === undefined) {
        namedExpression = new InternalNamedExpression(expressionName, this.nextAddress(), false);
        this.workbookStore.add(namedExpression);
      }

      return namedExpression;
    }
  }, {
    key: "remove",
    value: function remove(expressionName, sheetId) {
      var store;

      if (sheetId === undefined) {
        store = this.workbookStore;
      } else {
        store = this.worksheetStore(sheetId);
      }

      var namedExpression = store.get(expressionName);

      if (namedExpression === undefined || !namedExpression.added) {
        throw 'Named expression does not exist';
      }

      store.remove(expressionName);
      this.addressCache.delete(namedExpression.address.row);
    }
  }, {
    key: "getAllNamedExpressionsNames",
    value: function getAllNamedExpressionsNames() {
      return this.workbookStore.getAllNamedExpressions().map(function (ne) {
        return ne.displayName;
      });
    }
  }, {
    key: "nextAddress",
    value: function nextAddress() {
      return (0, _Cell.simpleCellAddress)(NamedExpressions.SHEET_FOR_WORKBOOK_EXPRESSIONS, 0, this.nextNamedExpressionRow++);
    }
  }, {
    key: "lookupNextAddress",
    value: function lookupNextAddress(expressionName, sheetId) {
      if (sheetId === undefined) {
        var namedExpression = this.workbookStore.get(expressionName);

        if (namedExpression) {
          return namedExpression.address;
        }
      }

      return (0, _Cell.simpleCellAddress)(NamedExpressions.SHEET_FOR_WORKBOOK_EXPRESSIONS, 0, this.nextNamedExpressionRow);
    }
  }]);

  return NamedExpressions;
}();

exports.NamedExpressions = NamedExpressions;
NamedExpressions.SHEET_FOR_WORKBOOK_EXPRESSIONS = -1;

var doesContainRelativeReferences = function doesContainRelativeReferences(ast) {
  switch (ast.type) {
    case _parser.AstNodeType.EMPTY:
    case _parser.AstNodeType.NUMBER:
    case _parser.AstNodeType.STRING:
    case _parser.AstNodeType.ERROR:
    case _parser.AstNodeType.ERROR_WITH_RAW_INPUT:
      return false;

    case _parser.AstNodeType.CELL_REFERENCE:
      return !ast.reference.isAbsolute();

    case _parser.AstNodeType.CELL_RANGE:
    case _parser.AstNodeType.COLUMN_RANGE:
    case _parser.AstNodeType.ROW_RANGE:
      return !ast.start.isAbsolute();

    case _parser.AstNodeType.NAMED_EXPRESSION:
      return false;

    case _parser.AstNodeType.PERCENT_OP:
    case _parser.AstNodeType.PLUS_UNARY_OP:
    case _parser.AstNodeType.MINUS_UNARY_OP:
      {
        return doesContainRelativeReferences(ast.value);
      }

    case _parser.AstNodeType.CONCATENATE_OP:
    case _parser.AstNodeType.EQUALS_OP:
    case _parser.AstNodeType.NOT_EQUAL_OP:
    case _parser.AstNodeType.LESS_THAN_OP:
    case _parser.AstNodeType.GREATER_THAN_OP:
    case _parser.AstNodeType.LESS_THAN_OR_EQUAL_OP:
    case _parser.AstNodeType.GREATER_THAN_OR_EQUAL_OP:
    case _parser.AstNodeType.MINUS_OP:
    case _parser.AstNodeType.PLUS_OP:
    case _parser.AstNodeType.TIMES_OP:
    case _parser.AstNodeType.DIV_OP:
    case _parser.AstNodeType.POWER_OP:
      return doesContainRelativeReferences(ast.left) || doesContainRelativeReferences(ast.right);

    case _parser.AstNodeType.PARENTHESIS:
      return doesContainRelativeReferences(ast.expression);

    case _parser.AstNodeType.FUNCTION_CALL:
      {
        return ast.args.some(function (arg) {
          return doesContainRelativeReferences(arg);
        });
      }
  }
};

exports.doesContainRelativeReferences = doesContainRelativeReferences;