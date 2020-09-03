"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.empty = empty;
exports.split = split;
exports.first = first;

require("regenerator-runtime/runtime");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(empty);

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
function empty() {
  return regeneratorRuntime.wrap(function empty$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function split(iterable) {
  var iterator = iterable[Symbol.iterator]();

  var _iterator$next = iterator.next(),
      done = _iterator$next.done,
      value = _iterator$next.value;

  if (done) {
    return {
      rest: empty()
    };
  } else {
    return {
      value: value,
      rest: iterator
    };
  }
}

function first(iterable) {
  var iterator = iterable[Symbol.iterator]();

  var _iterator$next2 = iterator.next(),
      done = _iterator$next2.done,
      value = _iterator$next2.value;

  if (!done) {
    return value;
  }

  return undefined;
}