/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const res = []
  const path = []
  const backtracking = (nums, start) => {
    res.push([...path])
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtracking(nums, i + 1)
      path.pop()
    }
  }
  backtracking(nums, 0)
  return res
}

console.log(subsets([1, 2, 3]))
