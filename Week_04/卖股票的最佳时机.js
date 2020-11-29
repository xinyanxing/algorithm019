/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;  //先将受益归0
    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1]; //今天的和昨天的价钱进行比较
        if (diff > 0) {
            profit += diff   //收益累加
        }

    }
    return profit
};