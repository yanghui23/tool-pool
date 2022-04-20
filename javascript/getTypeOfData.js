export function getTypeOfData(variable) {
  return Object.prototype.toString.call(variable)
}
