/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (1 <= s.length && s.length <= 10**4) {
        let result = 0;
        let lastWord = false;

        for (let i = s.length - 1; i >= 0; i--) {
            
            if (s[i] === ' ' && lastWord === true) {
                return result;
            }
            else if (s[i] !== ' ') {
                result += 1;
                lastWord = true;
            }
        }

        return result;
    }
    else {
        return -1;
    }
};