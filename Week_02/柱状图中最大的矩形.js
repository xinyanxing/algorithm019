/**
 * @param {number[]} heights
 * @return {number}
 * 栈方法
 * 1:声明一个栈,从小到大入栈,保证有序性
 * 2:如果遇到比栈顶元素大的值,入栈,反之弹出栈顶
 * 3:stack 存的是下标
 * 
 */

const largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
        //heights[stack[stack.length - 1]]:栈顶位置的值
        while (stack && heights[stack[stack.length - 1]] > heights[i]) { //数组中的元素要 < 栈顶元素
            const j = stack.pop();  //栈顶元素出栈
            //stack[stack.length - 1] //新栈顶元素
            //i - stack[stack.length - 1]  数组下标- (新栈顶元素下标): 宽度
            //最后的-1 为 宽度
            maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea); //算出当前最大面积
        }
        stack.push(i);
    }
    return maxArea;
};