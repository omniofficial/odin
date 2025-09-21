// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];


// For each item in users list (where each item is an object like john, pete and mary), we grab the item.name from each object and store it into a new array 'names'. modificationRule is what I want returned for each element. 

// newArray = originalArray.map(element => modificationRule);
let names = users.map((item) => item.name);

console.log(names); // John, Pete, Mary
