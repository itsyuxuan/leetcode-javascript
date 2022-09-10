/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const res = []
  const backtrack = (start, prev, used) => {
    if (used === 3) {
      const rest = s.substring(start)
      // 点全部用光后 剩余字符依然是一个合格的ip chunk
      // 就视为一个答案 放入数组
      if (isValid(rest))
        res.push(prev.concat(rest).join('.'))
      return
    }
    for (let i = 1; i <= 3; i++) {
      const end = start + i
      const cur = s.substring(start, end)
      if (isValid(cur))
        backtrack(end, prev.concat(cur), used + 1)
    }
  }
  backtrack(0, [], 0)
  return res
}

function isValid(str) {
  const len = str.length
  if (len === 0)
    return false
  if (str[0] === '0')
    return str === '0'
  const num = Number(str)
  return num >= 0 && num <= 255
}
