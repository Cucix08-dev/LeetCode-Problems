/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    if (n > 0){
        return x**n;
    }

    else if (n === 0){

        if (x > 0){
            return 1;
        }

        else if (x < 0){
            return Math.abs(x)
        }

        else {
            return undefined;
        }
    }
    
    else {
        return 1/(x**Math.abs(n));
    }
    
};