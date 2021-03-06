"use strict";

exports.__esModule = true;
exports.buildColumnSearchStrategy = buildColumnSearchStrategy;

var _ColumnBinarySearch = require("./ColumnBinarySearch");

var _ColumnIndex = require("./ColumnIndex");

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
function buildColumnSearchStrategy(dependencyGraph, config, statistics) {
  if (config.useColumnIndex) {
    return new _ColumnIndex.ColumnIndex(dependencyGraph, config, statistics);
  } else {
    return new _ColumnBinarySearch.ColumnBinarySearch(dependencyGraph, config);
  }
}