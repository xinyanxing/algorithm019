/**
 * @param {number} n
 * @return {string[]}
 */
//自己想的
// var fizzBuzz = function(n) {
//     let resultArray=[] //结果搜集数组
//     for(let i=1;i<n+1;i++){
//         let curStr=`${i}`
//          if(i%3===0){
//              curStr='Fizz'
//          }
//          if(i%5===0){
//              curStr='Buzz'
//          }
//         if(i%3===0&&i%5===0){
//               curStr='FizzBuzz'
//          }
//      resultArray.push(curStr)
//     }
//     return resultArray
// };
//
//简洁版
// var fizzBuzz = function(n) {
//     let resultArray=[] //结果搜集数组
//     for(let i=1;i<n+1;i++){
//         let curStr=``
//            curStr+=i%3?'':'Fizz'
//            curStr+=i%5? '':"Buzz"
//            if(!curStr){curStr=`${i}`}
//      resultArray.push(curStr)
//     }
//     return resultArray
// };
//合适的方法
var fizzBuzz = function (n) {
    return Array.from({ length: n }, (v, i) => {
        let str = (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')
        return str ? str : `${i}`
    });
};
