/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let nBin = (n).toString(2);

    let sum = 0;

    for (let i = 0; i < nBin.length; i++) {
        sum += nBin[i] === '1'? 1:0
    }

    return sum;
};