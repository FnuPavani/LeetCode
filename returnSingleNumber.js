// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
    var new_num=[];
    for(var i=0;i<nums.length;i++){
      if(!new_num.includes(nums[i])){
        new_num.push(nums[i]);
      } else {
        var index = new_s.indexOf(nums[i]);
        if(index>-1)
          new_num.splice(index,1)
      }
    }
  return new_num;
};

// Output >> [4]
