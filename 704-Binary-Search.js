// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

//You must write an algorithm with O(log n) runtime complexity.

//Constraints:
// 1 <= nums.length <= 10^4
// -10^4 < nums[i], target < 10^4
// All the integers in nums are unique.
// nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
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
    return -1
};