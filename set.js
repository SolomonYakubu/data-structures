// const checkDuplicate = (store, value) => {};
"use strict";
class MySet {
	constructor(...value) {
		this.store = [];
		for (let i = 0; i < value.length; i++) {
			if (this.store.includes(value[i])) {
				value.splice(i, 1);
				i--;
			} else this.store.push(value[i]);
		}
	}
	add(value) {
		if (this.store.includes(value)) {
			return;
		}
		this.store.push(value);
	}
	remove(value) {
		for (let i = 0; i < this.store.length; i++) {
			if (this.store[i] == value) {
				this.store.splice(i, 1);
				return;
			}
		}
	}
	has(value) {
		return this.store.includes(value);
	}
	clear() {
		this.store = [];
	}
	size() {
		return this.store.length;
	}
	value() {
		return this.store;
	}
}
let arr = [1, 1, 2, 2, 3, 3, 4, 1, 5, 6];
const set = new MySet(...arr);

set.add(9);
set.remove(3);
set.clear();
console.log(set.value());
console.log(set.has(3));
