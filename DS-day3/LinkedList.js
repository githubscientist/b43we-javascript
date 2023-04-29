/*
    Linked List - datastructure & abstract data type

    Array Vs Linked List

    let numbers = [1, 2, 3, 4, 5];
                  [0][1][2][3][4]
                500 508 516 524 632
    - memory access - array: contiguous, linkedList: non-contiguous
    - random access; linked list: linear access
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    print() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        console.log(nodes);
    }

    push(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            // list is empty
            this.head = newNode;
        } else {
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    pop() {
        // pops an element from the end of the linked list
        // this.head
        let thead = this.head;
        if (this.head != null) {
            if (this.head.next == null) {
                this.head = null;
            } else {
                while (thead.next.next != null) {
                    thead = thead.next;
                }

                thead.next = null;
            }
        }
    }

    unshift(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    shift() {
        if (this.head != null) {
            // if the list is not empty
            if (this.head.next == null) {
                // if the list has only one node
                this.head = null;
            } else {
                // the list has more elements
                this.head = this.head.next;
            }
        }
    }
}

let list = new LinkedList();

// list.head = new Node(3);
// list.head.next = new Node(5);
// list.head.next.next = new Node(7);
list.push(3);
list.push(5);
list.push(7);
list.push(10);
list.pop();
list.unshift(10);
list.unshift(11);
list.shift();

list.print();

/*
    list -> LinkedList Object

    list = LinkedList {
        head: Node {
            data: 10,
            next: Node {
                data: 3, 
                next: Node {
                    data: 5,
                    next: Node {
                        data: 7,
                        next: null
                    }
                }
            }
        }
    }

    newNode = Node {
            data: 3, 
            next: Node {
                data: 5,
                next: Node {
                    data: 7,
                    next: null
                }
            }
        }

    list = LinkedList {
        head: null
    }
*/