"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.rangeLowerBound = rangeLowerBound;
exports.lowerBound = lowerBound;
exports.compare = compare;

var _Cell = require("../Cell");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
* If key exists returns first index of key element in range of sorted values
* Otherwise returns first index of greatest element smaller than key
* assuming sorted values in range
* */
function rangeLowerBound(range, key, dependencyGraph) {
  var start = range.start.row;
  var end = range.end.row;

  while (start <= end) {
    var center = Math.floor((start + end) / 2);
    var cmp = compare(key, dependencyGraph.getCellValue((0, _Cell.simpleCellAddress)(range.sheet, range.start.col, center)));

    if (cmp > 0) {
      start = center + 1;
    } else if (cmp < 0) {
      end = center - 1;
    } else if (start != center) {
      end = center;
    } else {
      return center;
    }
  }

  return end;
}
/*
* If key exists returns first index of key element in sorted array
* Otherwise returns first index of greatest element smaller than key
* assuming sorted array
* */


function lowerBound(values, key) {
  var start = 0;
  var end = values.length - 1;

  while (start <= end) {
    var center = Math.floor((start + end) / 2);
    var cmp = compare(key, values[center]);

    if (cmp > 0) {
      start = center + 1;
    } else if (cmp < 0) {
      end = center - 1;
    } else if (start != center) {
      end = center;
    } else {
      return center;
    }
  }

  return end;
}
/*
* numbers < strings < false < true
* */


function compare(left, right) {
  if (_typeof(left) === _typeof(right)) {
    return left < right ? -1 : left > right ? 1 : 0;
  }

  if (typeof left === 'number' && typeof right === 'string') {
    return -1;
  }

  if (typeof left === 'number' && typeof right === 'boolean') {
    return -1;
  }

  if (typeof left === 'string' && typeof right === 'number') {
    return 1;
  }

  if (typeof left === 'string' && typeof right === 'boolean') {
    return -1;
  }

  return 1;
}