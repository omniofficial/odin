function add7(additionNumber) {
    outcome = additionNumber + 7;
    return outcome;
}

let additionNumber = 3;
result = add7(additionNumber);
console.log(result);

function multiply(x, y) {
    product = x * y;
    return product;
}

let num1 = 2;
let num2 = 4;
result = multiply(num1, num2);
console.log(result);

function capitalize(input) {
    capitalizedInput = input[0].toUpperCase() + input.slice(1);
    return capitalizedInput;
}

let str = "awesomesauce";
outcome = capitalize(str);
console.log(outcome);

function lastLetter(input) {
    let lastCharacter = input[input.length - 1];
    return lastCharacter;
}

let str2 = "Thanos";
outcome = lastLetter(str2);
console.log(outcome);

