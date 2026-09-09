/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x >= 0? 1:-1;

    let xString = String(x);
    let reverseString = "";

    for(let i = 0; i < xString.length; i++){
        reverseString = xString[i] + reverseString;
    }

    const xReverse = parseInt(reverseString);

    let limit1 = -2147483648;
    let limit2 = 2147483647;

    return (xReverse < limit1 || xReverse > limit2)? 0 : sign * xReverse;
};