/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let numSqrt = Math.sqrt(num)

    let limit1 = Math.floor(numSqrt)
    let limit2 = Math.ceil(numSqrt)

    if(numSqrt > limit1 && numSqrt < limit2) {
        return false;
    }
    else{
        return true;
    }
};