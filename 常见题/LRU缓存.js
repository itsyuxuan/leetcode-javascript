class LRUCache {
  constructor(capacity) {
    this.map = new Map()
    this.capacity = capacity
  }

  get(key) {
    if (this.map.has(key)) {
      const value = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }
    else { return -1 }
  }

  // 先判断是否存在 key，如不存在再判断是否超过容量（如果刚好存在且容量已满，则不需要扩容了）
  // 注意 map 值的关键词是 value 不是 val
  put(key, value) {
    if (this.map.has(key))
      this.map.delete(key)
    else if (this.map.size >= this.capacity)
      this.map.delete(this.map.keys().next().value)
    this.map.set(key, value)
  }
}

// class DoubleNode {
//   constructor(key, val) {
//     this.key = key
//     this.val = val

//     this.prev = null
//     this.next = null
//   }
// }

// class LRUCache {
//   constructor(max) {
//     this.max = max
//     this.map = new Map()

//     this.head = null
//     this.tail = null
//   }

//   get(key) {
//     const node = this.map.get(key)
//     if (!node) {
//       return -1
//     }
//     else {
//       const res = node.val
//       this.remove(node)
//       this.appendHead(node)
//       return res
//     }
//   }

//   put(key, value) {
//     let node = this.map.get(key)
//     // 有这个缓存
//     if (node) {
//       node.val = value
//       // 新加入的 放在最前面
//       this.remove(node)
//       this.appendHead(node)
//     }
//     else {
//       // 没有这个缓存
//       node = new DoubleNode(key, value)
//       // 如果超出容量了 删除最后一个 再放到头部
//       if (this.map.size >= this.max) {
//         this.map.delete(this.tail.key)
//         this.remove(this.tail)
//         this.appendHead(node)
//         this.map.set(key, node)
//       }
//       else {
//         // 未超出容量 就直接放到头部
//         this.appendHead(node)
//         this.map.set(key, node)
//       }
//     }
//   }

//   /**
//    * 把头部指针的改变成新的node
//    * @param {DoubleNode} node
//    */
//   appendHead(node) {
//     if (this.head === null) {
//       this.head = this.tail = node
//     }
//     else {
//       node.next = this.head
//       this.head.prev = node
//       this.head = node
//     }
//   }

//   /**
//    * 删除某个节点
//    * @param {DoubleNode} node
//    */
//   remove(node) {
//     if (this.head === this.tail) {
//       this.head = this.tail = null
//     }
//     else {
//       // 删除头部
//       if (this.head === node) {
//         this.head = this.head.next
//         node.next = null
//       }
//       else if (this.tail === node) {
//         this.tail = this.tail.prev
//         this.tail.next = null
//         node.prev = null
//       }
//       else {
//         node.prev.next = node.next
//         node.next.prev = node.prev
//         node.prev = node.next = null
//       }
//     }
//   }
// }
