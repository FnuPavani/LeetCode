// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function(x) {
    if(x<0) return false;
    let reverseX = Number(x.toString().split("").reverse().join(""));
    if(x === reverseX) return true;
    return false;
};
console.log(isPalindrome(123));

// Output >> true
