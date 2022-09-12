/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const res = []
  const path = []
  const backtracking = (n, k, start) => {
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      backtracking(n, k, i + 1)
      path.pop()
    }
  }
  backtracking(n, k, 1)
  return res
}

console.log(combine(4, 2))
