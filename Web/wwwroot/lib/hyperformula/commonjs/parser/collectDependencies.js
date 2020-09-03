"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/web.dom-collections.for-each");

exports.__esModule = true;
exports.collectDependencies = void 0;

var _ = require("./");

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var collectDependenciesFn = function collectDependenciesFn(ast, functionRegistry, dependenciesSet) {
  switch (ast.type) {
    case _.AstNodeType.EMPTY:
    case _.AstNodeType.NUMBER:
    case _.AstNodeType.STRING:
    case _.AstNodeType.ERROR:
      return;

    case _.AstNodeType.NAMED_EXPRESSION:
      {
        dependenciesSet.push(new _.NamedExpressionDependency(ast.expressionName));
        return;
      }

    case _.AstNodeType.CELL_REFERENCE:
      {
        dependenciesSet.push(new _.AddressDependency(ast.reference));
        return;
      }

    case _.AstNodeType.CELL_RANGE:
      {
        if (ast.start.sheet === ast.end.sheet) {
          dependenciesSet.push(new _.CellRangeDependency(ast.start, ast.end));
        }

        return;
      }

    case _.AstNodeType.COLUMN_RANGE:
      {
        if (ast.start.sheet === ast.end.sheet) {
          dependenciesSet.push(new _.ColumnRangeDependency(ast.start, ast.end));
        }

        return;
      }

    case _.AstNodeType.ROW_RANGE:
      {
        if (ast.start.sheet === ast.end.sheet) {
          dependenciesSet.push(new _.RowRangeDependency(ast.start, ast.end));
        }

        return;
      }

    case _.AstNodeType.PERCENT_OP:
    case _.AstNodeType.PLUS_UNARY_OP:
    case _.AstNodeType.MINUS_UNARY_OP:
      {
        collectDependenciesFn(ast.value, functionRegistry, dependenciesSet);
        return;
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
      collectDependenciesFn(ast.left, functionRegistry, dependenciesSet);
      collectDependenciesFn(ast.right, functionRegistry, dependenciesSet);
      return;

    case _.AstNodeType.PARENTHESIS:
      collectDependenciesFn(ast.expression, functionRegistry, dependenciesSet);
      return;

    case _.AstNodeType.FUNCTION_CALL:
      if (!functionRegistry.doesFunctionNeedArgumentToBeComputed(ast.procedureName)) {
        ast.args.forEach(function (argAst) {
          return collectDependenciesFn(argAst, functionRegistry, dependenciesSet);
        });
      }

      return;
  }
};

var collectDependencies = function collectDependencies(ast, functionRegistry) {
  var result = new Array();
  collectDependenciesFn(ast, functionRegistry, result);
  return result;
};

exports.collectDependencies = collectDependencies;