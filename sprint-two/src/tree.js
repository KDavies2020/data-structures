var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = []; // fix me

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var tree = this;
  if (tree.value === target) {
    return true;
  } else {
    for (var i = 0; i < tree.children.length; i++) {
      child = tree.children[i];
      if (child.contains(target)) {
        return true;
      } else {
        continue;
      }
    }
  }
  return false;
};


/*
        PARENT (.children.length === 2)

    CHILD    CHILD (.children.length === 0)

 * Complexity: What is the time complexity of the above functions?
 */