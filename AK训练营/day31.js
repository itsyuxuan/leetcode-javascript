// LC.455 https://leetcode-cn.com/problems/assign-cookies/
// 分发饼干
// 优先考虑胃口，先喂饱大胃口，最大的饼干优先分给最大胃口的小孩
const findContentChildren = function (g, s) {
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  let res = 0
  let j = 0
  // 遍历胃口
  for (let i = 0; i < g.length; i++) {
    if (j < s.length && s[j] >= g[i]) {
      res++
      j++
    }
  }
  return res
}

// LC.376 https://leetcode-cn.com/problems/wiggle-subsequence/
// 摆动序列
const wiggleMaxLength = function (nums) {
  if (nums.length === 1)
    return 1
  let preDiff = 0
  let curDiff = 0
  let res = 1 // 记录峰值个数，默认序列最右边有一个峰值
  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i]
    if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      res++
      preDiff = curDiff
    }
  }
  return res
}
