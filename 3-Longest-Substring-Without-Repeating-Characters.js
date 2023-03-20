// Given a string s, find the length of the longest substring without repeating characters.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const seen = new Map();
  let start = 0;
  let max = 0;
  for(let i = 0; i < s.length; i++) {
      if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
      seen.set(s[i], i);
      max = Math.max(i - start + 1, max);
  } 
  return max; 
};