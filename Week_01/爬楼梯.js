/**
 * @param {number} n
 * @return {number}
 * 分析:
 *   假如 要想上到第三个台阶
          要么从 第一个台阶往上迈1步 迈三次
          要么从 第一个台阶往上迈2步 迈一次
          要么从 第二个台阶往上迈1步 迈一次
 * 故
 *  假设 n 为要上的楼梯台阶数
 *      到n台阶的所有方法=(到n台阶的所有方法-1个台阶)+(到n个台阶所有的方法-2个台阶)
 *  推测出 
 *   f(n)=f(n-1)+f(n-2) 属于fibonacci 数列
 */

var climbStairs = function (n) {
    if (n === 1 || n === 0) {
        return n
    }
    let first = 1;
    let seconed = 2;
    let thired = 3
    for (let i = 3; i <= n; i++) {
        first = seconed;
        seconed = thired;
        thired = first + seconed
    }
    return seconed

};
climbStairs(2)