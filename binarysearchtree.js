class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert
  insert(key){
    const newNode = new BSTNode(key)
    if(this.root === null){
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode){ // node is root node
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode
      }else{
        this.insertNode(node.left, newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        this.insertNode(node.right, newNode)
      }
    }
  }

  // delete

  delete(key){
    this.root = this.deleteNode(this.root, key)
  }

  deleteNode(node, key){
    if(node == null){
      return null
    }

    if(key < node.key){
      node.left = this.deleteNode(node.left, key)
    }else if(key > node.key){
      node.right = this.deleteNode(node.right, key)
    }else{
      if(node.left === null && node.right === null){
        return null
      }else if(node.left == null){
       return node.right
      }else if(node.right == null){
        return node.left
      }else{
        let tempNode = findMinNode(node.right)
        node.key = tempNode.key
        node.right = this.deleteNode(node.right, tempNode.key)

      }
    }
    return node
  }

  findMinNode(node){
    while(node !== null){
      node = node.left
    }
    return node
  }
  // in order traversal
  inOrderTraversal(){
    const result = []
    this.inOrder(this.root, result)
    return result
  }

  inOrder(node, result){
    if(node !== null){
      this.inOrder(node.left, result)
      result.push(node.key)
      this.inOrder(node.right, result)
    }
  }
  // pre order traversal
  preOrderTraversal(){
    const result = []
    this.preOrder(this.root, result)
    return result
  }

  preOrder(node, result){
    if(node !== null){
      result.push(node.key)
      this.preOrder(node.left, result)
      this.preOrder(node.right, result)
    }
  }

  // post order traversal
  postOrderTraversal(){
    const result = []
    this.postOrder(this.root, result)
    return result
  }

  postOrder(node, result){
    if(node !== null){
      this.postOrder(node.left, result)
      this.postOrder(node.right, result)
      result.push(node.key)
    }
  }

  ///// Binary tree Depth First Search will take above node as reference
  depthFirstSearch(root){
    const values = []
    if(root === null){
      return values // return empty array
    }

    const stack = [root]
    while(stack.length > 0){
      const node = stack.pop()
      values.push(node.key)

      if(node.right !== null){
        stack.push(node.right)
      }
      if(node.left !== null){
        stack.push(node.left)
      }
    }
    return values
  }

  // RecursiveDepthFirstSearch 
  recursiveDepthFirstSearch(root){
    const values = []
    if(root === null){
      return values
    }

    const leftValues = recursiveDepthFirstSearch(root.left)
    const rightValues = this.recursiveDepthFirstSearch(root.right)

    /// first out put [root, [leftvalues], [rightvalues]]
    //return [root, leftValues, rightValues]

    // second output [values]
    return [root, ...leftValues, ...rightValues]
  }

  // Breadth First Search
  breadthFirstSearch(root){
    const values = []
    const queue = [root]
    if(root === null){
      return values
    }
    if(queue !== null){
      const node = queue.shift()
      while(queue.length > 0){
        values.push(node.key)
        if(node.left !== null){
          queue.push(node.left)
        }
        if(node.right !== null){
          queue.push(node.right)
        }
      }
      return values
    }

  }

  /// Sum with breadth first search
  sumWithBreadthFirst(root){
    if(root === null) return 0
    let values = []
    let queue = [root]
    let total = 0;
    while(queue.length > 0){
      const node = queue.shift()
      total += node.key
      if(node.left !== null){
        queue.push(node.left)
      }
      if(node.right !== null){
        queue.push(node.right)
      }
    }
    return total
  }
}







