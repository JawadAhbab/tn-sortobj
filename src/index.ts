import { AnyObject } from 'tn-typescript'
import { isArray, isObject } from 'tn-validate'

export const sortobj = function <T>(value: T): T {
  if (isArray(value)) return [...(value as any[]).map(i => sortobj(i))] as T
  else if (!isObject(value)) return value
  const sorted: AnyObject = {}
  const keys = Object.keys(value).sort()
  keys.forEach(key => (sorted[key] = sortobj(value[key])))
  return sorted as T
}
