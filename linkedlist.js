"use strict";
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
class LinkedList {
	constructor() {
		this.head = null;
		this.count = 0;
	}
	insert(data) {
		if (this.head == null) {
			this.count++;
			return (this.head = new Node(data));
		}
		let temp = this.head;
		this.head = new Node(data);
		this.head.next = temp;
		this.count++;
	}
	insertAt(index, value) {
		let currentNode = this.head;
		if (index == 0) {
			let newNode = new Node(value);
			newNode.next = currentNode;
			this.head = newNode;
		} else {
			let i = 0;
			let previousNode = currentNode;
			while (currentNode && i < index) {
				previousNode = currentNode;
				currentNode = currentNode.next;
				i++;
			}

			let newNode = new Node(value);
			newNode.next = currentNode;
			previousNode.next = newNode;
		}
		this.count++;
	}
	remove(value) {
		let currentNode = this.head;
		if (currentNode.data == value) {
			this.head = currentNode.next;
		} else {
			let previousNode = currentNode;
			while (currentNode.data !== value) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		this.count--;
	}
	getHead() {
		return this.head.data;
	}
	length() {
		return this.count;
	}
	removeAt(index) {
		let currentNode = this.head;
		if (index >= this.count) {
			return;
		}
		if (index == 0) {
			return this.remove(this.head.data);
		}

		// let previousNode = currentNode;
		let i = 0;
		while (currentNode.next && i < index) {
			currentNode = currentNode.next;
			i++;
		}
		this.remove(currentNode.data);
		this.count--;
	}
	toString() {
		// let str = `${this.head.data}`;
		let str = "";
		let currentNode = this.head;
		// let previousNode = currentNode;
		while (currentNode.next) {
			str += currentNode.data;
			currentNode = currentNode.next;
		}
		return (str += currentNode.data);
	}
	reverse() {
		let currentNode = this.head,
			temp,
			previousNode;
		while (currentNode) {
			temp = currentNode.next;
			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = temp;
		}

		this.head = previousNode;
	}
	indexOf(value) {
		let index = 0;
		if (value == this.head.data) {
			return index;
		}
		let currentNode = this.head;
		// let previousNode = currentNode
		while (currentNode) {
			if (currentNode.data == value) {
				return index;
			}
			currentNode = currentNode.next;
			index++;
		}
	}
	isEmpty() {
		return this.count === 0;
	}
}

let linkedList = new LinkedList();
linkedList.insert(9);
linkedList.insert(8);
linkedList.insert(2);
linkedList.insert(0);
linkedList.insertAt(4, 10); //index,value
// linkedList.remove(0);
// linkedList.delete(2);
// linkedList.removeAt(4);
// linkedList.reverse();
// console.log(JSON.stringify(linkedList.head, undefined, 2));
console.log(JSON.stringify(linkedList.head, undefined, 2));
console.log(linkedList.getHead());
console.log(linkedList.length());
console.log(linkedList.toString());
console.log(linkedList.isEmpty());

exports.LinkedList = LinkedList;
