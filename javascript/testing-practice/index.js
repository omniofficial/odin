function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let reversedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        character = string[i];
        reversedString += character;
    }

    return reversedString;
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
};

export { capitalize, reverseString, calculator };
