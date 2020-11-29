/**
 * @param {number[]} nums
 * @return {boolean}
 */
//分析
//从右往左遍历
// 如果 0能跳到->1能跳到->2能跳到->3 则为true 否则 false
var canJump = function (nums) {
    let lenPoint = nums.length - 1; //最大长度
    let leftPos = lenPoint //设置起点位置

    for (let left = lenPoint; left >= 0; left--) {
        if (nums[left] + left >= leftPos) { //nums[left]+left  当前能往前走的步数+当前所在的点已走的坐标   说明可以到达
            leftPos = left   //将起点位置设置为坐标 (相当于)
        }
    }
    return leftPos === 0
};