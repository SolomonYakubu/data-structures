const { LinkedList } = require("./linkedlist");

let str = "racecar2";
let linkedList = new LinkedList();
for (let i = 0; i < str.length; i++) {
	linkedList.insert(str[i]);
}
console.log(linkedList.toString());
//create a function to find even numbers

