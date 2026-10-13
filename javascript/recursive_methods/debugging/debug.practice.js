function calculateTotal(numbers) {
    let total = 0;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i];
        console.log("i:", i, "current:", current);
        if (current > 5) {
            total += current;
            count++;
        } else {
            total -= 1;
        }
    }

    let average = total / count;
    return { total, count, average };
}

const numbers = [2, 8, 4, 10, 6];
const result = calculateTotal(numbers);

console.log(result);
