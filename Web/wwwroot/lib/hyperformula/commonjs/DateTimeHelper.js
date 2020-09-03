"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.instanceOfSimpleDate = instanceOfSimpleDate;
exports.instanceOfSimpleTime = instanceOfSimpleTime;
exports.endOfMonth = endOfMonth;
exports.offsetMonth = offsetMonth;
exports.DateTimeHelper = exports.maxDate = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */
var numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var prefSumDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 303, 334];

function instanceOfSimpleDate(obj) {
  if (obj && (_typeof(obj) === 'object' || typeof obj === 'function')) {
    return 'year' in obj && typeof obj.year === 'number' && 'month' in obj && typeof obj.month === 'number' && 'day' in obj && typeof obj.day === 'number';
  } else {
    return false;
  }
}

function instanceOfSimpleTime(obj) {
  if (obj && (_typeof(obj) === 'object' || typeof obj === 'function')) {
    return 'hours' in obj && typeof obj.hours === 'number' && 'minutes' in obj && typeof obj.minutes === 'number' && 'seconds' in obj && typeof obj.seconds === 'number';
  } else {
    return false;
  }
}

var maxDate = {
  year: 9999,
  month: 12,
  day: 31
};
exports.maxDate = maxDate;

var DateTimeHelper = /*#__PURE__*/function () {
  function DateTimeHelper(config) {
    _classCallCheck(this, DateTimeHelper);

    this.config = config;
    this.minDateAboluteValue = this.dateToNumberFromZero(config.nullDate);
    this.maxDateValue = this.dateToNumber(maxDate); // code below fixes epochYearStart while being leapYear1900 sensitive
    // if nullDate is earlier than fateful 28 Feb 1900 and 1900 is not supposed to be leap year, then we should
    // add two days (this is the config default)
    // otherwise only one day

    if (!config.leapYear1900 && 0 <= this.dateToNumber({
      year: 1900,
      month: 2,
      day: 28
    })) {
      this.epochYearZero = this.numberToSimpleDate(2).year;
    } else {
      this.epochYearZero = this.numberToSimpleDate(1).year;
    }

    this.parseDateTime = config.parseDateTime;
  }

  _createClass(DateTimeHelper, [{
    key: "getWithinBounds",
    value: function getWithinBounds(dayNumber) {
      return dayNumber <= this.maxDateValue && dayNumber >= 0;
    }
  }, {
    key: "dateStringToDateNumber",
    value: function dateStringToDateNumber(dateTimeString) {
      var dateTime = this.parseDateTimeFromFormats(dateTimeString, this.config.dateFormats, this.config.timeFormats);

      if (dateTime === undefined) {
        return undefined;
      }

      return (instanceOfSimpleTime(dateTime) ? this.timeToNumber(dateTime) : 0) + (instanceOfSimpleDate(dateTime) ? this.dateToNumber(dateTime) : 0);
    }
  }, {
    key: "parseSingleFormat",
    value: function parseSingleFormat(dateString, dateFormat, timeFormat) {
      var dateTime = this.parseDateTime(dateString, dateFormat, timeFormat);

      if (instanceOfSimpleDate(dateTime)) {
        if (dateTime.year >= 0 && dateTime.year < 100) {
          if (dateTime.year < this.getNullYear()) {
            dateTime.year += 2000;
          } else {
            dateTime.year += 1900;
          }
        }

        if (!this.isValidDate(dateTime)) {
          return undefined;
        }
      }

      return dateTime;
    }
  }, {
    key: "parseDateTimeFromFormats",
    value: function parseDateTimeFromFormats(dateString, dateFormats, timeFormats) {
      var _iterator = _createForOfIteratorHelper(dateFormats),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dateFormat = _step.value;

          var _iterator2 = _createForOfIteratorHelper(timeFormats),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var timeFormat = _step2.value;
              var dateTime = this.parseSingleFormat(dateString, dateFormat, timeFormat);

              if (dateTime !== undefined) {
                return dateTime;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return undefined;
    }
  }, {
    key: "getNullYear",
    value: function getNullYear() {
      return this.config.nullYear;
    }
  }, {
    key: "getEpochYearZero",
    value: function getEpochYearZero() {
      return this.epochYearZero;
    }
  }, {
    key: "isValidDate",
    value: function isValidDate(date) {
      if (isNaN(date.year) || isNaN(date.month) || isNaN(date.day)) {
        return false;
      } else if (date.day !== Math.round(date.day) || date.month !== Math.round(date.month) || date.year !== Math.round(date.year)) {
        return false;
      } else if (date.year < 1582) {
        // Gregorian calendar start
        return false;
      } else if (date.month < 1 || date.month > 12) {
        return false;
      } else if (date.day < 1) {
        return false;
      } else if (this.isLeapYear(date.year) && date.month === 2) {
        return date.day <= 29;
      } else {
        return date.day <= numDays[date.month - 1];
      }
    }
  }, {
    key: "dateToNumber",
    value: function dateToNumber(date) {
      return this.dateToNumberFromZero(date) - this.minDateAboluteValue;
    }
  }, {
    key: "timeToNumber",
    value: function timeToNumber(time) {
      return ((time.seconds / 60 + time.minutes) / 60 + time.hours) / 24;
    }
  }, {
    key: "numberToSimpleDate",
    value: function numberToSimpleDate(arg) {
      var dateNumber = arg + this.minDateAboluteValue;
      var year = Math.floor(dateNumber / 365.2425);

      if (this.dateToNumberFromZero({
        year: year + 1,
        month: 1,
        day: 1
      }) <= dateNumber) {
        year++;
      } else if (this.dateToNumberFromZero({
        year: year - 1,
        month: 1,
        day: 1
      }) > dateNumber) {
        year--;
      }

      var dayOfYear = dateNumber - this.dateToNumberFromZero({
        year: year,
        month: 1,
        day: 1
      });
      var month = dayToMonth(this.isLeapYear(year) && dayOfYear >= 59 ? dayOfYear - 1 : dayOfYear);
      var day = dayOfYear - prefSumDays[month];
      return {
        year: year,
        month: month + 1,
        day: day + 1
      };
    }
  }, {
    key: "numberToSimpleTime",
    value: function numberToSimpleTime(arg) {
      arg = Math.round(arg * 24 * 60 * 60 * 100000) / (24 * 60 * 60 * 100000);
      arg *= 24;
      var hours = Math.floor(arg);
      arg -= hours;
      arg *= 60;
      var minutes = Math.floor(arg);
      arg -= minutes;
      arg *= 60;
      var seconds = Math.round(arg * 100000) / 100000;
      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  }, {
    key: "numberToSimpleDateTime",
    value: function numberToSimpleDateTime(arg) {
      return Object.assign(Object.assign({}, this.numberToSimpleDate(Math.floor(arg))), this.numberToSimpleTime(arg % 1));
    }
  }, {
    key: "leapYearsCount",
    value: function leapYearsCount(year) {
      return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) + (this.config.leapYear1900 && year >= 1900 ? 1 : 0);
    }
  }, {
    key: "dateToNumberFromZero",
    value: function dateToNumberFromZero(date) {
      return 365 * date.year + prefSumDays[date.month - 1] + date.day - 1 + (date.month <= 2 ? this.leapYearsCount(date.year - 1) : this.leapYearsCount(date.year));
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear(year) {
      if (year % 4) {
        return false;
      } else if (year % 100) {
        return true;
      } else if (year % 400) {
        return year === 1900 && this.config.leapYear1900;
      } else {
        return true;
      }
    }
  }]);

  return DateTimeHelper;
}();

exports.DateTimeHelper = DateTimeHelper;

function dayToMonth(dayOfYear) {
  var month = 0;

  if (prefSumDays[month + 6] <= dayOfYear) {
    month += 6;
  }

  if (prefSumDays[month + 3] <= dayOfYear) {
    month += 3;
  }

  if (prefSumDays[month + 2] <= dayOfYear) {
    month += 2;
  } else if (prefSumDays[month + 1] <= dayOfYear) {
    month += 1;
  }

  return month;
}

function endOfMonth(date) {
  return {
    year: date.year,
    month: date.month,
    day: numDays[date.month - 1]
  };
}

function offsetMonth(date, offset) {
  var totalM = 12 * date.year + date.month - 1 + offset;
  return {
    year: Math.floor(totalM / 12),
    month: totalM % 12 + 1,
    day: date.day
  };
}