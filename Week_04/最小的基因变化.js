/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 * 
 */
//start:起始基因序列
//end:目标基因序列
//bank:基因库
//广度优先
var minMutation = function (start, end, bank) {
    let count = 0;
    let queue = [start]
    let visited = new Set()

    while (queue.length) {
        let queuelength = queue.length
        //对每一个字段进行遍历
        while (--queuelength >= 0) {
            const str = queue.shift();  //将数组中删除第一个元素， pop 删除数组最后一个元素
            for (let i = 0; i < bank.length; i++) { //循环基因库中的序列
                if (visited.has(bank[i])) {  //如果基因库中存在该序列
                    continue;
                }
                let diff = 0;
                for (let j = 0; j < bank[i].length; j++) { //循环基因库里的字符串
                    if (str[j] !== bank[i][j]) { //如果star 队列里的字母不等于 bank 里的字母 diff++
                        diff++;
                        if (diff > 1) {  //题目要求一次基因变化意味着这个基因序列中的一个字符发生了变化。所以变化了2次要终止
                            break
                        }
                    }
                }

                if (diff === 1) {
                    if (bank[i] === end) {
                        return count + 1
                    }
                    visited.add(bank[i]);
                    queue.push(bank[i])
                }

            }
        }
        count++;  //每一层遍历完成后+1

    }
    return -1

};






















