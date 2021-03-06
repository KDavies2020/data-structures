var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = true;
};
//time complexity of .add: O(1) constant

setPrototype.contains = function(item) {
  return !!this.storage[item];
};
//time complexity of .contains: O(1) constant
setPrototype.remove = function(item) {
  delete this.storage[item];
};
//time complexity of .remove: O(1) constant
/*
 * Complexity: What is the time complexity of the above functions?
 */
