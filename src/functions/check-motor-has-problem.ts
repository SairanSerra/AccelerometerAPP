export const checkHasProblem = (
  valueNumber: number,
  limitMax: number,
  limitMin: number,
) => {
  if (valueNumber > limitMax) {
    return true
  }
  if (valueNumber < limitMin) {
    return true
  }
  return false
}
