class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
let head

// LC.24 https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// 递归法
// 重点在于缓存 head.next 节点
// 如果想不清楚，就把 head, head.next, head.next.next 分别保存为 c1, c2, c3 进行操作
// 时间复杂度：O(n)
// 空间复杂度：O(n) 空间复杂度主要取决于递归调用的栈空间
const swapPairs = (head) => {
  if (!head || !head.next)
    return head
  const next = head.next
  head.next = swapPairs(next.next)
  next.next = head
  return next
}

head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
console.log(swapPairs(head))

// LC.19 https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// 倒数第 n 个节点问题，可以使用双指针来解决（只遍历一次）
// 快指针先从虚拟头节点出发，移动 n 步，然后快慢指针一起移动，直到快指针到达链表尾部
// 删除倒数第 n 个节点，就是删除慢指针的下一个节点
// 时间复杂度：O(L) L 为链表长度
// 空间复杂度：O(1)
const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0)
  dummy.next = head
  let fast = dummy
  let slow = dummy
  for (let i = 0; i < n; i++) fast = fast.next
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy.next
}

head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
console.log(removeNthFromEnd(head, 2))

// LC.160 https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
// 关键是令两个链表尾部对齐，那么可以拼接两个链表，然后同时遍历，如果相等就是交点
// 时间复杂度：O(m+n) m, n 分别为两个链表的长度
// 空间复杂度：O(1)
const getIntersectionNode = function (headA, headB) {
  let p1 = headA
  let p2 = headB
  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB
    p2 = p2 ? p2.next : headA
  }
  return p1
}

const headA = new ListNode(4)
headA.next = new ListNode(1)
headA.next.next = new ListNode(8)
headA.next.next.next = new ListNode(4)
headA.next.next.next.next = new ListNode(5)
const headB = new ListNode(5)
headB.next = new ListNode(6)
headB.next.next = new ListNode(1)
headB.next.next.next = headA.next.next
headB.next.next.next.next = headA.next.next.next
headB.next.next.next.next.next = headA.next.next.next.next
console.log(getIntersectionNode(headA, headB))

// LC.142 https://leetcode-cn.com/problems/linked-list-cycle-ii/
// 参考资料 https://labuladong.github.io/algo/2/19/18/
// 假设相遇点距环的起点的距离为 m，那么从 head 前进 k - m 步就到达环起点
// 从相遇点开始走 k 步可以转回到相遇点，那么从相遇点前进 k - m 步就达到环起点
// 此时追踪针从 head 出发，慢指针从相遇点出发，两者相遇的地方就是环起点
// 注意判断是否有环时，快慢指针前进的条件是 fast && fast.next
// 时间复杂度：O(N)
// 空间复杂度：O(1)
const detectCycle = function (head) {
  let slow = head
  let fast = head
  let tracker = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      while (tracker !== slow) {
        tracker = tracker.next
        slow = slow.next
      }
      return tracker
    }
  }
  return null
}

head = new ListNode(3)
head.next = new ListNode(2)
head.next.next = new ListNode(0)
head.next.next.next = new ListNode(-4)
head.next.next.next.next = head.next
console.log(detectCycle(head))
