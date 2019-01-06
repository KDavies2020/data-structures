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

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

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
    // check if list heads value = target?
    // if not, check if list head.next value = target
    //if not check if next next...
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */