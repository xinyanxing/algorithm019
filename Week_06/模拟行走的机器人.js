/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 * 
 *  direx[] = {0,1,0,-1};
 * direy[] = {1,0,-1,0};
 * direx[],direy[] 要竖着对齐看
 * 
 *  - 向北，坐标轴上x不动，y+1, 即(0,1)
 *  - 向东，坐标轴上x+1，y不动, 即(1,0)
 *  - 向南，坐标轴上x不动，y-1, 即(0,-1)
 * - 向西，坐标轴上x-1，y不动, 即(-1,0) 
 */
var robotSim = function (commands, obstacles) {
    let direx = [0, 1, 0, -1]
    let direy = [1, 0, -1, 0]
    let curx = 0; //当前横坐标
    let cury = 0; //当前纵坐标
    let curdire = 0; //当前方向坐标
    let ans = 0;
    let obstacleSet = new Map()
    for (let i = 0; i < obstacles.length; i++) {
        obstacleSet.set(make_pair(obstacles[i][0], obstacles[i][1]));
    }

    for (let i = 0; i < obstacles.length; i++) {
        if (commands[i] === -1) {
            curdire = (curdire + 1) % 4 //向右转90度
        } else if (commands[i] === -2) {
            curdire = (curdire + 3) % 4  //向左旋转90度
        } else {
            for (let j = 0; j < commands[i]; j++) {
                //试图走出一步，并判断是否遇到了障碍物，
                let nx = curx + direx[curdire]
                let ny = cury + direy[curdire]
                //当前坐标不是障碍点，计算并与存储的最大欧式距离的平方做比较
                if (!obstacleSet.get(make_pair(nx, ny))) {
                    curx = nx;
                    cury = ny
                    ans = max(ans, curx * cury + cury * cury)
                } else {
                    //是障碍点，被挡住了，停留，只能等待下一个指令，那可以跳出当前指令了
                    break
                }
            }
        }
        return ans
    }
};