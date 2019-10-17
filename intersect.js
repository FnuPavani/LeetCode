// Given two arrays, write a function to compute their intersection.
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

var intersect = function(a,b) {
  var result=a.filter((val)=>b.indexOf(val)>-1);
  return result;
}
console.log(intersect([4,9,5], [9,4,9,8,4]));

// Output >> [4,9]
