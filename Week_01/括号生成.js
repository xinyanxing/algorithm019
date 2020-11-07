/**
 * @param {number} n
 * @return {string[]}
 * 
 */
var generateParenthesis = function (n) {
    let resultArray = [];
    let generateParent = (left, right, max, str) => {
        if (left === max && right === max) {
            resultArray.push(str)
            return
        }

        if (left < max) {
            generateParent(left + 1, right, max, str + '(')
        }
        if (left > right) {
            generateParent(left, right + 1, max, str + ')')
        }

    }
    generateParent(0, 0, n, '')
    return resultArray

};