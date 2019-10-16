// Leet Code (Easy)
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.


var twoSum = function(nums, target) {
    var numObj = {};
    for(var i=0;i<nums.length;i++){
        numObj[nums[i]] = i;
    }
    for(var i=0;i<nums.length;i++){
        var diff = target-nums[i];
        if(numObj.hasOwnProperty(diff) && numObj[diff] !== i){
            return [i, numObj[diff]];
        }
    }
}
twoSum([2,10,7,15], 9);

// Output >> [0,2]
