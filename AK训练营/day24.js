// LC.77 https://leetcode-cn.com/problems/combinations/
// 组合
// 可以剪枝
const combine = function (n, k) {
  const res = []
  const path = []
  const backtracking = (startIdx) => {
    if (path.length === k) {
      res.push([...path])
      return // 切记要返回
    }
    // 已经选择的元素个数：path.length
    // 还需要的元素个数为：k - path.length
    // 在集合 n 中至多要从该起始位置：n - (k - path.length) + 1，开始遍历
    // 举个例子，n = 4，k = 3， 目前已经选取的元素 0 个，n - (k - 0) + 1 即 4 - (3 - 0) + 1 = 2。从 2 开始搜索都是合理的，可以是组合[2, 3, 4]。
    for (let i = startIdx; i <= n - (k - path.length) + 1; i++) { // 控制树的横向遍历
      path.push(i) // 处理节点
      backtracking(i + 1) // 递归：控制树的纵向遍历，注意下一层搜索要从 i + 1 开始
      path.pop() // 回溯，撤销处理的节点
    }
  }
  backtracking(1)
  return res
}
