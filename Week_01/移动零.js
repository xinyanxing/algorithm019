/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//[1,0,2,3,4]]
// i=0 nums[j]: nums[0]=nums[i] j:1
// 当  nums[i]为0时 不会走的if 条件也就是j 不会++  j会落后于i,所以也就是有0存在
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {

        // if (nums[i] !== 0) {
        //     nums[j]=nums[i] //如果不是0 将非0 元素往前移动
        //     if(i!==j){
        //         nums[i]=0   //将0后移  //当0和j 不保持一致的时候说明有0存在
        //     }
        //      j++
        // }
        //解法 2
        if (nums[j] === 0) {
            nums.splice(j, 1)
            nums[nums.length] = 0
        } else {
            j++
        }
    }
};
moveZeroes([0, 1, 0, 3, 12])