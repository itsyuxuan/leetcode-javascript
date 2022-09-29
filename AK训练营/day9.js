// LC.28 https://leetcode-cn.com/problems/implement-strstr/
// 时间复杂度：O(n+m)，其中 n 是字符串 haystack 的长度，m 是字符串 needle 的长度
// 空间复杂度：O(m)，其中 m 是字符串 needle 的长度
const strStr = function (haystack, needle) {
  if (needle.length === 0)
    return 0

  const getNext = (needle) => {
    const next = []
    let j = 0
    next.push(j)

    for (let i = 1; i < needle.length; ++i) {
      while (j > 0 && needle[i] !== needle[j]) j = next[j - 1]
      if (needle[i] === needle[j])
        j++
      next.push(j)
    }

    return next
  }

  const next = getNext(needle)
  let j = 0
  for (let i = 0; i < haystack.length; ++i) {
    while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1]
    if (haystack[i] === needle[j])
      j++
    if (j === needle.length)
      return i - needle.length + 1
  }

  return -1
}

console.log(strStr('hello', 'll'))
