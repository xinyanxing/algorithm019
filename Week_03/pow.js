/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//分治
// 1.terminator  退出条件
// 2. process(plit your big problem)  //过程,分解为子问题
// 3. dirll down (subproblmes) + merge(subsult)  //下层
// 4. reverse states  //返回结果
var myPow = function (x, n) {
    if (n === 0) { return 1 }
    if (n < 0) {
        return 1 / myPow(x, -n)
    }
    if (n % 2) {
        return x * myPow(x, n - 1)
    }
    return myPow(x * x, n / 2)
};