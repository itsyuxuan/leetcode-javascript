// LC.122 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// 买卖股票的最佳时机 II
// 贪心算法
// 局部最优：收集每天的正利润 => 全局最优：求得最大利润
const maxProfit = function (prices) {
  let res = 0
  if (prices.length === 1)
    return res
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1]
    if (profit > 0)
      res += profit
  }
  return res
}
