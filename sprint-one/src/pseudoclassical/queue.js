var Queue = function() {

  this.storage = {};
  this.addPosition = 0;
  this.removePosition = 1;
};

Queue.prototype.enqueue = function (val) {
  this.addPosition ++;
  this.storage[this.addPosition] = val;
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    var temp = this.storage[this.removePosition];
    delete this.storage[this.removePosition];
    this.removePosition++;
  }
  return temp;
};

Queue.prototype.size = function () {
  return this.addPosition - this.removePosition + 1;
};

// var someInstance = new Queue

