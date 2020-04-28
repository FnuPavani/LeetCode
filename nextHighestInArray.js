// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 
var replaceElements = function(arr) {
  var new_arr = [];
  for(var i=0;i<arr.length;i++){
    var value = arr[i];
    var temp_arr = arr.slice(i+1, arr.length);
    if(temp_arr.length >0) {
        var next_highest = temp_arr.reduce((ref, val) => ref>val ? ref : val);
      new_arr.push(next_highest);
    } else {
      new_arr.push(-1);
    }
  }
  return new_arr;
};
console.log(replaceElements([17,18,5,4,6,1]));

// Output >> [18,6,6,6,1,-1]
