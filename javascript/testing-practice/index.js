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

function isUpperCase(char) {
    return char === char.toUpperCase() && char !== char.toLowerCase(); // True or False
}

function isPunctuation(char) {
    return !/[a-z]/i.test(char); // True or False
}

function caesarCipher(string, shiftFactor) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipherString = "";

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        let isUpper = isUpperCase(currentChar);

        if (isPunctuation(currentChar)) {
            cipherString += currentChar;
        } else {
            // Convert character to lowercase
            currentChar = currentChar.toLowerCase();

            // Find index of the current char in alphabet
            let index = alphabet.indexOf(currentChar);

            // Shift the index and use modulo 26 to wrap around the alphabet if needed.
            let shiftedIndex = (index + shiftFactor) % 26;

            // Find alphabet character given index
            let shiftedChar = alphabet[shiftedIndex];

            // Convert shifted character to uppercase if original was uppercase
            if (isUpper) {
                shiftedChar = shiftedChar.toUpperCase();
            }
            // Append shiftedChar to cipherString
            cipherString += shiftedChar;
        }
    }

    return cipherString;
}

function getAverage(numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    let average = total / numbers.length;
    return average;
}

function getMininum(numbers) {
    return min;
}

function getMaximum(numbers) {
    return max;
}

function getLength(numbers) {
    return numbers.length;
}

function analyzeArray(numbers) {
    const array = {
        average: getAverage(numbers),
        min: getMininum(numbers),
        max: getMaximum(numbers),
        length: getLength(numbers),
    };

    return array;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
