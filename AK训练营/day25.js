// LC.216 https://leetcode-cn.com/problems/combination-sum-iii/
// 组合总和 III
// 数组求和：arr.reduce((a, b) => a + b, 0)
const combinationSum3 = function (k, n) {
  const path = []
  const res = []
  const backtracking = (startNum) => {
    if (path.length === k) {
      if (path.reduce((a, b) => a + b, 0) === n)
        res.push([...path])
      return
    }
    for (let i = startNum; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i)
      backtracking(i + 1)
      path.pop()
    }
  }
  backtracking(1)
  return res
}

// LC.17 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 电话号码的字母组合
// 这道题特点是双层 for 循环
// JS 中的字符串可以直接遍历
const letterCombinations = function (digits) {
  const res = []
  const path = []
  if (!digits)
    return res
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const backtracking = (startIdx) => {
    if (path.length === digits.length) {
      res.push(path.join(''))
      return
    }
    for (let i = startIdx; i < digits.length; i++) {
      const digit = digits[i]
      for (const c of map[digit]) {
        path.push(c)
        backtracking(i + 1)
        path.pop()
      }
    }
  }
  backtracking(0)
  return res
}
