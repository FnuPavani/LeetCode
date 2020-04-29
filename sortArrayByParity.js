// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

/**
 * @param {number[]} A
 * @return {number[]}
 */
 
var sortArrayByParity = function(A) {
    var odd = [];
    var even = [];
    for(var i=0;i<A.length;i++){
      if(A[i]%2 === 0) even.push(A[i]);
      if(A[i]%2 !== 0) odd.push(A[i]);
    }
  return even.concat(odd)  
};
console.log(sortArrayByParity([1,2,3,4,0]));

// Output >> [2, 4, 0, 1, 3]
