// LC.93 https://leetcode-cn.com/problems/restore-ip-addresses/
// 复原 IP 地址
const restoreIpAddresses = function (s) {
  const res = []
  const path = []
  const isValid = (str) => {
    if (!str.length)
      return false
    if (str[0] === '0')
      return str === '0'
    const num = Number(str)
    return num > 0 && num <= 255
  }
  const backtracking = (startIdx) => {
    // 注意条件 startIdx === s.length 才算到头了
    if (path.length === 4 && startIdx === s.length) {
      res.push(path.join('.'))
      return
    }
    for (let i = startIdx; i < s.length; i++) {
      const subStr = s.slice(startIdx, i + 1)
      if (isValid(subStr)) {
        path.push(subStr)
        backtracking(i + 1)
        path.pop()
      }
    }
  }
  backtracking(0)
  return res
}
