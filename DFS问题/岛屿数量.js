/**
 * 岛屿问题

    给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

    示例 1:

    输入:
    11110
    11010
    11000
    00000

    输出: 1
    示例 2:

    输入:
    11000
    11000
    00100
    00011

    输出: 3

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/number-of-islands
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const numIslands = function (grid) {
  let res = 0
  const m = grid.length
  const n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        res++
        dfs(grid, i, j)
      }
    }
  }
  return res
}

// 从 (i, j) 开始，将与之相邻的 1 都变成 0
function dfs(grid, i, j) {
  const m = grid.length
  const n = grid[0].length
  if (i < 0 || j < 0 || i >= m || j >= n)
    return
  if (grid[i][j] === '0')
    return
  grid[i][j] = '0'
  dfs(grid, i - 1, j) // 上
  dfs(grid, i + 1, j) // 下
  dfs(grid, i, j - 1) // 左
  dfs(grid, i, j + 1) // 右
}

/**
 * 很经典的 dfs 问题，很棒很棒的思路，当找到一个点为1的时候，先记录数量加一。

    然后对于每个点递归的去遍历自己和上下左右的节点，如果值为1就置为0再继续遍历上下左右，这样直到遇到某一边本身就为0的时候停止。

    这样，一片 “值为1的岛屿” 就全部归零了。
 */
