/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//第一种
// var removeElement = function(nums, val) {
//     let index=0;
//     for(const num of nums){
//          if(num!=val){
//              nums[index]=num;
//              index++
//          }
//     }
//     return index
// };
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//第二种
var removeElement = function (nums, val) {
    let index = nums.length
    for (let i = 0; i < index;) {
        if (nums[i] == val) {
            nums[i] = nums[index - 1]
            index--
        } else {
            i++
        }
    }
    return index
};

