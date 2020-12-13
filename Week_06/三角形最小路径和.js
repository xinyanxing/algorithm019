/**
 * @param {number[][]} triangle
 * @return {number}
 */
//解法一动态规划-自底向上
// var minimumTotal = function(triangle) {
//      const dp=triangle
//      for(var i=dp.length-2;i>=0;i--){
//          for(var j=0;j<dp[i].length;j++){
//              dp[i][j]=Math.min(dp[i+1][j],dp[i+1][j+1])+dp[i][j]
//          }
//      }
//      return dp[0][0]
// };

//解法二 --动态规划-降维
//自底向上递归时，其实每次只会用到上一层数据，因此不需二维数组存储所有可能情况来一一比较
var minimumTotal = function (triangle) {
    let dp = new Array(triangle.length + 1).fill(0)
    for (let i = triangle.length - 1; i >= 0; i--) {
        for (var j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0]
};

//递归
//超时
// var minimumTotal = function(triangle) {
//     let len=triangle.length
//     let row=0;
//     let col=0;

//     function helper(row,col){
//         console.log('row')
//         console.log(row)
//          //terminator
//          if(row==len-1){return triangle[row][col] }
//            //分治 获得子结果集合
//            let left=helper(row+1,col,triangle)
//            let right=helper(row+1,col+1,triangle)
//            return Math.min(left,right)+triangle[row][col]
//     }

//   return helper(row,col,)
// };