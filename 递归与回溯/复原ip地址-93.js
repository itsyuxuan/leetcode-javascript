/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const res = []
  const path = []
  const backtracking = (s, start) => {
    if (path.length === 3) {
      const rest = s.substr(start)
      if (isValid(rest)) {
        res.push(path.concat(rest).join('.'))
        return
      }
    }
    for (let i = start; i < s.length; i++) {
      const subStr = s.substring(start, i + 1)
      if (isValid(subStr)) {
        path.push(subStr)
        backtracking(s, i + 1)
        path.pop()
      }
    }
  }
  backtracking(s, 0, 1)
  return res
}

const isValid = (str) => {
  if (str.length === 0)
    return false
  if (str[0] === '0' && str !== '0')
    return false
  const num = Number(str)
  if (num < 0 || num > 255)
    return false
  return true
}
