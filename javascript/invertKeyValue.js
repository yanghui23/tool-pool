
// 反转对象属性和属性值
export function invertKeyValue(obj) {
  const keys = Object.keys(obj)
  const res = {}
  keys.forEach((val) => {
    res[obj[val]] = val
  })
  return res
}
