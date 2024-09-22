class Stack {
  constructor() {
    this.stack = [];
  }

  push(d) {
    this.stack.push(d);
  }

  pop() {
    this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }

  peak() {
    return this.stack[this.stack.length - 1];
  }

  clear() {
    return (this.stack = []);
  }

  reverse() {
    return this.stack.reverse();
  }

  contains(d) {
    return this.stack.includes(d);
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.contains(4));
console.log(myStack.printStack());
console.log(`Stack peak is ${myStack.peak()}`);
console.log(`Stack size is ${myStack.size()}`);
myStack.pop();
console.log("After Pop");
myStack.reverse();
console.log(myStack.printStack());
myStack.clear();
myStack.isEmpty();
console.log(`Stack size is ${myStack.size()}`);

/*///// Question To Prepair for Stack /////
1. Create stack and add a value in stack?
2. Remove Value from stack
3. Check if stack is empty or not
4. Check size of stack
5. Print the stack 
6. Find Peak value of stack
7. Clear Stack
8. Reverse stack
9. Check if stack contain the perticular value.

*/
