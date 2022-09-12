/**
 * @param {string} s
 * @return {string[][]}
 */

const partition = function (s) {
  const res = []
  const path = []
  const backtracking = (s, start) => {
    if (start >= s.length) {
      res.push([...path])
      return
    }
    for (let i = start; i < s.length; i++) {
      const subStr = s.substr(start, i - start + 1)
      if (isPalindrome(subStr)) {
        path.push(subStr)
        backtracking(s, i + 1)
        path.pop()
      }
    }
  }
  backtracking(s, 0)
  return res
}

const isPalindrome = (s) => {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    if (s[l] !== s[r])
      return false
    l++
    r--
  }
  return true
}

console.log(partition('aab'))
