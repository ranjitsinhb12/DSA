class Node{
  constructor(data, next = null, prev = null){
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
  }
}

// insert at begining
DoublyLinkedList.prototype.insertAtBeginning = function(data){
  const newNode = new Node(data, this.head, prev)

  if(this.head !== null){
    this.head.prev = newNode
    this.head = newNode
  }else{
    this.head = newNode
    this.tail = newNode
  }
}

// insert at end
DoublyLinkedList.prototype.insertAtEnd = function(data){
  const newNode = new Node(data, next, this.tail)

  if(this.tail !== null){
    this.tail.next = newNode
    this.tail = newNode
  }else{
    this.tail = newNode
    this.head = newNode
  }
}

// Insert after given point

DoublyLinkedList.prototype.insertAfer = function(prevNode, data){
  if(prevNode == null){
    console.log('Invalid prevNode')
    return
  }
  const newNode = new Node(data, prevNode.next, prevNode.prevNode)

  if(prevNode.next !== null){
    prevNode.next.prev = newNode
    prevNode.next = newNode
  }else{
    prevNode.next = newNode
    this.tail = newNode
  }
  
}
/// delete first node
DoublyLinkedList.prototype.deleteFirstNode = function(){
  if(!this.head){
    return
  }

  if(this.head == this.tail){
    this.head = null
    this.tail = null
  }else{
    this.head = this.head.next
    this.head.prev = null
  }
}

// delete last node
DoublyLinkedList.prototype.deleteLastNode = function(){
  if(!this.tail){
    console.log("Link list is empty")
    return
  }
  if(this.head === this.tail){
    this.head = null
    this.tail = null
    return
  }
  this.tail = this.tail.prev
  this.tail.next = null
}

// reverse
DoublyLinkedList.prototype.reverse = function(){
  let current = this.head
  let temp = null
  while(current){
    // swapping
    temp = current.prev
    current.prev = current.next
    current.next = temp
    // move to next node
    current = current.prev
  }
  if(temp != null){
    this.tail = this.head
    this.head = temp.prev
  }
}


/* QUESTIONS
1. Create DLL
2. Insert at Beginning
3. Insert at End
4. Insert after given node
5. Delete first node
6. Delete last node
7. reverse

*/