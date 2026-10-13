// Write a function that takes in an arbitrarily deep array or object and returns the total number of integers stored inside this array or object.

function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}

const totalIntegers = function (input) {
    if (!Array.isArray(input) && !isObject(input)) {
        return undefined;
    }
    let count = 0;
    const values = Array.isArray(input) ? input : Object.values(input);

    for (let i = 0; i < values.length; i++) {
        if (Number.isInteger(values[i])) {
            count = count + 1;
        } else if (Array.isArray(values[i]) || isObject(values[i])) {
            count = count + totalIntegers(values[i]);
        }
    }

    return count;
};

export { totalIntegers };
