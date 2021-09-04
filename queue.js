class Queue {

    constructor() {
        this.store = {};
        this.count = 0;
        this.lowestCount = 0;
    }
 
    enqueue(value) {
        this.store[this.count] = value;
        this.count++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        let val = this.store[this.lowestCount];
        delete this.store[this.lowestCount++];
        return val;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.store = {};
        this.count = 0;
        this.lowestCount = 0;
        return;
    }
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let str = "";
        for (let i = this.lowestCount; i < this.count; i++) {
            str += this.store[i];
        }
        return str;
    }
}
const queue = new Queue();
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(2);
console.log(typeof queue.toString());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.clear();
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.log(queue.store);
