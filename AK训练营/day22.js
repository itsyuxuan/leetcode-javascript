// LC.235 https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 二叉搜索树的最近公共祖先
// 关键在于先对 p 和 q 进行排序
const lowestCommonAncestor = function (root, p, q) {
  if (!root)
    return null
  // 保证 p.val <= q.val，便于后续情况讨论
  if (p.val > q.val)
    [p, q] = [q, p]
  // p <= root <= q
  // 即 p 和 q 分别在 root 的左右子树，那么 root 就是 LCA
  if (p.val <= root.val && q.val >= root.val)
    return root
  // p 和 q 都在 root 的左子树，那么 LCA 在左子树
  if (q.val < root.val)
    return lowestCommonAncestor(root.left, p, q)
  // p 和 q 都在 root 的右子树，那么 LCA 在右子树
  if (p.val > root.val)
    return lowestCommonAncestor(root.right, p, q)
}

// LC.701 https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
// 二叉搜索树中的插入操作
const insertIntoBST = function (root, val) {
  // 找到空位置插入新节点
  if (!root)
    return new TreeNode(val)
  if (val < root.val)
    root.left = insertIntoBST(root.left, val)
  if (val > root.val)
    root.right = insertIntoBST(root.right, val)
  return root
}

// LC.450 https://leetcode-cn.com/problems/delete-node-in-a-bst/
// 二叉搜索树中的删除操作
// 场景1: 该节点是叶节点
// 场景2: 有一个孩子节点不存在
// 场景3: 左右节点都存在
const deleteNode = function (root, key) {
  if (!root)
    return null
  if (key === root.val) {
    // 这两个 if 把场景 1 和 2 都正确处理了
    if (!root.left)
      return root.right
    if (!root.right)
      return root.left
    // 场景3: 左右节点都存在
    // 获得右子树最小的节点
    const minNode = getMin(root.right)
    // 将待删除节点的值替换为最小值节点值
    root.val = minNode.val
    // 删除右子树最小的节点
    root.right = deleteNode(root.right, minNode.val)
  }
  else if (key < root.val) { root.left = deleteNode(root.left, key) }
  else if (key > root.val) { root.right = deleteNode(root.right, key) }
  return root
}

function getMin(node) {
  // BST 最左边的就是最小的
  while (node.left) node = node.left
  return node
}
