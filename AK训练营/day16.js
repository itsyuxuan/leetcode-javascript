// LC.104 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// 二叉树的最大深度
// 递归法
const maxDepth = function (root) {
  return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0
}

// LC.559 https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
// N叉树的最大深度
const maxDepth = function (root) {
  if (!root)
    return 0
  let maxChildDepth = 0
  for (const node of root.children)
    maxChildDepth = Math.max(maxChildDepth, maxDepth(node))
  return maxChildDepth + 1
}

// LC.111 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// 二叉树的最小深度
// 递归法
// 左右孩子都为空的节点才是叶子节点
const minDepth = function (root) {
  if (!root)
    return 0
  // 只有左节点时 递归左节点
  if (root.left && !root.right)
    return 1 + minDepth(root.left)
  // 只有右节点时 递归右节点
  if (root.right && !root.left)
    return 1 + minDepth(root.right)
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}

// 迭代法
// root 本身就是一层，depth 初始化为 1
// 到第一个叶子节点 返回 当前深度 depth
// const minDepth = function (root) {
//   const res = []
//   if (!root)
//     return res
//   const q = [root]
//   let depth = 1
//   let node
//   while (q.length) {
//     const len = q.length
//     for (let i = 0; i < len; i++) {
//       node = q.pop()
//       if (!node.left && !node.right)
//         return depth
//       node.left && q.unshift(node.left)
//       node.right && q.unshift(node.right)
//     }
//     depth++
//   }
//   return depth
// }

// LC.222 https://leetcode-cn.com/problems/count-complete-tree-nodes/
// 完全二叉树的节点个数
// 递归法
const countNodes = function (root) {
  return root ? 1 + countNodes(root.left) + countNodes(root.right) : 0
}

// 如果用满二叉树的特性，则判断左右子树的高度，如果相等，则左子树是满二叉树，右子树是完全二叉树
// const countNodes = function (root) {
//   if (root === null)
//     return 0
//   let left = root.left
//   let right = root.right
//   let leftDepth = 1
//   let rightDepth = 1
//   while (left) {
//     left = left.left
//     leftDepth++
//   }
//   while (right) {
//     right = right.right
//     rightDepth++
//   }
//   if (leftDepth === rightDepth)
//     return 2 ** (leftDepth) - 1
//   return countNodes(root.left) + countNodes(root.right) + 1
// }
