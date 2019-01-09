var BinarySearchTree = function(value) {
  // this.storage = {};
  this.value = value;
  this.left = null;
  this.right = null;
};



BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value);
  var currentTree = this;
  var placeFinder = function(currentNode) {

    if (value < currentNode.value) {

      var leftChild = currentNode.left;
      if (leftChild === null) {

        currentNode.left = newTree;
      } else {
        placeFinder(currentNode.left);
      }
    } else if (value > currentNode.value) {
      var rightChild = currentNode.right;
      if (rightChild === null) {

        currentNode.right = newTree;
      } else {
        placeFinder(currentNode.right);
      }
    }
  };
  placeFinder(currentTree);

};

// ** Time complexity for .insert: O(logN)

BinarySearchTree.prototype.contains = function(value) {

  var searcher = function(tree) {

    if (tree.value === value) {
      return true;
    } else if (value > tree.value && (tree.right)) {
      return searcher(tree.right);
    } else if (value < tree.value && (tree.left)) {
      return searcher(tree.left);
    }

    return false;
  };

  return searcher(this);
};

// ** Time complexity for .contains: O(logN)

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  var recursiveCB = function(node) {
    cb(node.value);

    if (node.left) {
      recursiveCB(node.left);
    }
    if (node.right) {
      recursiveCB(node.right);
    }
  };
  recursiveCB(this);
};

// ** time complexity for .depthFirstLog: linear O(n)
/*
     * Complexity: What is the time complexity of the above functions?
     */