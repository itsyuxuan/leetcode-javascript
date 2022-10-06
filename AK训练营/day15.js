// LC.102 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 二叉树的层序遍历
// 递归法
// 关键在于记录层数
// const levelOrder = function (root) {
//   const res = []
//   const dfs = (root, depth = 0) => {
//     if (!root)
//       return
//     if (!res[depth])
//       res[depth] = []
//     res[depth].push(root.val)
//     dfs(root.left, depth + 1)
//     dfs(root.right, depth + 1)
//   }
//   dfs(root)
//   return res
// }

// 迭代法
// 关键在于使用固定大小的 len 保存当前层的节点数
const levelOrder = function (root) {
  const res = []
  if (!root)
    return res
  const q = [root]
  let node
  while (q.length) {
    // 保存当前层的节点数
    const len = q.length
    // 保存当前层的节点值
    const level = []
    for (let i = 0; i < len; i++) {
      node = q.shift()
      level.push(node.val)
      // 保存下一层的节点
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    res.push(level)
  }
  return res
}

// LC.226 https://leetcode-cn.com/problems/invert-binary-tree/
// 翻转二叉树
// 前序遍历
const invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [root.right, root.left]
    root.left = invertTree(root.left)
    root.right = invertTree(root.right)
  }
  return root
}

// LC.101 https://leetcode-cn.com/problems/symmetric-tree/
// 对称二叉树
// 递归法
const isSymmetric = function (root) {
  const compare = (l, r) => {
    // 首先排除空节点的情况
    if (!l || !r)
      return l === r
    // 再排除数值不相同的情况
    if (l.val !== r.val)
      return false
    // 此时就是：左右节点都不为空，且数值相同的情况
    // 递归判断外侧和内侧两种情况
    return compare(l.left, r.right) && compare(l.right, r.left)
  }
  return compare(root.left, root.right)
}
