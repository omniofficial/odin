function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let reversedString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        let character = string[i];
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

function caesarCipher(string, shiftFactor) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipherString = "";

    for (let i = 0; i < string.length; i++) {
        // Get current letter position
        let currentChar = string[i];

        // Find index of the current char in alphabet
        let index = alphabet.indexOf(currentChar);

        // Shift the index and use modulo 26 to wrap around the alphabet if needed.
        let shiftedIndex = (index + shiftFactor) % 26;

        // Find alphabet character given index
        let shiftedChar = alphabet[shiftedIndex];

        // Append shiftedChar to cipherString
        cipherString += shiftedChar;
    }

    return cipherString;
}

export { capitalize, reverseString, calculator, caesarCipher };
