class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(d) {
    this.queue.push(d);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    this.queue.shift();
  }

  peak() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

/// Usage

let myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);
console.log(myQueue.printQueue());
console.log(`Size: ${myQueue.size()}`);
myQueue.dequeue();
console.log("After dequeue...");
console.log(myQueue.printQueue());
console.log(`Size: ${myQueue.size()}`);
console.log(`Peak: ${myQueue.peak()}`);
console.log(`Empty: ${myQueue.isEmpty()}`);

/* 
////// QUESTIONS for QUEUE ///////
1. Create queue and add value (enqueue)
2. Remove value from queue (dequeue)
3. find size of queue
4. print queue
5. find peak in queue
6. check if empty or not

*/
