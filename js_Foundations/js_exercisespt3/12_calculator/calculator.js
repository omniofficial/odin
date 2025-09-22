const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return b - a;
};

const sum = function (array) {
    for (element of array) {
        total += element;
    }
    return total;
};

const multiply = function (array) {
    for (element of array) {
        total *= element;
    }
    return total;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (n) {
    let product = 1;
    for (let i = n; i > 0; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
