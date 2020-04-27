// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(nums) {
  var product = nums.toString().split("").map(Number).reduce((data, value)=> data*value);
  var sum = nums.toString().split("").map(Number).reduce((data, value, arr)=> data+value);
  return product - sum;
};
console.log(subtractProductAndSum(4421));

// Output >> 21
