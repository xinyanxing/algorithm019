/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

//分析:
//1:局部最优:大饼干喂给胃口大的,充分利用饼干尺喂饱一个
//2:全局最优: 喂饱尽可能多的小孩
//g:胃口值
//s:饼干尺寸值
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b) //升序排列胃口值
    s.sort((a, b) => a - b) //升序排列饼干值

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[total]) {  //因为是升序排列所以是从最小值开始匹配的 //如果匹配了则加加 //如果尺寸满足了胃口
            total++
        }
    }
    return total

};