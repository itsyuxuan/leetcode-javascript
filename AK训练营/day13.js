// LC.150 https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
// 逆波兰表达式求值
// 注意弹出栈顶的两个数字的运算顺序
// 先把字符串转成数字类型，再进行运算（否则会进行字符串拼接）
// 除法只保留整数部分用 parseInt，不要用 Math.floor（负数的情况）
// 时间复杂度：O(n) 遍历数组一次
// 空间复杂度：O(n) 使用栈存储计算过程中的数
const evalRPN = function (tokens) {
  const stk = []
  const ops = ['+', '-', '*', '/']
  for (const tk of tokens) {
    if (!ops.includes(tk)) {
      stk.push(parseInt(tk))
      continue
    }
    const x = stk.pop()
    const y = stk.pop()
    switch (tk) {
      case '+':
        stk.push(y + x)
        break
      case '-':
        stk.push(y - x)
        break
      case '*':
        stk.push(y * x)
        break
      case '/':
        stk.push(parseInt(y / x))
    }
  }
  return stk.pop()
}

console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']),
)

// LC.239 https://leetcode-cn.com/problems/sliding-window-maximum/
// 滑动窗口最大值
// 单调队列 + 双端队列
// 使用一个队列存储所有还没有被移除的下标，队列中的下标对应的元素是单调递减的，队首是最大值
// 时间复杂度：O(n)
// 空间复杂度：O(k)
const maxSlidingWindow = function (nums, k) {
  const q = []
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) q.pop()
    q.push(i)
  }
  const res = [nums[q[0]]]
  for (let i = k; i < nums.length; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) q.pop()
    q.push(i)
    // 此时的最大值可能在滑动窗口左边界的左侧，因此需要不断从队首弹出元素，直到队首元素在窗口中为止
    while (q[0] <= i - k) q.shift()
    res.push(nums[q[0]])
  }
  return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

// LC.347 https://leetcode-cn.com/problems/top-k-frequent-elements/
// 前 K 个高频元素
// JS 没有最小堆的数据结构，所以直接对整个数组进行排序，取前 k 个元素
const topKFrequent = function (nums, k) {
  const map = new Map()
  for (const n of nums) map.set(n, map.get(n) + 1 || 1)
  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(kv => kv[0])
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
