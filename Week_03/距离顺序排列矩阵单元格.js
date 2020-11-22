/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 * BFS
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    const res = [];
    const visited = new Array(R)
    for (let i = 0; i < R; i++) {
        visited[i] = new Array(C).fill(false)  //依次将每行的点存入visted 中,同时标记为false
    }
    const q = [[r0, c0]] //声明一个数组 存入原点
    visited[r0][c0] = true //将原点标记为true 已被访问

    while (q.length) {
        const cur = q.shift() //取出第一个元素
        const x = cur[0], y = cur[1];
        res.push(cur)   //存入原点坐标
        //由原点发散 四向存入+标记
        if (x + 1 < R && !visited[x + 1][y]) { //如果该点没有被访问过
            q.push([x + 1, y]);
            visited[x + 1][y] = true
        }
        if (x - 1 >= 0 && !visited[x - 1][y]) { //如果该点没有被访问过
            q.push([x - 1, y]);
            visited[x - 1][y] = true
        }
        if (y + 1 < C && !visited[x][y + 1]) { //如果该点没有被访问过
            q.push([x, y + 1]);
            visited[x][y + 1] = true
        }
        if (y - 1 >= 0 && !visited[x][y - 1]) { //如果该点没有被访问过
            q.push([x, y - 1]);
            visited[x][y - 1] = true
        }

    }
    return res
};