// LC.704 https://leetcode.cn/problems/binary-search/
// 采用左闭右闭区间 [left, right] 的二分法，才有 mid + 1 和 mid - 1 的对称操作
// 注意 JavaScript 的除法会直接计算到小数，计算商要用 Math.floor() 方法
// 时间复杂度：O(logn)
// 空间复杂度：O(1)
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (target === nums[mid])
      return mid
    if (target < nums[mid])
      right = mid - 1
    else left = mid + 1
  }
  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))

// LC.27 https://leetcode.cn/problems/remove-element/
// 双指针法：通过一个快指针和慢指针在一个 for 循环下完成两个 for 循环的工作
// 快指针：寻找新数组的的元素
// 慢指针：指向新数组的下标
// 时间复杂度：O(n)
// 空间复杂度：O(1)
const removeElement = function (nums, val) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    // 后缀式 (x++) 操作数会加一，然后返回加一之前的值
    // 前缀式 (++x) 操作数会加一，然后返回加一之后的值
    if (nums[fast] !== val)
      nums[slow++] = nums[fast]
  }
  return slow
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
