// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

/**
 * @param {number[]} A
 * @return {number[]}
 */
 
var sortedSquares = function(A) {
    return A.map((val)=>Math.pow(val,2)).sort(function(a,b){return a-b;});
};
console.log(sortedSquares([-7,-3,2,3,11]));

// Output >> [4,9,9,49,121]
