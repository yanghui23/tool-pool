// 对象深拷贝
export function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
