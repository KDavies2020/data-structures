var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.addPosition = 0;
  someInstance.removePosition = 1;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.addPosition++;
  this.storage[this.addPosition] = val;
};

queueMethods.dequeue = function() {
  if (this.addPosition - this.removePosition + 1 > 0) {
    var temp = this.storage[this.removePosition];
    delete this.storage[this.removePosition];
    this.removePosition++;
  }
  return temp;
};

queueMethods.size = function() {
  return this.addPosition - this.removePosition + 1;
};


