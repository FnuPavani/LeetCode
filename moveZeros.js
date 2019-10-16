// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
    for(var i=0;i<nums.length;i++){
      if(nums[i]===0){
        var zero = nums[i];
        var index = nums.indexOf(zero);
        nums.splice(index,1);
        nums.push(zero);
      }
    }
  return nums;
};
console.log(moveZeroes([0,1,0,3,12]));

// Output >> [1,3,12,0,0]
