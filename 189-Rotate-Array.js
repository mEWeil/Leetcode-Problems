// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Constraints:
// 1 <= nums.length <= 10^5
// -2^31 <= nums[i] <= 2^31 - 1
// 0 <= k <= 10^5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k %= nums.length

  let reverse = function(i,j){
      while(i<j){
          let temp = nums[i]
          nums[i] = nums[j]
          nums[j] = temp
          i++
          j--
      }
  }

  reverse(0, nums.length-1)
  reverse(0, k-1)
  reverse(k, nums.length-1)
};