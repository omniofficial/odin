/* Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values. */

function groupById(arr) {
    const result = {}; // empty object to hold grouped data

    for (let user of arr) {
        result[user.id] = user; // result["john"] = { id: "john", name: "John Smith", age: 20 };
    }
    return result;
}

let users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);
