function fibonacci(num) {
    if (num <= 0) {
        return "Invalid input";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    let fib1 = 0;
    let fib2 = 1;
    for (let i = 2; i < num; i++) {
        let fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    }

    return fib2;
}

module.exports = fibonacci;