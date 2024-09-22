class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }
}
/***** Insert at Beginning */
// Take Data
// convert it to node
// add this node to head

// Insert it to beginning Code
LinkList.prototype.insertAtBeginning = function (data) {
  const newNode = Node(data);
  this.head = newNode;
};

/**** Insert at End */
// Take Data
// Convert it to Node
// Check if head is null - If Yes Add
//If head is not null -> Move to End -> Add
/*Move to End*/
// Assume head is last
// verify last.next == null
// if null -> Add
// if Not null -> update last with new value

// Insert at end Code
LinkList.prototype.insertAtEnd = function (data) {
  const newNode = Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let last = this.head;

  while (last.next) {
    last = last.nex;
  }

  last.next = newNode;
};

// Insert at given node
LinkList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("Previous Node is required!");
  }
  const newNode = Node(data, prevNode.next);
  prevNode.next = newNode;
};

// Delete first node
LinkList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    console.log("No head found!");
    return;
  }
  this.head = this.head.next;
};

// Delete last node (find sedonc last node)
LinkList.prototype.deleteLastNode = function () {
  // if head is null
  if (!this.head) {
    console.log("Nothing to delete");
    return;
  }
  // if head next is null(only one node)
  if (!this.head.next) {
    this.head = null;
    return;
  }
  // if link list has more nodes
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

/// Delete provided value
LinkList.prototype.deleteByKey = function (key) {
  // List is empty
  if (!this.head) {
    console.log("List is empty");
    return;
  }
  // data found at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next != null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return
    }
    current = current.next
  }
  console.log(`No Node found with Key :  ${key}`)
}

/// Search Operation
LinkList.prototype.search = function(key){
  let current = this.head
  while(current){
    if(current.data === key){
      return true
    }
    current = current.next
  }
}

/// Traversals
LinkList.prototype.traversals = function(){
  let current = this.head
  let listItems = []
  while(current){
    listItem.push = current.data
    current = current.next
  }
  let joinArrow = "";
  if(listItems.length >= 2){
    joinArrow = " -> "
  }
  console.log(listItem.join(joinArrow))
}

/* Reverse Link List
 |3| |  |4| |  |5| |

next = null | null, 4,5,0
prev = null | null, 3,4,5
current = this.head | 3,4,5,0
while current ->
  next = current.next
  current.next = prev
  prev = current
  current = next
head = prev
*/
LinkList.prototype.reverse = function(){
  let next = null
  let prev = null
  let current = this.head
  while(current){
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  this.head = prev
}

/*
////// QUESTIONS FOR LINKLIST //////
1. Create Linklist
2. Insert at Beginning
3. Insert at End
4. Insert at Given node
5. Delete First Node
6. Delete Last Node
7. Delete Provided key
8. Search Operation
9. Traversals - Print LinkList
10 Reverse Link List

*/