var Queue = function() {
  var someInstance = {};

  var counter = 0;
  var dequeuPosition = 1;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() >= 1) {
      var temp = storage[dequeuPosition];
      delete storage[dequeuPosition];
      dequeuPosition++;
      return temp;
    }
  };

  someInstance.size = function() {
    return counter - dequeuPosition + 1;
  };

  return someInstance;
};