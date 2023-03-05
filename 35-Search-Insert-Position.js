// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 10^4
// -10^4 <= nums[i] <= 10^4
// nums contains distinct values sorted in ascending order.
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length -1
  while(left <= right){
      const middle = Math.floor((left + right) / 2)
      const potentialMatch = nums[middle]
      if(potentialMatch === target){
          return middle
      } else if (target < potentialMatch){
          right = middle - 1
      } else {
          left = middle + 1
      }
  }
  return left
};