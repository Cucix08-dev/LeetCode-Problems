/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let first = 0;
    let second = 1;
    let third;

    if (n === 0) return 0;
    if (n === 1) return 1;

    for (let i = 1; i < n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
};