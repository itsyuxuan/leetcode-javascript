// LC.344 https://leetcode-cn.com/problems/reverse-string/
// 时间复杂度: O(n)
// 空间复杂度: O(1)
const reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) [s[i], s[j]] = [s[j], s[i]]
  return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))

// LC.541 https://leetcode-cn.com/problems/reverse-string-ii/
// 翻转 String，一定先转化成 Array，最后再转化成 String
// 注意区分每次计数 2k 个字符和每次反转 k 个字符的区别
// 时间复杂度: O(n)
// 空间复杂度: O(n)  额外的数组空间
const reverseStr = function (s, k) {
  const arr = s.split('')
  for (let i = 0; i < arr.length; i += 2 * k) {
    let l = i
    let r = i + k > arr.length ? arr.length - 1 : i + k - 1
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }
  return arr.join('')
}

console.log(reverseStr('abcdefg', 2))

// Offer.5 https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
const replaceSpace = function (s) {
  return s.split(' ').join('%20')
}

console.log(replaceSpace('We are happy.'))

// LC.151 https://leetcode-cn.com/problems/reverse-words-in-a-string/
// \s 可以匹配一个空格，\s+ 表示至少有一个空格
// 时间复杂度: O(n)
// 空间复杂度: O(n) 用来存储字符串分割之后的结果
const reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ')
}

console.log(reverseWords('  a good   example  '))

// Offer.58 https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
// 翻转 String，一定先转化成 Array，最后再转化成 String
// 反转区间为前 n 的子串
// 反转区间为 n 到末尾的子串
// 反转整个字符串
// 或者直接 return s.substr(n) + s.substr(0, n)
const reverseLeftWords = function (s, n) {
  const reverse = (s, l, r) => {
    while (l < r) {
      [s[l], s[r]] = [s[r], s[l]]
      l++
      r--
    }
  }
  const arr = s.split('')
  reverse(arr, 0, n - 1)
  reverse(arr, n, arr.length - 1)
  reverse(arr, 0, arr.length - 1)
  return arr.join('')
}

console.log(reverseLeftWords('abcdefg', 2))
