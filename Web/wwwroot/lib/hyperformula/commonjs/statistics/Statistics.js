"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.Statistics = void 0;

var _StatType = require("./StatType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Provides tracking performance statistics to the engine
 */
var Statistics = /*#__PURE__*/function () {
  function Statistics() {
    _classCallCheck(this, Statistics);

    this.stats = new Map([[_StatType.StatType.CRITERION_FUNCTION_FULL_CACHE_USED, 0], [_StatType.StatType.CRITERION_FUNCTION_PARTIAL_CACHE_USED, 0]]);
    this.startTimes = new Map();
  }

  _createClass(Statistics, [{
    key: "incrementCriterionFunctionFullCacheUsed",
    value: function incrementCriterionFunctionFullCacheUsed() {
      var newValue = (this.stats.get(_StatType.StatType.CRITERION_FUNCTION_FULL_CACHE_USED) || 0) + 1;
      this.stats.set(_StatType.StatType.CRITERION_FUNCTION_FULL_CACHE_USED, newValue);
    }
  }, {
    key: "incrementCriterionFunctionPartialCacheUsed",
    value: function incrementCriterionFunctionPartialCacheUsed() {
      var newValue = (this.stats.get(_StatType.StatType.CRITERION_FUNCTION_PARTIAL_CACHE_USED) || 0) + 1;
      this.stats.set(_StatType.StatType.CRITERION_FUNCTION_PARTIAL_CACHE_USED, newValue);
    }
    /**
     * Resets statistics
     */

  }, {
    key: "reset",
    value: function reset() {
      this.stats.clear();
      this.startTimes.clear();
      this.stats.set(_StatType.StatType.CRITERION_FUNCTION_FULL_CACHE_USED, 0);
      this.stats.set(_StatType.StatType.CRITERION_FUNCTION_PARTIAL_CACHE_USED, 0);
    }
    /**
     * Starts tracking particular statistic.
     *
     * @param name - statistic to start tracking
     */

  }, {
    key: "start",
    value: function start(name) {
      if (this.startTimes.get(name)) {
        throw Error("Statistics ".concat(name, " already started"));
      } else {
        this.startTimes.set(name, Date.now());
      }
    }
    /**
     * Stops tracking particular statistic.
     * Raise error if tracking statistic wasn't started.
     *
     * @param name - statistic to stop tracking
     */

  }, {
    key: "end",
    value: function end(name) {
      var now = Date.now();
      var startTime = this.startTimes.get(name);

      if (startTime) {
        var values = this.stats.get(name) || 0;
        values += now - startTime;
        this.stats.set(name, values);
        this.startTimes.delete(name);
      } else {
        throw Error("Statistics ".concat(name, " not started"));
      }
    }
    /**
     * Measure given statistic as execution of given function.
     *
     * @param name - statistic to track
     * @param func - function to call
     * @returns result of the function call
     */

  }, {
    key: "measure",
    value: function measure(name, func) {
      this.start(name);
      var result = func();
      this.end(name);
      return result;
    }
    /**
     * Returns the snapshot of current results
     */

  }, {
    key: "snapshot",
    value: function snapshot() {
      return new Map(this.stats);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stats.clear();
      this.startTimes.clear();
    }
  }]);

  return Statistics;
}();

exports.Statistics = Statistics;