var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.previousAdd = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
    }
    if (list.head === null) {
      list.head = node;
    }
    list.tail = node;
  };

  // time complexity of .addToTail: O(1) constant

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  //time complexity of .removeHead: O(1) constant

  list.contains = function(target) {
    var checkList = function(currentVal) {
      if (currentVal.value === target) {
        return true;
      } else if (currentVal.next !== null) {
        return checkList(currentVal.next);
      }
      return false;
    };
    return checkList(list.head);

  };

  return list;
};
// time complexity of .contains: O(n) linear

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */