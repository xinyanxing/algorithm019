/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//快排法
// var getLeastNumbers = function(arr, k) {
//     return arr.sort((a,b)=>a-b).slice(0,k)
// };
//最大堆
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];  //把堆拉平
}

//实现一个堆
class MaxHeap {
    constructor(arr = []) {
        this.container = [];
        if (Array.isArray(arr)) {
            arr.forEach(this.insert.bind(this))
        }
    }
    //插入
    insert(data) {
        const { container } = this;
        container.push(data)
        let index = container.length - 1; //大顶堆的最大值的索引
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (container[index] <= container[parent]) { //如果子节点小于父亲节点
                break;  //结束循环,跳出循环体,执行循环外的程序
            }
            swap(container, index, parent)
            index = parent
        }
    }

    extract() {
        const { container } = this;
        if (!container.length) {
            return null;
        }
        swap(container, 0, container.length - 1)
        const res = container.pop()
        const length = container.length;

        let index = 0, exchange = index * 2 + 1;
        while (exchange < length) {
            let right = index * 2 + 2;
            if (right < length && container[right] > container[exchange]) {
                exchange = right
            }
            if (container[exchange] <= container[index]) {
                break;
            }
            swap(container, exchange, index)
            index = exchange;
            exchange = index * 2 + 1  //i*2+1
        }
        return res

    }


    top() {
        if (this.container.length) {
            return this.container[0];
        }
        return null
    }

}

var getLeastNumbers = function (arr, k) {
    const length = arr.length;
    if (k >= length) {
        return arr
    }
    const heap = new MaxHeap(arr.slice(0, k));
    for (let i = k; i < length; ++i) {
        if (heap.top() > arr[i]) {
            heap.extract();
            heap.insert(arr[i])
        }
    }
    return heap.container
};