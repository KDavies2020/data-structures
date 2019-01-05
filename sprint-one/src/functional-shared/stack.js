var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(string) {
  this.counter++;
  this.storage[this.counter] = string;
};
stackMethods.pop = function() {
  if (this.counter > 0) {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
  }
  return temp;
};

stackMethods.size = function() {
  return this.counter;
};