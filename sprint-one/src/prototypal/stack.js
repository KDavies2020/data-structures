var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.pop = function () {
  if (this.counter > 0) {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter --;
  }
  return temp;
};

stackMethods.push = function (string) {
  this.counter++;
  this.storage[this.counter] = string;
};

stackMethods.size = function () {
  return this.counter;
};