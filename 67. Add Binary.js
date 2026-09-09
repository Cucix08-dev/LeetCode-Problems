/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const aInt = i >= 0 ? parseInt(a[i]) : 0;
        const bInt = j >= 0 ? parseInt(b[j]) : 0;

        const sum = aInt + bInt + carry;

        const bit = sum % 2;
        carry = Math.floor(sum / 2);

        result = bit + result;

        i--;
        j--;
    }

    return result;
};
