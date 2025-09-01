function additionFunction(a, b) {
    return a + b;
}

let num1 = 1;
let num2 = 2;
let result = additionFunction(num1, num2);
console.log(result);

// OR WITH AN ARROW FUNCTION:

let num3 = 7;
let num4 = 3;

let add = (a, b) => a + b;
let arrowResult = add(num3, num4);
console.log(arrowResult);
