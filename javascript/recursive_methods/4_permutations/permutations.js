const permutations = function (array) {
    // Base case
    if (array.length <= 1) {
        return [array];
    }

    let permutedArray = [];

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let remaining = [];

        // Get every element except current
        for (let j = 0; j < array.length; j++) {
            if (j !== i) {
                remaining.push(array[j]);
            }
        }

        // Find permutations of the remaining elements
        let results = permutations(remaining);

        // Add current to the beginning of every result
        for (let j = 0; j < results.length; j++) {
            let permutation = results[j];
            let newPermutation = [current];

            for (let k = 0; k < permutation.length; k++) {
                newPermutation.push(permutation[k]);
            }

            permutedArray.push(newPermutation);
        }
    }

    return permutedArray;
};

export { permutations };

// Take in [1,2]
// Return: [   [1,2]   [2,1]   ]
