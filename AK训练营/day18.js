// LC.513 https://leetcode-cn.com/problems/find-bottom-left-tree-value/
// 找树左下角的值
// 层序遍历，记录最后一行的第一个节点
const findBottomLeftValue = function (root) {
  // 注意只有整棵树只有一个节点的情况
  let res = root.val
  const q = [root]
  while (q.length) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    if (q[0])
      res = q[0].val
  }
  return res
}

// LC.112 https://leetcode-cn.com/problems/path-sum/
// 路径总和
// 递归
const hasPathSum = function (root, targetSum) {
  if (!root)
    return false
  // 注意叶子节点的判断
  if (!root.left && !root.right && root.val === targetSum)
    return true
  const complement = targetSum - root.val
  return hasPathSum(root.left, complement) || hasPathSum(root.right, complement)
}

// LC.113 https://leetcode-cn.com/problems/path-sum-ii/
// 路径总和 II
// 递归 + 回溯
const pathSum = function (root, targetSum) {
  const res = []
  const path = []
  const traverse = (root, targetSum) => {
    if (!root)
      return
    const remain = targetSum - root.val
    if (!root.left && !root.right) {
      if (remain === 0) {
        path.push(root.val)
        // JS 特有的二维数组操作 !!!!
        res.push([...path])
        path.pop()
      }
      return
    }
    path.push(root.val)
    // 切记此处的目标和是 remain !!!!
    traverse(root.left, remain)
    traverse(root.right, remain)
    path.pop()
  }
  traverse(root, targetSum)
  return res
}

// LC.105 https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 从前序与中序遍历序列构造二叉树
const buildTree_pre_in = function (preorder, inorder) {
  if (!preorder.length)
    return null
  const rootVal = preorder.shift() // 从前序遍历的数组中获取中间节点的值， 即数组第一个值
  const index = inorder.indexOf(rootVal) // 获取中间节点在中序遍历中的下标
  const root = new TreeNode(rootVal) // 创建中间节点
  root.left = buildTree_pre_in(preorder.slice(0, index), inorder.slice(0, index)) // 创建左节点
  root.right = buildTree_pre_in(preorder.slice(index), inorder.slice(index + 1)) // 创建右节点
  return root
}

// LC.106 https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// 从中序与后序遍历序列构造二叉树
const buildTree_in_post = function (inorder, postorder) {
  if (!inorder.length)
    return null
  const rootVal = postorder.pop() // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
  const rootIndex = inorder.indexOf(rootVal) // 获取中间节点在中序遍历中的下标
  const root = new TreeNode(rootVal) // 创建中间节点
  root.left = buildTree_in_post(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex)) // 创建左节点
  root.right = buildTree_in_post(inorder.slice(rootIndex + 1), postorder.slice(rootIndex)) // 创建右节点
  return root
}
