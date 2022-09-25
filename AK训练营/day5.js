class DoubleLinkedList {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.head = null
    this.tail = null
  }

  get(key) {
    if (!this.map.has(key))
      return -1
    const doubleNode = this.map.get(key)
    const value = doubleNode.value
    this.remove(doubleNode)
    this.appendHead(doubleNode)
    return value
  }

  // 注意 WARNING 部分对 map 中的 key 的更新
  put(key, value) {
    if (this.map.has(key)) {
      const doubleNode = this.map.get(key)
      doubleNode.value = value
      this.remove(doubleNode)
      this.appendHead(doubleNode)
    }
    else {
      const doubleNode = new DoubleLinkedList(key, value)
      if (this.map.size >= this.capacity) {
        this.map.delete(this.tail.key) // WARNING
        this.remove(this.tail)
      }
      this.appendHead(doubleNode)
      this.map.set(key, doubleNode) // WARNING
    }
  }

  appendHead(doubleNode) {
    if (!this.head) {
      this.head = this.tail = doubleNode
    }
    else {
      doubleNode.next = this.head
      this.head.prev = doubleNode
      this.head = doubleNode
    }
  }

  remove(doubleNode) {
    if (this.head === this.tail) {
      this.head = this.tail = null
    }
    else if (this.head === doubleNode) {
      this.head = this.head.next
      this.head.prev = null
      doubleNode.next = null
    }
    else if (this.tail === doubleNode) {
      this.tail = this.tail.prev
      this.tail.next = null
      doubleNode.prev = null
    }
    else {
      doubleNode.prev.next = doubleNode.next
      doubleNode.next.prev = doubleNode.prev
      doubleNode.prev = doubleNode.next = null
    }
  }
}

const lRUCache = new LRUCache(2)
lRUCache.put(1, 1) // 缓存是 {1=1}
lRUCache.put(2, 2) // 缓存是 {1=1, 2=2}
console.log(`返回 1: ${lRUCache.get(1)}`)
lRUCache.put(3, 3) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(`返回 -1: ${lRUCache.get(2)}`)
lRUCache.put(4, 4) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(`返回 -1: ${lRUCache.get(1)}`)
console.log(`返回 3: ${lRUCache.get(3)}`)
console.log(`返回 4: ${lRUCache.get(4)}`)
