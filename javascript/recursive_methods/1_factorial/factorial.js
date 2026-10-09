function checkIsInteger(n) {
    if (n % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

function checkIsNonNegative(n) {
    if (n >= 0) {
        return true;
    } else {
        return false;
    }
}

const factorial = function (n) {
    const isInteger = checkIsInteger(n);
    const isNonNegative = checkIsNonNegative(n);
    if (isNonNegative && isInteger) {
        // If n = 0, then factorial 0 should evaluate to 1. So return 1.
        if (n === 0) {
            return 1;
        }

        return n * factorial(n - 1);
    }
};

export { factorial };

// PSUEDOCODE
// factorial(4)
// return 4 * factorial(3)

// factorial(3)
// return 3 * factorial(2)

// factorial(2)
// return 2 * factorial(1)

// factorial(1)
// return 1 * factorial(0)

// factorial(0)
// return 1?
