/*
    Stack is a Data Structure - ADT

    Stack follows First In Last Out (FILO) OR Last In First Out (LIFO)

    Operations:

    1. Push - Pushes the element into the top of the stack
    2. Pop - Removes the element from the top of the stack
    3. Tos - returns the topmost element from the stack
    4. isEmpty - return true if the stack is empty false otherwise

    5. overflow - occurs when we try to push an element into the already full stack
    6. underflow - occurs when we try to pop an element from the already empty stack

    Applications:

    - Backtracking
    - Undo/Redo functionality
    - Parsing
    - Expression Evaluations
*/

// Array Implementation of Stack

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    tos() {
        return this.items[this.top];
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    isEmpty() {
        return this.top == -1;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(6);
stack.push(7);
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.isEmpty());