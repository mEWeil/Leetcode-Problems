// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Constraints:
// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) { 
  let lastNonZeroIdx = 0
  for(let i = 0; i < nums.length; i++){
      if(nums[i] !== 0){
          nums[lastNonZeroIdx] = nums[i]
          lastNonZeroIdx++
      }
  }

  for(let i = lastNonZeroIdx; i < nums.length; i++){
      nums[i] = 0
  }
};