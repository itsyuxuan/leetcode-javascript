// LC.242 https://leetcode-cn.com/problems/valid-anagram/
// 用哈希表维护对应字符的频次
// codePointAt() 获得某位置的 Unicode 编码
// 时间复杂度：O(n)
// 空间复杂度：O(S) S 为字符集大小 26
const isAnagram = function (s, t) {
  if (s.length !== t.length)
    return false
  const sArr = Array.from(s)
  const tArr = Array.from(t)
  const letters = new Array(26).fill(0)
  for (const ss of sArr) {
    const sCode = ss.codePointAt(0) - 'a'.codePointAt(0)
    letters[sCode]++
  }
  for (const tt of tArr) {
    const tCode = tt.codePointAt(0) - 'a'.codePointAt(0)
    letters[tCode]--
  }
  for (const l of letters) {
    if (l !== 0)
      return false
  }

  return true
}

console.log(isAnagram('anagram', 'nagaram'))

// LC.349 https://leetcode-cn.com/problems/intersection-of-two-arrays/
// 由于结果要求唯一，因此先用集合对 nums1 进行去重
// 遍历去重后的 nums1，筛选出 nums2 也包含的值
// 时间复杂度：O(n)
// 空间复杂度：O(n)
const intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter(n => nums2.includes(n))
}

console.log(intersection([1, 2, 2, 1], [2, 2]))

// LC.202 https://leetcode-cn.com/problems/happy-number/
// 还可以用环形链表的方法
const getSum = (n) => {
  let sum = 0
  while (n) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }
  return sum
}

const isHappy = function (n) {
  const set = new Set()
  // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = getSum(n)
  }
  return n === 1
}

console.log(isHappy(19))

// LC.1 https://leetcode-cn.com/problems/two-sum/
// 用哈希表维护对应值和索引
// 时间复杂度：O(n)
// 空间复杂度：O(n) 用于哈希表的开销
const twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement))
      return [map.get(complement), i]
    map.set(nums[i], i)
  }
  return [-1, -1]
}

console.log(twoSum([2, 7, 11, 15], 9))
