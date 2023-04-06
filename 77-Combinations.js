// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
// You may return the answer in any order.

// Constraints:
// 1 <= n <= 20
// 1 <= k <= n

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let out = comb(k, n);
  return out;
};

function comb(max, n, out=[], curr = [], index = 1){
  if(curr.length===max){
      out.push(curr);
      return [];
  }
  else{
      while(index<=n){
          comb(max, n, out, [...curr, index], ++index);
      }
      return out;
  }
}