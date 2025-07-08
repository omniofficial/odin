// Sort array in decreasing order

function sortDecreasing(arr) {
    let output = arr.sort((a, b) => b - a);
    return output;
}

let arr = [5, 2, 1, -10, 8];
let decreasingArray = sortDecreasing(arr);
console.log(decreasingArray);
