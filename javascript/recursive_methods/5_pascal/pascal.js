const pascal = function (n) {
    if (n === 0) {
        return [1];
    }

    const previousRow = pascal(n - 1);
    const currentRow = [1];

    for (let i = 1; i < previousRow.length; i++) {
        currentRow.push(previousRow[i - 1] + previousRow[i]);
    }
    currentRow.push(1); // push 1 at end
    return currentRow;
};

export { pascal };

// EX:   1 3 3 1
// BEC: 1 4 6 5 1

// INPUT: pascal(3)
// in pascal(3). call pascal (3-1), pending
// in pascal(2). call pascal (2-1), pending
// in pascal(1). call pascal (1-1), pending
// in pascal(0), return 1.

// then, in pascal(1), go thru logic. Return the current row of pascal(1) TO pascal(2).
console.log(pascal(3));
