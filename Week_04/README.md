# week4-学习笔记

### 深度优先和广度优先
   #### 搜索-遍历
    - 每个节点都哟啊访问一次
    - 每个节点仅仅只要访问一次
    -对于节点的访问顺序不限分为
        - 深度优先(DFS) depth first search
        - 广度优先(BFS) breadth first search
        - 优先级优先(更加适用于现实中的很多业务场景,这样的算法一般称为为启发式搜索)

    
 ### 深度优先
    
```
    //代码模板 类似递归 本身就是一种递归
    const visited = new Set()
    const dfs = node => {
      if (visited.has(node)) return  // 终止条件
      visited.add(node) // 处理层当前逻辑
      dfs(node.left)   //下钻 走到子节点去
      dfs(node.right)   //下钻 走到子节点去  如果是多叉树的话记是children
    }
 ```
 ```
    //多叉树
    visited=set()
    def dfs(node,visited): 
    visited add(node)
    #process current node here
    for next_node in node childeren():
    if not next_node in visited: 
    dfs(next node,visited)
 ```

 还有一种是非递归的写法:手动维护一个栈


### 广度优先
 广度优先不再使用 *递归* 或者是 *栈* 而是使用所谓的队列(先进先出)
广度优先的遍历顺序是一层一层的分层遍历,就像是水滴,滴到了水面,它的水波纹一层一层扩散出去就行了;
这种方式也更加适合人脑的思维方式
 
 队列更多的就是一个数组,java 里用的更多的是一个双端队列,deque
代码模板
```
const bfs = (root) => {
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop() //每次循环将最后个弹出 //此种情景 shift 和 pop 没有区别
      level.push(node.val)  // 依次将node 的val 添加到level 数组中(level 收集的是这一层的值)
      //相当于下探到下一层将这一层的节点存起来 
      if (node.left) queue.unshift(node.left) 
      if (node.right) queue.unshift(node.right) /
    }
    result.push(level) //结果是一个二维数组 [[3],[9,20],[15,7]]
  }
  return result
};

```

 遍历顺序说明:
   1.  一开始队列为空
   2. 然后把开始节点加入到队列里面去
   3. 同时要维护一个bisited 这么一个节点
   4. 只要队列不为空就往数组里加
   5. process 这个节点,同时从这个节点扩散出它的周围节点,依次加入到队列里面去

所以产生的一个效果就是我么一个一个访问,同时因为队列本身是先入先出的所以它会按照层的这个顺序一个一个一个从队列里面取就行了,也就是说按照排队来看的话,这里产生了一个队列排队的队列是queue,然后把最开始的结点放到队列里面去,然后每次从队列里面取了之后,再把他的儿子结点再放在这个队列里面去,他就会按照这个层次走下去.


#### 小结
    深度优先和广度优先就是像 for loop 和 recursion 一样,约定俗成的写法记住就ok,它本身就是用一个queue,再用一个循环来实现,一般来说是用一个递归来实现(dfs 也可以手动维护一个栈)
    写的时候可以用递归的方式也可以用循环的方式,递归的方式比较简单(系统自动为你维护了一个栈,函数的调用栈)
    广度优先的话,系统没有办法维护queue 这么一个数据结构,所以必须手动维护,当然也可以手写维护一个栈的程序


### 贪心算法
    贪心算法是一种在每一步选择中都采取当前状态下最好或最优(既最有利) 的选择,从而希望导致结果是全局好或最优的算法.
    贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择,不能*回退*.动态规划则会保存以前的结果对当前进行选择,有回退功能

    贪心算法往往是采用局部最优的方式,就是在当下选择最好或者最优的方式,所以一般来说当下最好的未必是全局最优的,这也是这种算法的局限性,所以在实际应用中贪心算法在某一步可以用贪心,然后在全局加一个搜索递归或者是动态规划
        - 贪心: 当下做局部最优判断
        - 回溯: 能够回退
        - 动态规划:最优判断+回退 (动态规划则会保存以前的结果)

#### 贪心算法应用的场景
    贪心算法可以解决一些最优化问题:
        - 求图中的最小生成树
        - 求哈夫曼编码
        - 分饼干 等

一个问题如果可以通过贪心法来解决,那么贪心法一般是解决这个问题的最好的办法.由于贪心法的高校性以及其所求得的答案比较接近最优结果,贪心法也可以用作辅助算法或者直接解决一些要求结果不特别精确的问题


### 二分查找
 二分查找指的是在有序的里面进行查找
 二分查找的前提:
  1. 目标函数单调性(单调递增或者递减)
  2. 存在上下界 (bounded)
  3. 能够通过索引访问 (index accessible)

  代码模板
```
 left,right=0;len(array)-1
 while left<=right
  mid=(left+right)/2
  if array[mid]=target
  # find the target!!
  break or return result
  elif array[mind]<target;
  left=mid+1
  else
  right=mid-1

```

    

  