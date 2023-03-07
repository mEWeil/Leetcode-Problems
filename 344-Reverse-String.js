// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let low = 0
    let high = s.length - 1
    let temp = ''

    while(low < high){
        temp = s[low]
        s[low] = s[high]
        s[high] = temp
        low++
        high--
    }
};