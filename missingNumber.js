// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
// Input: [3,0,1]
// Output: 2

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Input: [1,2]
// Output: 0

// Input: [0,1]
// Output: 2

// Input: [1]
// Output: 0

// Input: [0]
// Output: 1

// Input: [9]
// Output: 8

// Input: [10]
// Output: 11

var missingNumber = function(nums) {
  
  if(nums.length == 1 && nums[0]%10 != 1)
     return nums[0]+1;
   else if(nums.length == 1 && nums[0]%10 == 1)
     return nums[0]-1;
   var min = Math.min.apply(null,nums);
   var max = Math.max.apply(null,nums);
   if(min != 0)
     return 0;
   for(var i=min;i<=max;i++){
     if(!nums.includes(i))
       return i;
   }
    return i;
};
