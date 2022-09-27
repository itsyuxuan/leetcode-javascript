// LC.454 https://leetcode-cn.com/problems/4sum-ii/
// 分组 + 哈希表
// 时间复杂度: O(n^2)
// 空间复杂度: O(n^2)
const fourSumCount = function (nums1, nums2, nums3, nums4) {
  let res = 0
  const map = new Map()
  for (const n1 of nums1)
    for (const n2 of nums2) map.set(n1 + n2, (map.get(n1 + n2) || 0) + 1)

  for (const n3 of nums3)
    for (const n4 of nums4) res += map.get(0 - n3 - n4) || 0

  return res
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))

// LC.383 https://leetcode-cn.com/problems/ransom-note/
// 时间复杂度: O(m+n) m 为 ransomNote 的长度，n 为 magazine 的长度
// 空间复杂度: O(S) S 为字符集大小 26
const canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length)
    return false
  const letters = new Array(26).fill(0)
  for (let i = 0; i < magazine.length; i++)
    letters[magazine.charAt(i).codePointAt(0) - 'a'.codePointAt(0)]++
  for (let i = 0; i < ransomNote.length; i++) {
    const code = ransomNote.charAt(i).codePointAt(0) - 'a'.codePointAt(0)
    letters[code]--
    if (letters[code] < 0)
      return false
  }
  return true
}

console.log(canConstruct('aa', 'aab'))
