function showMessage() {
    let message = "Hello, my name is Adrian!";
    console.log(message);
}

showMessage();

function greetingMessage(x, y) {
    x = "Yaya";
    console.log("Hello " + x + "! It is nice to meet you this " + y);
}
let name = "AAdrian";
let day = "Thursday";
console.log(name);

function sum(a, b) {
    let result = a + b;
    return result;
}
outcome = sum(1, 2);
console.log(outcome);

function findMinimum(x, y) {
    let minimum = 0;
    if (x < y) {
        minimum = x;
    } else {
        minimum = y;
    }
    console.log("The minimum between " + x + " and " + y + " is: " + minimum);
}
findMinimum(2, 5);
findMinimum(3, -1);
findMinimum(1, 1);
