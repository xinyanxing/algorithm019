/**
 * @param {string} s
 * @return {string}
 */
//原生
// var replaceSpace = function(s) {
//     if(s === '%20' ){return s;}
//     return encodeURI(s)
// };
//正则替换
// var replaceSpace = function(s) {
//     if(s.length===0){return }

//    return  s.replace(/ /g,'%20')
// };

//双指针法
var replaceSpace = function (s) {
    if (!s || !s.length) { return "" }
    let emptyNum = 0;//空字符的个数
    let chNum = 0; //有效字符的个数
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            ++emptyNum
        } else {
            ++chNum
        }
    }
    const length = emptyNum * 2 + chNum; //计算替换后的新长度
    const chs = new Array(length)
    console.log('chs')
    console.log(chs)
    //i 是新字符串的下标 //j 是原字符串下标
    for (let i = 0, j = 0; j < s.length; ++j) {
        if (s[j] === ' ') {
            chs[i++] = "%"
            chs[i++] = "2"
            chs[i++] = "0"
        } else {
            chs[i++] = s[j]
        }

    }
    return chs.join("")
};