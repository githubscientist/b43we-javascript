function ListNode(val) {
    this.val = val;
}

ListNode.prototype.toString = function () {
    return 'node';
}

let node = new ListNode(4);

console.log(node);