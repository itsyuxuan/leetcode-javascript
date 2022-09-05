// https://leetcode-cn.com/problems/island-perimeter
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  if (grid.length === 0)
    return 0
  let res = 0
  const m = grid.length; const n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res += 4
        if (i > 0 && grid[i - 1][j] === 1)
          res -= 2
        if (j > 0 && grid[i][j - 1] === 1)
          res -= 2
      }
    }
  }
  return res
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
)
