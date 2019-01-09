// Instantiate a new graph
var Graph = function() {
  this.storage = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
    value: node,
    connections: [],
  };
  this.storage.push(newNode);
};
// time complexity for .addNote: O(1) constant

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      return true;
    }
  }
  return false;
};
//time complexity for .contains: O(n) linear

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    for (var j = 0; j < this.storage[i].connections.length; j++) {
      this.storage[i].connections.splice(j, 1);
      j--;
    }
    if (this.storage[i].value === node) {
      this.storage.splice(i, 1);
      i--;
    }
  }
};
//time complexity for .removeNode: O(n) linear

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var from;


  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      from = this.storage[i];
    }
  }
  return from.connections.includes(toNode);
};
//time complexity for .hasEdge: O(n) linear

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var from;
  var to;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      from = this.storage[i];
    }
    if (this.storage[i].value === toNode) {
      to = this.storage[i];
    }
  }
  if (from !== to) {
    from.connections.push(toNode);
    to.connections.push(fromNode);
  }
};
//time complexity for .addEdge: O(n) linear

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var from;
  var to;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      from = this.storage[i];
    }
    if (this.storage[i].value === toNode) {
      to = this.storage[i];
    }
  }
  for (var i = 0; i < from.connections.length; i++) {
    if (from.connections[i] === toNode) {
      from.connections.splice(i, 1);
    }
    if (to.connections[i] === fromNode) {
      to.connections.splice(i, 1);
    }
  }
};
//time complexity for .removeEdge: O(n) linear

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    var currNode = this.storage[i];
    cb(currNode.value);
  }
};
//time complexity for .forEachNode: O(n) linear

/*
{  } Graph
{value: somcething, connections: [list of all values connected to this value]}

 * Complexity: What is the time complexity of the above functions?
 */
