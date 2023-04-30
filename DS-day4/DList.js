// Doubly Linked List
class Node {
    constructor(data) {
        this.previous = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            // list is empty
            // newNode is the head node
            this.head = newNode;
        } else {
            // the current head node
            this.head.previous = newNode;

            // this.head is pointing to the current list
            // newNode.next as the this.head
            newNode.next = this.head;

            // change the head
            this.head = newNode;

        }
    }

    insertTail(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            // traverse to the tail node
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }

            // thead is pointing to the tail node or last node of the list
            // insert the newNode to the next of tail node
            newNode.previous = thead;
            thead.next = newNode;
        }
    }

    deleteHead() {
        // if the list is empty, do not allow the deletion
        if (this.head != null) {
            // check if the list has only one node
            if (this.head.next == null) {
                // set the head to null
                this.head = null;
            } else {
                // move the existing head to point to the next node
                this.head = this.head.next;

                // previous pointer will still point to the previous node
                this.head.previous = null;
            }
        }
    }

    deleteTail() {
        if (this.head != null) {
            if (this.head.next == null) {
                this.head = null;
            } else {
                let thead = this.head;
                while (thead.next.next != null) {
                    thead = thead.next;
                }
                thead.next = null;
            }
        }
    }

    toString() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    toReverse() {
        let nodes = [];
        let thead = this.head;
        while (thead.next != null) {
            // nodes.push(thead.data);
            thead = thead.next;
        }
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.previous;
        }
        return nodes;
    }
}

let dlist = new DoubleList();

dlist.insertHead(6);
dlist.insertHead(5);
dlist.insertHead(4);
dlist.insertTail(7);
dlist.deleteHead();
dlist.deleteTail();

console.log('List:',dlist.toString());
console.log('Reverse:', dlist.toReverse());

/*
    data = 5

    assume that the list is empty:
        this.head = null
    
    newNode = {
        previous: null,
        data: 5,
        next: null
    }

    this.head = newNode

    this.head = {
        previous: null,
        data: 5,
        next: null
    }

    Insert the second node to the list:

    data = 6

    this.head = {
        previous: null,
        data: 6,
        next: {
            previous: {
                previous: null,
                data: 6,
                next: null
            },
            data: 5,
            next: null
        }
    }

   prev: null 6 next: 5 previous = 6, next: null

*/