// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let queue = [], oranges = 0, time = 0;
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    if (grid[r][c] === 1) oranges++
    else if (grid[r][c] === 2) queue.push([r,c,0]);
  }
}
const dirs = [[0,1], [1,0], [0,-1], [-1,0]];
const endR = grid.length - 1, endC = grid[0].length - 1;
while (queue.length && oranges) {
  const [curR, curC, mins] = queue.shift();
  if (grid[curR][curC] === 1) {
    grid[curR][curC] = 2;
    oranges--;
    time = mins;
  }
  for (let [addR, addC] of dirs) {
    const [newR, newC] = [curR + addR, curC + addC];
    if (newR < 0 || newR > endR || newC < 0 || newC > endC) continue;
    if (grid[newR][newC] === 1) {
      queue.push([newR, newC, mins + 1])
    }
  }
}
return oranges ? -1 : time;
};