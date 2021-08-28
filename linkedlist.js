class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(data) {
    if (this.head == null) {
      return (this.head = new Node(data));
    }
    let temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;
    this.size++;
  }
  remove(value) {
    let currentNode = this.head;
    if (currentNode.data == value) {
      this.head = currentNode.next;
      this.size--;
      return;
    }
    let previousNode = currentNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode.data == value) {
        previousNode.next = currentNode.next;
        this.size--;
      }
    }
  }
}

let linkedList = new LinkedList();
linkedList.insert(9);
linkedList.insert(8);
linkedList.insert(2);
linkedList.insert(0);
linkedList.remove(0);
console.log(linkedList.head);
