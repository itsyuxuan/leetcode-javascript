// LC.144 https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 二叉树的前序遍历
// const preorderTraversal = function (root) {
//   const res = []
//   const traverse = (root) => {
//     if (!root)
//       return
//     res.push(root.val)
//     traverse(root.left)
//     traverse(root.right)
//   }
//   traverse(root)
//   return res
// }

// 前序遍历：中左右
// 压栈顺序：右左中
const preorderTraversal = function (root) {
  const res = []
  if (!root)
    return res
  const stk = [root]
  let node
  while (stk.length) {
    node = stk.pop()
    if (node) {
      node.right && stk.push(node.right)
      node.left && stk.push(node.left)
      stk.push(node)
      stk.push(null)
    }
    else {
      res.push(stk.pop().val)
    }
  }
  return res
}

// LC.94 https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 二叉树的中序遍历
// const inorderTraversal = function (root) {
//   const res = []
//   const traverse = (root) => {
//     if (root === null)
//       return
//     traverse(root.left)
//     res.push(root.val)
//     traverse(root.right)
//   }
//   traverse(root)
//   return res
// }

//  中序遍历：左中右
//  压栈顺序：右中左
const inorderTraversal = function (root) {
  const res = []
  if (!root)
    return res
  const stk = [root]
  let node
  while (stk.length) {
    node = stk.pop()
    if (node) {
      node.right && stk.push(node.right)
      stk.push(node)
      stk.push(null)
      node.left && stk.push(node.left)
    }
    else {
      res.push(stk.pop().val)
    }
  }
  return res
}

// LC.145 https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
// 二叉树的后序遍历
// const postorderTraversal = function (root) {
//   const res = []
//   const traverse = (root) => {
//     if (root === null)
//       return
//     traverse(root.left)
//     traverse(root.right)
//     res.push(root.val)
//   }
//   traverse(root)
//   return res
// }

// 后续遍历：左右中
// 压栈顺序：中右左
const postorderTraversal = function (root) {
  const res = []
  if (!root)
    return res
  const stk = [root]
  let node
  while (stk.length) {
    node = stk.pop()
    if (node) {
      stk.push(node)
      stk.push(null)
      node.right && stk.push(node.right)
      node.left && stk.push(node.left)
    }
    else {
      res.push(stk.pop().val)
    }
  }
  return res
}
