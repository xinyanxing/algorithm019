/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//递归遍历  时间复杂度 O(n)
// var preorderTraversal = function(root) {
//        let result=[]
//         let preorderTreeNode=(node)=>{
//             if(node){
//                 result.push(node.val)  //如果没有子节点push val 有则往下递归
//                 preorderTreeNode(node.left) //左子树
//                 preorderTreeNode(node.right) //右子树
//             }
//         }
//         preorderTreeNode(root)
//         return result
// };

//迭代法
//用栈来记录
//栈:先进后出
var preorderTraversal = function (root) {
    let result = [] //结果数组
    let stack = [] //栈数组
    if (root) { stack.push(root) }  //根节点入栈
    while (stack.length > 0) {
        let curNode = stack.pop()
        result.push(curNode.val)  //后入栈的先出栈,把值添加到result 中
        if (curNode.right !== null) {
            stack.push(curNode.right)
        }
        if (curNode.left !== null) {
            stack.push(curNode.left)
        }

    }
    return result

};