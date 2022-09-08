/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length % 2 === 1)
    return false
  const stack = []
  const left_brackets = ['(', '{', '[']
  for (const b of s) {
    if (left_brackets.includes(b)) {
      switch (b) {
        case '(':
          stack.unshift(')')
          break
        case '{':
          stack.unshift('}')
          break
        case '[':
          stack.unshift(']')
          break
      }
    }
    else {
      if (stack.shift() === b)
        continue
      return false
    }
  }
  if (stack.length !== 0)
    return false
  return true
}

console.log(isValid('({})[()]'))
