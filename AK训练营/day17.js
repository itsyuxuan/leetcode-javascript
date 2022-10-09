// LC.110 https://leetcode-cn.com/problems/balanced-binary-tree/
// 平衡二叉树
// 求深度适合用前序遍历，而求高度适合用后序遍历
const isBalanced = function (root) {
  const getHeight = (root) => {
    if (!root)
      return 0
    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)
    if (leftHeight === -1)
      return -1
    if (rightHeight === -1)
      return -1
    return Math.abs(leftHeight - rightHeight) > 1 ? -1 : 1 + Math.max(leftHeight, rightHeight)
  }
  return getHeight(root) !== -1
}

// LC.257 https://leetcode-cn.com/problems/binary-tree-paths/
// 二叉树的所有路径
const binaryTreePaths = function (root) {
  const res = []
  const traverse = (root, curPath) => {
    if (!root)
      return
    if (!root.left && !root.right) {
      curPath += root.val
      res.push(curPath)
      return
    }
    curPath += `${root.val}->`
    traverse(root.left, curPath)
    traverse(root.right, curPath)
  }
  traverse(root, '')
  return res
}

// LC.404 https://leetcode-cn.com/problems/sum-of-left-leaves/
// 左叶子之和
const sumOfLeftLeaves = function (root) {
  let res = 0
  const traverse = (root) => {
    if (!root)
      return
    if (root.left && !root.left.left && !root.left.right)
      res += root.left.val
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  return res
}
