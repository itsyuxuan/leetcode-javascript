// LC.39 https://leetcode-cn.com/problems/combination-sum/
// 组合总和
// 关键在元素可重复选取，所以递归参数用 i 就行
const combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const res = []
  const path = []
  let sum = 0
  const backtracking = (startIdx) => {
    if (sum > target)
      return
    if (sum === target) {
      res.push([...path])
      return
    }
    for (let i = startIdx; i < candidates.length; i++) {
      const candidate = candidates[i]
      path.push(candidate)
      sum += candidate
      backtracking(i) // 关键点：不用 i+1 了，表示可以重复读取当前的数
      sum -= candidate
      path.pop()
    }
  }
  backtracking(0, 0)
  return res
}
