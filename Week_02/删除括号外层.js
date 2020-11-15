/**
 * @param {string} S
 * @return {string}
 * 分析  输入 (()())
 *  因为是有效口号所以正负最后一定可以抵消
 * 1: res=         opened=1;
 * 2: res=(        opened=2;
 * 3: res=()       opened=1;
 * 4: res=()(      opened=2;
 * 5: res=()()     opened=1;
 * 6: res=()()     opened=0
 */
var removeOuterParentheses = function (S) {
    let res = "" //结果集合
    let opened = 0  //用来标记括号次数
    for (let i of S) {
        if (i === "(" && opened++ > 0) { res += i };
        if (i === ")" && opened-- > 1) { res += i };
    }
    return res

};