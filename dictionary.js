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
		const value = this.store.filter((item) => item.key == key);
		return value[0].value;
	}
	clear() {
		this.store = [];
	}
}

let dictionary = new Dictionary();

dictionary.set("name", "angel");
dictionary.set("age", "23");
dictionary.remove("age");
console.log(dictionary.get("name"));
console.log(dictionary.store.map((item) => item.value));
