function fibs(num) {
    if (num == 1) {
        return 0;
    }

    if (num == 2) {
        return [0, 1];
    } else {
        let array = fibs(num - 1);

        const last = array[array.length - 1];
        const secondLast = array[array.length - 2];

        const next = last + secondLast;
        array.push(next);
        return array;
    }
}

console.log(fibs(8));

export { fibs };
