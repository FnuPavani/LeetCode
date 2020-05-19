// Given a string, find the length of the longest substring without repeating characters.
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

/**
 * @param {string} s
 * @return {number}
 */
 
var lengthOfLongestSubstring = function(s) {
 var count=0;
 var new_str="";
 for(var i=0;i<s.length;i++){
   var index = new_str.indexOf(s[i]);
   if(index!== -1){
     if(new_str.length>count){
       count = new_str.length;
     }
     new_str = new_str.slice(index+1);
   }
   new_str+=s[i];
 } 
 if(new_str.length>count){
    count = new_str.length;
  }
  return count;
}
console.log(lengthOfLongestSubstring("pwwkew"));

// Output >> 3

