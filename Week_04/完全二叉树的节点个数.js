/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (root === null) {  //如果根为空 return
        return 0;
    }
    let lh, rh = 0;   //声明 左子树高度,和右子树高度
    let lNode, rNode = root; //所有的子从root 出发
    while (lNode) {  //循环遍历左子树,计算做子树深度
        lh++;  //深度加一
        lNode = lNode.left
    }
    while (rNode) {
        rh++
        rNode = rNode.right
    }

    if (lh == rh) { //如果左子树深度==右子树深度  为完美二叉树 (所有节点都是满的)
        return 2 ** lh - 1  //计算公式
    }

    return 1 + countNodes(root.left) + countNodes(root.right) //如果叶子节点不饱满 那么就是左子树的节点+右子树的节点+根


};