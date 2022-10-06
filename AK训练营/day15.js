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
