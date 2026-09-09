/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let f = [0,1];
    let sum = 0;
    for (let i = 1; i < n + 1; i++) {
        f[i + 1] = f[i] + f[i - 1];
    }
    return f[n + 1];
};