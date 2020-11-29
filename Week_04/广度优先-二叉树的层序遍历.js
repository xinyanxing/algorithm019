/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//广度优先
var levelOrder = function (root) {
    let result = [], queue = [root] //把根节点存入数组中
    while (queue.length > 0) {
        let level = [], n = queue.length
        //遍历存的每一层的node
        for (let i = 0; i < n; i++) {
            let node = queue.pop() //将每一个节点推出
            level.push(node.val)
            //相当于下探到下一层将这一层的节点存起来
            if (node.left) { queue.unshift(node.left) }//将node 的 left 存入队列
            if (node.right) { queue.unshift(node.right) } //将node 的right 存入 队列
        }
        result.push(level)
    }
    return result
};