'use strict';

var tnValidate = require('tn-validate');
const sortobj = function (value) {
  if (tnValidate.isArray(value)) return [...value.map(i => sortobj(i))];else if (!tnValidate.isObject(value)) return value;
  const sorted = {};
  const keys = Object.keys(value).sort();
  keys.forEach(key => sorted[key] = sortobj(value[key]));
  return sorted;
};
exports.sortobj = sortobj;
