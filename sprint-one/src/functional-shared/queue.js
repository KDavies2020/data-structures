var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.addPosition = 0;
  someInstance.removePosition = 1;


  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.addPosition++;
  this.storage[this.addPosition] = value;
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

console.log(Object.keys(Queue).length);