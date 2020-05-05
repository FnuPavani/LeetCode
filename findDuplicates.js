// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var findDuplicates = function(nums) {
    var once =[];
  var twice = [];
  for(var i=0;i<nums.length;i++){
    (!once.includes(nums[i])) ? once.push(nums[i]) : twice.push(nums[i]);
  }
  return twice;
};
console.log(findDuplicates([4,3,2,7,8,2,3,1]));

// Output >> [2, 3]
