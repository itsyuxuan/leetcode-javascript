// LC.150 https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
// 逆波兰表达式求值
// 注意弹出栈顶的两个数字的运算顺序
// 先把字符串转成数字类型，再进行运算（否则会进行字符串拼接）
// 除法只保留整数部分用 parseInt，不要用 Math.floor（负数的情况）
// 时间复杂度：O(n) 遍历数组一次
// 空间复杂度：O(n) 使用栈存储计算过程中的数
const evalRPN = function (tokens) {
  const stk = []
  const ops = ['+', '-', '*', '/']
  for (const tk of tokens) {
    if (!ops.includes(tk)) {
      stk.push(parseInt(tk))
      continue
    }
    const x = stk.pop()
    const y = stk.pop()
    switch (tk) {
      case '+':
        stk.push(y + x)
        break
      case '-':
        stk.push(y - x)
        break
      case '*':
        stk.push(y * x)
        break
      case '/':
        stk.push(parseInt(y / x))
    }
  }
  return stk.pop()
}

console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))
