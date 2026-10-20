function mergeSort(array) {
    if (array.length == 1) {
        return array; // return the single element
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    let leftArr = mergeSort(left);
    let rightArr = mergeSort(right);

    // Initialization
    let sorted = [];
    let leftover = [];
    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        // Compare left[i] and right[j]
        if (leftArr[i] < rightArr[j]) {
            sorted.push(leftArr[i]);
            if (i + 1 < leftArr.length) {
                i++; // Within range, so increment i++
            } else {
                // Save the rest of the elements in the other array to later append
                leftover = rightArr.slice(j);

                i++; // Trigger to end the loop
            }
        } else if (rightArr[j] < leftArr[i]) {
            sorted.push(rightArr[j]);

            if (j + 1 < rightArr.length) {
                j++; // Within range, so increment.
            } else {
                leftover = leftArr.slice(i);
                j++;
            }
        }
    }

    // Get remaining leftover elements of either array, if the while loop condition ends.
    sorted.push(...leftover);
    return sorted;
}

export { mergeSort };

console.log(mergeSort([5, 2, 1, 3, 6, 4]));
