// LC.669 https://leetcode-cn.com/problems/trim-a-binary-search-tree/
// 修剪二叉搜索树
const trimBST = function (root, low, high) {
  if (!root)
    return null
  // 寻找符合区间 [low, high] 的节点
  if (root.val < low)
    return trimBST(root.right, low, high)
  // 寻找符合区间 [low, high] 的节点
  if (root.val > high)
    return trimBST(root.left, low, high)
  // root 在 [low,high] 范围内
  // root.left 接入符合条件的左孩子
  // root.right 接入符合条件的右孩子
  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)
  return root
}

// LC.108 https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
// 将有序数组转换为二叉搜索树
// 二叉树的构建问题就是：构造根节点，然后构建左右子树。
// 一个升序数组对于 BST 来说就是中序遍历结果，根节点在数组中心，数组左侧是左子树元素，右侧是右子树元素。
const sortedArrayToBST = function (nums) {
  const buildTree = (nums, left, right) => {
    if (left > right)
      return null
    const mid = Math.floor(left + (right - left) / 2)
    const root = new TreeNode(nums[mid])
    root.left = buildTree(nums, left, mid - 1)
    root.right = buildTree(nums, mid + 1, right)
    return root
  }
  return buildTree(nums, 0, nums.length - 1)
}

// LC.538 https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
// 把二叉搜索树转换为累加树
// 累加的顺序是右中左（反中序遍历）
// 维护一个外部累加变量 sum，在遍历 BST 的过程中增加 sum，
// 同时把 sum 赋值给 BST 中的每一个节点，就将 BST 转化成累加树了。
const convertBST = function (root) {
  let sum = 0
  const traverse = (root) => {
    if (!root)
      return
    // 右
    traverse(root.right)
    // 中
    // 维护累加和
    sum += root.val
    // 将 BST 转化为累加树
    root.val = sum
    // 左
    traverse(root.left)
  }
  traverse(root)
  return root
}
