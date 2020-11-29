/**
 * @param {number} n
 * @return {string[][]}
 */
//分析
//1.将所有的棋盘上的位置标记为 .
//2.每一行去遍历,判断皇后可以放的位置
//3.同行的不能放,同列的不能放,同对角线的不能放  (对比的时候只需要和已放置的皇后比较就可以了)

// var solveNQueens = function(n) {
//     const board=new Array(n);
//     for(let i=0;i<n;i++){
//          board[i]=new Array(n).fill('.') //所有的棋盘上的位置填充为 .
//     }
//     const res=[];
//     const isValid=(row,col)=>{
//          for(let i=0;i<row;i++){ //之前的行
//             for(let j=0;j<n;j++){ //每一行的所有列
//                 if(board[i][j]=='Q'&&   //i+j === row+col  : 左对角线     i-j === row-col:右对角线
//                 (j==col||i+j === row+col || i-j === row-col )
//                 ){return false }
//             }
//          }
//          return true
//     }

//    const helper=(row)=>{
//      if(row>=n){ //递归出口 行超出了现有棋盘 表示已经遍历完了需要输出棋盘
//         const stringBoard=board.slice()//复制一份board
//         for(let i=0;i<n;i++){
//              stringBoard[i]=stringBoard[i].join('')
//         }
//         res.push(stringBoard) //存入res 数组
//         return;
//      }
//      for (let col=0;col<n;col++){//列出所有的列
//        console.log('isValid(row,col)--for',isValid(row,col))
//           if(isValid(row,col)){
//              board[row][col]='Q',  //放置Q皇后
//              helper(row+1); //下探 
//             board[row][col]='.'  //递归没有走完之前不会走到
//           }
//      }
//   }

//     helper(0);
//     return res
//  };


//优化版本
var solveNQueens = function (n) {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.')
    }
    const cols = new Set(); //列集合,记录出现过的皇后的列
    const diag1 = new Set(); //正对角线集
    const diag2 = new Set();//反对角线集合
    const res = []

    const helper = (row) => {
        if (row == n) {
            const stringBoard = board.slice();
            for (let i = 0; i < n; i++) {
                stringBoard[i] = stringBoard[i].join('');
            }
            res.push(stringBoard);
            return;
        }
        for (let col = 0; col < n; col++) {
            //如果当前点的所在列,所在的对角线都没有皇后,即可选择,否则,跳过
            //row +col :pie  
            //row-col:na
            if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
                board[row][col] = 'Q';
                cols.add(col);
                diag1.add(row + col)
                diag2.add(row - col)
                helper(row + 1); //下探
                board[row][col] = '.'//下探完回来之后把之前所有的影响去掉
                cols.delete(col);
                diag1.delete(row + col)
                diag2.delete(row - col)
            }
        }
    }
    helper(0);
    return res
};

