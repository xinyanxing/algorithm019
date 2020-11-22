/**
 * @param {character[][]} grid
 * @return {number}
 */
//i>rows-1  因为 i 是从0 计算的
//递归方法
function helper(grid, i, j, rows, cols) {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0") { return } //如果超出边界或者已被访问过 退出

    grid[i][j] = '0';//访问的节点标记为 0 
    helper(grid, i, j + 1, rows, cols); //列往前 +1
    helper(grid, i, j - 1, rows, cols); //行往后 -1 
    helper(grid, i + 1, j, rows, cols); //同列 行往前+1
    helper(grid, i - 1, j, rows, cols); //同列 行往后-1,当前列  //四个方向都去访问
}
var numIslands = function (grid) {
    let res = 0;
    const rows = grid.length
    if (rows.length === 0) { return }
    const cols = grid[0].length
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                helper(grid, i, j, rows, cols)
                res++
            }
        }
    }
    return res
};