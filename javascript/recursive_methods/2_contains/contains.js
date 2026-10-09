// Write a function that searches for a value in a nested object. It returns true if the object contains that value.

const contains = function (object, value) {
    // Base case: found the target
    if (object === value) {
        return true;
    }

    // Base case: nothing more to search
    if (object === null || typeof object !== "object") {
        return false;
    }

    // Recursive case: search each value
    for (let subObject of Object.values(object)) {
        if (contains(subObject, value)) {
            return true;
        }
    }

    // Nothing matched
    return false;
};

export { contains };

// Take in object and value paramater

// data