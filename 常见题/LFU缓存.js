class LFUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.values = new Map()
    this.times = new Map()
    this.useMap = new Map()
    this.min = 0
  }

  updateCount(key) {
    const count = this.times.get(key)
    this.times.set(key, count + 1)
    this.useMap.get(count).delete(key)
    if (count === this.min && this.useMap.get(count).size === 0)
      this.min++

    if (!this.useMap.has(count + 1))
      this.useMap.set(count + 1, new Set())

    this.useMap.get(count + 1).add(key)
  }

  get(key) {
    if (this.values.has(key)) {
      this.updateCount(key)
      return this.values.get(key)
    }
    return -1
  }

  put(key, value) {
    if (this.capacity === 0)
      return
    if (this.values.has(key)) {
      this.values.set(key, value)
      this.updateCount(key)
    }
    else {
      if (this.values.size >= this.capacity) {
        const minKey = this.useMap.get(this.min).values().next().value
        this.useMap.get(this.min).delete(minKey)
        this.values.delete(minKey)
        this.times.delete(minKey)
      }
      this.values.set(key, value)
      this.times.set(key, 1)
      this.min = 1
      if (!this.useMap.has(1))
        this.useMap.set(1, new Set())
      this.useMap.get(1).add(key)
    }
  }
}
