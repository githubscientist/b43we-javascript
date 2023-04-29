class Data {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    print() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.item);
            thead = thead.next;
        }

        console.log(nodes);
    }

    push(item) {
        if (this.head == null) {
            this.head = new Data(item);
        } else {
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = new Data(item);
        }
    }

    forEach(func) {
        let index = 0;
        let array = [];

        let thead = this.head;
        while (thead != null) {
            array.push(thead.item);
            thead = thead.next;
        }

        thead = this.head;
        while (thead != null) {
            func(thead.item, index++, array);
            thead = thead.next;
        }
    }
}

module.exports = Array;