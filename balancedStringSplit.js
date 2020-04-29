// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

/**
 * @param {string} s
 * @return {number}
 */
 
var balancedStringSplit = function(s) {
  var left = 0;
  var right=0;
  var result = 0;
  for(var i=0;i<s.length;i++){
    if(s[i] === 'R') right++;
    if(s[i] === 'L') left++;
    if(left === right) {
      result++;
      left = 0;
      right = 0;
    }
  }
  return result;
};
console.log(balancedStringSplit("RLLLRRRLR"));

// Output >> 3
