class Queue {
  constructor() {
    this.storage = {};
    this.addPosition = 0;
    this.removePosition = 1;
  }

  enqueue(val) {
    this.addPosition++;
    this.storage[this.addPosition] = val;
  }

  dequeue() {
    if (this.size() > 0) {
      var temp = this.storage[this.removePosition];
      delete this.storage[this.removePosition];
      this.removePosition++;
    }
    return temp;
  }

  size() {
    return this.addPosition - this.removePosition + 1;
  }
}