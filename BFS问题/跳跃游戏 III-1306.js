/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function (arr, start) {
  const n = arr.length
  const visited = []
  const queue = [start]
  while (queue.length) {
    const i = queue.pop()
    const val = arr[i]
    if (val === 0)
      return true
    const left = i - val
    const right = i + val
    if (left >= 0 && !visited[left])
      queue.push(left)
    if (right < n && !visited[right])
      queue.push(right)
    visited[i] = true
  }
  return false
}
