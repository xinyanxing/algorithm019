/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// var ladderLength = function(beginWord, endWord, wordList) {
//     const wordSet=new Set(wordList)
//     const queue=[]
//     queue.push([beginWord,1])
//     while(queue.length){
//          const [word,level]=queue.shift()
//          if(word===endWord){return level} //终止条件

//          for(let i=0;i<word.length;i++){ //遍历单词所有的字符
//               for(let c=97;c<=122;c++){
//                   const newWord=word.slice(0,i)+String.fromCharCode(c)+word.slice(i+1) //生成新词
//                   if(wordSet.has(newWord)){ //单词表里有这个词
//                        queue.push([newWord,level+1]) //作为下一层的词
//                        wordSet.delete(newWord)//删掉已存在的词,避免重复遍历
//                   }
//               }
//          }
//     }
//     return 0
// };

//优化后
var ladderLength = function (beginWord, endWord, wordList) {
    const isDiff1 = (w1, w2) => {
        let res = 0;
        for (let i = 0; i < w1.length; i++) {
            if (w1[i] != w2[i]) res += 1;
        }
        if (res === 1) return true;
        return false;
    }
    if (wordList.indexOf(endWord) === -1) return 0;
    var queue = [[beginWord, 1]]; //注意这里是二维数组
    while (queue.length) {
        var [curWord, k] = queue.shift();
        for (let i = 0; i < wordList.length;) { //遍历单词所有的字符
            var word = wordList[i];
            if (!isDiff1(word, curWord)) {
                i++;
                continue;
            };
            if (word === endWord) return k + 1;
            //删除元素
            wordList.splice(i, 1);
            queue.push([word, k + 1])
        }

    };
    return false
}






