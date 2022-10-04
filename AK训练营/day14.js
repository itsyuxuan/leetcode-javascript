// LC.144 https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 二叉树的前序遍历
const preorderTraversal = function (root) {
  const res = []
  const traverse = (root) => {
    if (!root)
      return
    res.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  return res
}

// LC.94 https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 二叉树的中序遍历
const inorderTraversal = function (root) {
  const res = []
  const traverse = (root) => {
    if (root === null)
      return
    traverse(root.left)
    res.push(root.val)
    traverse(root.right)
  }
  traverse(root)
  return res
}

// LC.145 https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
// 二叉树的后序遍历
const postorderTraversal = function (root) {
  const res = []
  const traverse = (root) => {
    if (root === null)
      return
    traverse(root.left)
    traverse(root.right)
    res.push(root.val)
  }
  traverse(root)
  return res
}
