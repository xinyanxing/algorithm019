/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    let len = A.length
    let left = 0;
    let right = len - 1;

    //判断左边节点是否是数组的两端
    //判断当前节点是否小于相邻节点是否需要爬坡
    while (left < right && A[left] < A[left + 1]) {
        left++;

    }
    //判断右边节点是否是数组的两端
    //判断当前节点是否大于相邻节点是否需要爬坡
    while (left < right && A[right - 1] > A[right]) {
        right--;

    }

    return left !== 0 && left === right && right !== len - 1 //// //如果不是边节点,同时左右会于山顶


};