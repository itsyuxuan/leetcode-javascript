// LC.977 https://leetcode-cn.com/problems/squares-of-a-sorted-array/
// 本题数组两端大，中间小，可用双指针从两端分别向中间靠拢
// 每次比较两个指针对应的数，选择较大的那个逆序放入答案并移动指针
// 时间复杂度：O(n)
// 空间复杂度：O(1)
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

// LC.59 https://leetcode-cn.com/problems/spiral-matrix-ii/
// 模拟四种方向的移动
// JS 创建二维数组：new Array(n).fill().map(() => new Array(n).fill())
// 注意 ++ 和 --
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
const generateMatrix = function (n) {
  const res = new Array(n).fill().map(() => new Array(n).fill())
  let top = 0
  let bottom = n - 1
  let left = 0
  let right = n - 1
  let el = 1
  const total = n * n
  while (el <= total) {
    // 在顶部从左向右遍历
    for (let i = left; i <= right; i++) res[top][i] = el++
    // 上边界下移
    top++

    // 在右侧从上向下遍历
    for (let i = top; i <= bottom; i++) res[i][right] = el++
    // 右边界左移
    right--

    // 在底部从右向左遍历
    for (let i = right; i >= left; i--) res[bottom][i] = el++
    // 下边界上移
    bottom--

    // 在左侧从下向上遍历
    for (let i = bottom; i >= top; i--) res[i][left] = el++
    // 左边界右移
    left++
  }
  return res
}

console.log(generateMatrix(3))

// LC.209 https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 滑动窗口，观测的变量有点多
// 时间复杂度主要看每一个元素被操作的次数
// 每个元素最多被操作两次，一次是加入窗口，一次是移出窗口
// 所以时间复杂度是 2 × n 也就是 O(n)
// 时间复杂度：O(n)
// 空间复杂度：O(1)
const minSubArrayLen = function (target, nums) {
  let l = 0
  let r = 0
  let sum = 0
  let res = Number.MAX_SAFE_INTEGER
  while (r < nums.length) {
    sum += nums[r++]
    while (sum >= target) {
      res = Math.min(res, r - l)
      sum -= nums[l++]
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))

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
