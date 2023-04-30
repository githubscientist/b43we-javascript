class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
    }

    insertTail(data) {
        // create a new node
        let newNode = new Node(data);
        
        // check whether the list is empty
        if (this.head == null) {
            // make the newNode as the headnode
            this.head = newNode;

            newNode.next = this.head;
        } else {
            // list has more than one element
            let thead = this.head;

            while (thead.next != this.head) {
                thead = thead.next;
            }

            // insert the newNode as the next node of the thead
            // thead is the tailNode
            thead.next = newNode;

            newNode.next = this.head;
        }
    }

    insertHead(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            this.head = newNode;

            newNode.next = this.head;
        } else {
            let thead = this.head;

            do {
                thead = thead.next;
            } while (thead.next != this.head);

            newNode.next = this.head;
            this.head = newNode;
            // update next of the tail node
            thead.next = this.head;

        }
    }

    toString() {
        let nodes = [];
        let thead = this.head;

        do {
            nodes.push(thead.data);
            thead = thead.next;
        } while (thead != this.head);

        return nodes;
    }

    print(times) {
        let thead = this.head;
        let nodes = [];
        while (times > 0) {
            // do something here
            // print every node from the linked list -> circular list
            nodes.push(thead.data);
            thead = thead.next;
            times--;
        }
        console.log(nodes);
    }
}

let clist = new CircularList();

clist.insertTail(3);
clist.insertTail(5);
clist.insertTail(7);
clist.insertTail(8);
clist.insertHead(2);
clist.insertHead(1);
clist.insertTail(1);
clist.insertTail(1);

console.log(clist.toString());
// clist.print(15);

/*
    this.head = [null, 3, this.head]
*/