function countDown(n) {
    for (let i = 0; i > 0; i--) {
        console.log(i);
    }
    console.log("Horray");
}

function countDownRecursive(n) {
    if (n <= 0) {
        console.log("Horray");
        return;
    }
    console.log(n);
    countDownRecursive(n - 1);
}

