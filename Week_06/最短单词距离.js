/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
    let p1 = p2 = -1  //因为循环索引最小是0
    let result = Number.MAX_SAFE_INTEGER
    let len = words.length
    for (let i = 0; i < len; i++) {
        let cur = words[i]
        //移动指针
        if (cur === word1) {
            p1 = i
        } else if (cur === word2) {
            p2 = i
        }
        //记录最小距离
        if (p1 !== -1 && p2 !== -1) {
            result = Math.min(result, Math.abs(p2 - p1))
        }

    }
    return result
};