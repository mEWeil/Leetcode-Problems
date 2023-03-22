// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
// Return the modified image after performing the flood fill.

// Constraints:
// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  if(image[sr][sc] == color) return image;
  fill(image, sr, sc, color, image[sr][sc]);
  return image;
}
var fill = function(image, sr, sc, color, cur) {
  if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
  if(cur != image[sr][sc]) return;
  image[sr][sc] = color;
  fill(image, sr-1, sc, color, cur);
  fill(image, sr+1, sc, color, cur);
  fill(image, sr, sc-1, color, cur);
  fill(image, sr, sc+1, color, cur);
};