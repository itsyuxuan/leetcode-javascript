/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = function (arr) {
  let n = arr.length
  if (n === 1)
    return 0

  // 连续出现超过两次的数字就抛弃掉
  const newArr = []
  let sameCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      sameCount += 1
      if (sameCount >= 2)
        continue
      else
        newArr.push(arr[i])
    }
    else {
      newArr.push(arr[i])
      sameCount = 0
    }
  }
  arr = newArr
  n = arr.length
  // 遍历一遍 记录每个数字出现的下标位置
  const indexesMap = new Map()
  for (let i = 0; i < n; i++) {
    const val = arr[i]
    const indexes = indexesMap.get(val)
    if (!indexes)
      indexesMap.set(val, [i])
    else
      indexes.push(i)
  }

  const visited = []
  let count = 0
  const queue = [0]
  while (queue.length) {
    count++
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const index = queue.shift()
      // 找到了 由于bfs的特性 此时用的跳跃次数一定是最少的
      if (index === n - 1)
        return count - 1

      // 没找到 继续把可以跳的几个位置都放入队列中
      const val = arr[index]
      const left = index - 1
      const right = index + 1
      const sameIndexes = indexesMap.get(val)

      if (left >= 0 && !visited[left])
        queue.push(left)
      if (right < n && !visited[right])
        queue.push(right)
      for (const sameIndex of sameIndexes) {
        if (sameIndex !== index && !visited[sameIndex])
          queue.push(sameIndex)
      }

      visited[index] = true
    }
  }
  return n
}
