/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length
    let m = text2.length
    //0 主要是用来初始化的,因为了避免0行0列 空串 ,即(专门让索引为 0 的行和列表示空串)
    let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0)) //生成表格 n+1 行 m+1 列
    //为了有效从1开始
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    return dp[n][m]
};