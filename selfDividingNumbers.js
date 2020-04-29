// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Input: left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 
var selfDividingNumbers = function(left, right) {
  var result = [];
    for(var i=left;i<=right;i++){
      if(i%10 === i){
        result.push(i); 
      } else if(i%10 !==0) {
        var isDivisible = i.toString().split("").map(Number).reduce((acc,val) => ((acc && i%Number(val) === 0) ? true : false),true );
        if(isDivisible) result.push(i); 
      }
    }
  return result;
};
console.log(selfDividingNumbers(1,22));

// Output >> [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
