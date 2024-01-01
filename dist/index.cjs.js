'use strict';

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray").default;
var tnValidate = require('tn-validate');
var sortobj = function sortobj(value) {
  if (tnValidate.isArray(value)) return _toConsumableArray(value.map(function (i) {
    return sortobj(i);
  }));else if (!tnValidate.isObject(value)) return value;
  var sorted = {};
  var keys = Object.keys(value).sort();
  keys.forEach(function (key) {
    return sorted[key] = sortobj(value[key]);
  });
  return sorted;
};
exports.sortobj = sortobj;
