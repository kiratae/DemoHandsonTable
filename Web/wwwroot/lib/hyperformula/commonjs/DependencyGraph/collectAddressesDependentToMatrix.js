"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.map");

require("core-js/modules/es.string.iterator");

exports.__esModule = true;
exports.collectAddressesDependentToMatrix = void 0;

var _parser = require("../parser");

var _FormulaCellVertex = require("./FormulaCellVertex");

var _MatrixVertex = require("./MatrixVertex");

var _RangeVertex = require("./RangeVertex");

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var collectAddressesDependentToMatrix = function collectAddressesDependentToMatrix(funcitonRegistry, vertex, matrix, lazilyTransformingAstService, dependencyGraph) {
  var range = matrix.getRange();

  if (vertex instanceof _RangeVertex.RangeVertex) {
    var intersection = vertex.range.intersectionWith(range);

    if (intersection !== null) {
      return Array.from(intersection.addresses(dependencyGraph));
    } else {
      return [];
    }
  }

  var formula;
  var address;

  if (vertex instanceof _FormulaCellVertex.FormulaCellVertex) {
    formula = vertex.getFormula(lazilyTransformingAstService);
    address = vertex.getAddress(lazilyTransformingAstService);
  } else if (vertex instanceof _MatrixVertex.MatrixVertex && vertex.isFormula()) {
    formula = vertex.getFormula();
    address = vertex.getAddress();
  } else {
    return [];
  }

  return (0, _parser.collectDependencies)(formula, funcitonRegistry).filter(function (d) {
    return d instanceof _parser.AddressDependency;
  }).map(function (d) {
    return d.dependency.toSimpleCellAddress(address);
  }).filter(function (d) {
    return range.addressInRange(d);
  });
};

exports.collectAddressesDependentToMatrix = collectAddressesDependentToMatrix;