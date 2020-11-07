/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashObj = {} // 用来存
    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i] //当前值
        let otherNums = target - curNum  //对值
        if (hashObj[otherNums] === undefined) {
            hashObj[curNum] = i
        } else {
            return [hashObj[otherNums], i]
        }

    }
};