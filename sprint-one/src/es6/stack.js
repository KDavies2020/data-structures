class Stack {

  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(val) {
    this.counter ++;
    this.storage[this.counter] = val;
  }

  pop() {
    if(this.counter > 0) {
      var temp = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter --;
    }
    return temp;
  }

  size() {
    return this.counter;
  }

}
