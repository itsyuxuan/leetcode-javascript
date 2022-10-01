// LC.232 https://leetcode-cn.com/problems/implement-queue-using-stacks/
// 用栈实现队列
// 时间复杂度：O(1)
// 空间复杂度：O(n)
class MyQueue {
  constructor() {
    this.inStack = []
    this.outStack = []
  }

  push(x) {
    this.inStack.push(x)
  }

  pop() {
    if (!this.outStack.length)
      this.transfer()
    return this.outStack.pop()
  }

  peek() {
    if (!this.outStack.length)
      this.transfer()
    return this.outStack[this.outStack.length - 1]
  }

  empty() {
    return !this.inStack.length && !this.outStack.length
  }

  transfer() {
    while (this.inStack.length) this.outStack.push(this.inStack.pop())
  }
}

const myQueue = new MyQueue()
myQueue.push(1)
myQueue.push(2)
console.log(myQueue.peek()) // 返回 1
console.log(myQueue.pop()) // 返回 1
console.log(myQueue.empty()) // 返回 false

// LC.225 https://leetcode-cn.com/problems/implement-stack-using-queues/
// 用队列实现栈
// 时间复杂度：O(n)
// 空间复杂度：O(n)
class MyStack {
  constructor() {
    this.queue = []
    this.helper = []
  }

  // 关键在于此处实现 unshift(x)
  push(x) {
    this.helper.push(x)
    while (this.queue.length) this.helper.push(this.queue.shift())
    while (this.helper.length) this.queue.push(this.helper.shift())
  }

  pop() {
    return this.queue.shift()
  }

  top() {
    return this.queue[0]
  }

  empty() {
    return !this.queue.length
  }
}

const myStack = new MyStack()
myStack.push(1)
myStack.push(2)
console.log(myStack.top()) // 返回 2
console.log(myStack.pop()) // 返回 2
console.log(myStack.empty()) // 返回 false

// LC.20  https://leetcode-cn.com/problems/valid-parentheses/
// 时间复杂度：O(n)
// 空间复杂度：O(n)
const isValid = function (s) {
  // 剪枝，有效字符串的长度一定为偶数
  if (!s.length % 2)
    return false
  const stack = []
  for (const b of s) {
    if (b === '(') {
      stack.push(')')
      continue
    }
    if (b === '{') {
      stack.push('}')
      continue
    }
    if (b === '[') {
      stack.push(']')
      continue
    }
    if (b === stack.pop())
      continue
    return false
  }
  // 注意此处一定要判断栈是否为空
  return !stack.length
}

console.log(isValid('()[]{}')) // true

// LC.1047
// 时间复杂度：O(n)
// 空间复杂度：O(n)
const removeDuplicates = function (s) {
  const stk = []
  for (const ch of s) {
    if (stk.length && stk[stk.length - 1] === ch)
      stk.pop()
    else stk.push(ch)
  }
  return stk.join('')
}

console.log(removeDuplicates('abbaca')) // ca

