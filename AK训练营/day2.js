// LC.977 https://leetcode-cn.com/problems/squares-of-a-sorted-array/
// 本题数组两端大，中间小，可用双指针从两端向中间靠拢
const sortedSquares = function (nums) {
  let i = 0
  let j = nums.length - 1
  let p = j
  const res = []
  while (i <= j) {
    const i2 = nums[i] * nums[i]
    const j2 = nums[j] * nums[j]
    if (i2 < j2) {
      res[p] = j2
      j--
    }
    else {
      res[p] = i2
      i++
    }
    p--
  }
  return res
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))

// LC.35 https://leetcode.cn/problems/search-insert-position/
const searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target)
      return mid
    if (target < nums[mid])
      right = mid - 1
    else left = mid + 1
  }
  return left
}

console.log(searchInsert([1, 3, 5, 6], 2))

// LC.34 https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 寻找左右边界的关键点：当 nums[mid] 与 target 相等时，不要立即返回，而是缩小「搜索区间」的上下界，以锁定左侧边界或者右侧边界
const searchRange = function (nums, target) {
  const res = [-1, -1]
  if (nums.length === 0)
    return res
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2)
    if (target === nums[m])
      r = m - 1
    else if (target < nums[m])
      r = m - 1
    else l = m + 1
  }
  if (nums[l] !== target)
    return res
  res[0] = l
  r = nums.length - 1
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2)
    if (target === nums[m])
      l = m + 1
    else if (target < nums[m])
      r = m - 1
    else l = m + 1
  }
  res[1] = r
  return res
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
