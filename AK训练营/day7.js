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

// LC.15 https://leetcode-cn.com/problems/3sum/
// 注意先排序
// 注意去重复
// 注意 res 元素是值的集合，不是索引的集合
// 时间复杂度: O(n^2)
// 空间复杂度: O(logn) 额外的排序的空间复杂度
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    // 排序之后如果第一个元素已经大于零，那么无论如何组合都不可能凑成三元组，直接返回结果就可以了
    if (nums[i] > 0)
      break // 这里使用break，统一通过最后的return返回
    // 正确去重 i 的方法，避免漏掉 -1, -1, 2 这种情况
    if (i > 0 && nums[i - 1] === nums[i])
      continue
    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum > 0) {
        k--
      }
      else if (sum < 0) {
        j++
      }
      else {
        res.push([nums[i], nums[j], nums[k]])
        // 去重逻辑应该放在找到一个三元组之后
        while (j < k && nums[j] === nums[j + 1]) j++
        while (j < k && nums[k] === nums[k - 1]) k--

        // 找到答案时，双指针同时收缩
        j++
        k--
      }
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// LC.18 https://leetcode-cn.com/problems/4sum/
// 时间复杂度: O(n^3)
// 空间复杂度: O(logn) 额外的排序的空间复杂度
const fourSum = function (nums, target) {
  // 剪枝
  if (nums.length < 4)
    return []
  const res = []
  nums.sort((a, b) => a - b)
  for (let a = 0; a < nums.length - 3; a++) {
    // 对比三数之和，不需要剪枝操作 if (nums[i] > target) break，因为四数之和的 target 可以是负数
    // 去重 a
    if (a > 0 && nums[a - 1] === nums[a])
      continue
    for (let b = a + 1; b < nums.length - 2; b++) {
      // 去重 b，注意此处去重的前提条件是 b > a + 1
      if (b > a + 1 && nums[b - 1] === nums[b])
        continue
      let c = b + 1
      let d = nums.length - 1
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d]
        if (sum < target) {
          c++
        }
        else if (sum > target) {
          d--
        }
        else {
          res.push([nums[a], nums[b], nums[c], nums[d]])
          // 去重逻辑应该放在找到一个四元组之后
          while (c < d && nums[c + 1] === nums[c]) c++
          while (c < d && nums[d - 1] === nums[d]) d--

          // 找到答案时，双指针同时收缩
          c++
          d--
        }
      }
    }
  }
  return res
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
