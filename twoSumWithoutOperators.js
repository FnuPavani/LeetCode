// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -

// Input: a = 1, b = 2
// Output: 3

// Input: a = -2, b = 3
// Output: 1

var getSum = function(a, b) {
     var carry=0;
      while(b!=0){
        carry=a&b;
        a=a^b;
        b=carry<<1;
      }
      return a;
};
console.log(getSum(-2,-3));

// Output >> -5
  
