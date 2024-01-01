import { isArray, isObject } from 'tn-validate';
const sortobj = function (value) {
  if (isArray(value)) return [...value.map(i => sortobj(i))];else if (!isObject(value)) return value;
  const sorted = {};
  const keys = Object.keys(value).sort();
  keys.forEach(key => sorted[key] = sortobj(value[key]));
  return sorted;
};
export { sortobj };
