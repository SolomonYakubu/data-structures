class Stack {
    constructor() {
        this.store = [];
    }

    push(value) {
        return this.store.push(value);
    }
    pop() {
        return this.store.length == 0 ? null : this.store.pop();
    }
    peak() {
        return this.store.lenght == 0 ? null : this.store[this.store.length - 1];
    }
    isEmpty() {
        return this.store.length == 0 ? true : false;
    }
    empty() {
        return (this.store = []);
    }
}
let myStack = new Stack();
myStack.push(2);
myStack.push(1);
myStack.push(4);
myStack.pop();
myStack.peak();
myStack.isEmpty();
// myStack.empty();
myStack.isEmpty();
console.log(myStack.store);
