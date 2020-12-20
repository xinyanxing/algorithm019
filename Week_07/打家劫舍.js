var rob = function (nums) {
    //第一家和最后一家相临所以不能抢
    if (!nums || !nums.length) { return 0 }
    if (nums.length < 2) { return Math.max(...nums) } //只有两家只抢一家
    const n = nums.length;
    //动态规划
    let dp = (l, r) => nums.slice(l, r).reduce((p, n) => [p[1], Math.max(p[0] + n, p[1])], [0, 0])[1];
    return Math.max(dp(1, n), dp(0, n - 1))
}

