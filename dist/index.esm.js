import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { isArray, isObject } from 'tn-validate';
var sortobj = function sortobj(value) {
  if (isArray(value)) return _toConsumableArray(value.map(function (i) {
    return sortobj(i);
  }));else if (!isObject(value)) return value;
  var sorted = {};
  var keys = Object.keys(value).sort();
  keys.forEach(function (key) {
    return sorted[key] = sortobj(value[key]);
  });
  return sorted;
};
export { sortobj };
