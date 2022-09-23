class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// LC.203 https://leetcode-cn.com/problems/remove-linked-list-elements/
// 虚拟头节点避免了头节点的特殊处理，指针从虚拟头节点开始遍历
// 返回值是虚拟头节点的下一个节点，即真正的头节点，避免了原先的头节点被删除后，找不到头节点的问题
const removeElements = function (head, val) {
  const dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while (cur.next) {
    if (cur.next.val === val)
      cur.next = cur.next.next
    else cur = cur.next
  }
  return dummy.next
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(6)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(5)
head.next.next.next.next.next.next = new ListNode(6)
console.log(removeElements(head, 6))

// LC.206 https://leetcode-cn.com/problems/reverse-linked-list/

// 方法1. 三指针迭代
// 在遍历链表时，将当前节点的 next 指针改为指向前一个节点
// 由于节点没有引用其上一个节点，因此必须事先存储其前一个节点
// 在更改引用之前，还需要存储后一个节点
// 时间复杂度：O(n)
// 空间复杂度：O(1)
const reverseList_iter = function (head) {
  let pre = null
  let cur = head
  let next
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  // 最后，cur 指针已经指向了 null，循环结束，链表也反转完毕了
  // 此时我们 return pre 指针就可以了，pre 指针就指向了新的头结点
  return pre
}

head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
console.log(reverseList_iter(head))

// 方法2. 递归
// 首先找出 base case
// 再写递归情况：假设链表的其余部分已经被反转，如何反转它前面的部分
// 时间复杂度：O(n)
// 空间复杂度：O(n) 空间复杂度主要取决于递归调用的栈空间，最多为 n 层
const reverseList_recur = function (head) {
  // base case
  if (!head || !head.next)
    return head

  // recursion here
  const tail = reverseList_recur(head.next)
  head.next.next = head
  head.next = null
  return tail
}

head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
console.log(reverseList_recur(head))
