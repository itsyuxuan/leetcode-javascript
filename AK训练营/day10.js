// LC.459 https://leetcode-cn.com/problems/repeated-substring-pattern/
// 将两个 ss 连在一起，并掐头去尾。如果 ss 是该合并字符串的子串，那么 ss 就满足题目要求。
const repeatedSubstringPattern = function (s) {
  return (s + s).substr(1, 2 * s.length - 2).includes(s)
}

console.log(repeatedSubstringPattern('abcabcabcabc'))
