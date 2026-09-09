/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x);

    const FOR_RANGE = (x % 2 == 0)? Math.floor(x.length / 2) : Math.floor(x.length / 2)  + 1

    for (let i = 0; i < FOR_RANGE; i++){
        if(x[i] != x[x.length - i - 1]){
            return false;
        }
    }

    return true;
};