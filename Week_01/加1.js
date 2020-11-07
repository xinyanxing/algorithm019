/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length
    for (let i = len - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10
        if (digits[i]) { return digits }
    }
    return [1].concat(digits)

};