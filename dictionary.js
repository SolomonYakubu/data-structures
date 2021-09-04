class ValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

class Dictionary {
	constructor() {
		this.store = [];
	}
	set(key, value) {
		if (key == null || value == null) {
			return;
		}
		this.store.push(new ValuePair(key, value));
	}
	remove(key) {
		if (key == null) {
			return;
		}
		this.store = this.store.filter((item) => item.key != key);
	}
	hasKey(key) {
		return this.store.map((item) => item.key == key)[0];
	}
	get(key) {
		try {
			const value = this.store.filter((item) => item.key == key);
			return value[0].value;
		} catch (error) {
			return error.message;
		}
	}
	clear() {
		this.store = [];
	}
	size() {
		return this.store.length;
	}
	isEmpty() {
		return this.store.length === 0;
	}
	keys() {
		try {
			return this.store.map((item) => item.key);
		} catch (error) {
			return error.message;
		}
	}
	values() {
		try {
			return this.store.map((item) => item.value);
		} catch (error) {
			return error.message;
		}
	}
	keyValues() {
		return this.store;
	}
}

let dictionary = new Dictionary();

dictionary.set("name", "angel");
dictionary.set("age", "23");
// dictionary.remove("age");
// dictionary.remove("name");
console.log(dictionary.get("name"));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());
