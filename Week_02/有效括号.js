/**
 * @param {string} s
 * @return {boolean}
 * 分析
 * 栈方法
 * 有效括号 属于洋葱模型 所以可以考虑使用 栈
 * 维护一个栈 如果栈里是空的 入栈
 * 循环访问数组里的括号符号,和栈顶的元素比较,如果能够成对出栈
 */
var isValid = function (s) {
    let stack = [];
    let m = new Map();
    m.set('(', ')')
    m.set('{', '}')
    m.set('[', ']')
    for (let i = 0; i < s.length; i++) {
        let cur = s[i] //当前字符串
        if (m.has(cur)) {
            stack.push(cur)
        } else {
            const stackTop = stack[stack.length - 1];
            if (m.get(stackTop) === s[i]) {
                stack.pop()
            } else { return false }
        }
    }
    return stack.length === 0
}
