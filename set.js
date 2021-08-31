// const checkDuplicate = (store, value) => {};
"use strict";
const checkDuplicateAndMakeSet = (store, value) => {
	for (let i = 0; i < value.length; i++) {
		if (store.includes(value[i])) {
			value.splice(i, 1);
			i--;
		} else store.push(value[i]);
	}
};
class MySet {
	constructor(...value) {
		this.store = [];
		checkDuplicateAndMakeSet(this.store, value);
	}
	add(value) {
		if (this.store.includes(value) || value == null) {
			return;
		}
		this.store.push(value);
	}
	delete(value) {
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
	union(set) {
		const unionSet = new MySet(...this.store, ...set.store);
		return unionSet;
	}
	intercept(set) {
		let interceptSet = new MySet();
		for (let i = 0; i < this.store.length; i++) {
			if (set.has(this.store[i])) {
				interceptSet.add(this.store[i]);
			}
		}
		return interceptSet;
	}
	difference(set) {
		let differenceSet = new MySet();
		for (let i = 0; i < this.store.length; i++) {
			if (!set.has(this.store[i])) {
				differenceSet.add(this.store[i]);
			}
		}
		return differenceSet;
	}
	isSubsetOf(set) {
		if (this.store.length > set.size()) {
			return false;
		}
		for (let i = 0; i < this.store.length; i++) {
			if (!set.has(this.store[i])) {
				return false;
			}
		}

		return true;
	}
}
let arr = [1, 1, 2, 2, 3, 3, 4, 1, 5, 6];
const set = new MySet(...arr);
const newSet = new MySet(12, 23, 45, 1, 2, 3, 4, 5, 6);
set.add(9);
// set.delete(3);
newSet.add(9);
console.log(set.isSubsetOf(newSet));
console.log(set.value());
console.log(set.has(3));
